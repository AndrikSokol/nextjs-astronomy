import { API_KEY, BASE_URL } from "../constants/http";
import { IPlanetary } from "@/shared/types/planetary";
import { ITimeRange } from "../types/timeRange";

export const api = {
  getPlanetaryApod: async (): Promise<IPlanetary> => {
    const response = await fetch(`${BASE_URL}?api_key=${API_KEY}`, {
      next: {
        revalidate: 60 * 60 * 24,
      },
    });
    if (!response.ok) throw new Error("Unable to fetch data!");
    return response.json();
  },

  getPlanetaryApodRange: async (date: ITimeRange): Promise<IPlanetary[]> => {
    const response = await fetch(
      `${BASE_URL}?api_key=${API_KEY}&start_date=${date.from}&end_date=${date.to}`
    );
    if (!response.ok) throw new Error("Unable to fetch data!");
    return response.json();
  },
};
