"use client";

import { api } from "@/shared/api";
import { IPlanetary } from "@/shared/types/planetary";
import { ITimeRange } from "@/shared/types/timeRange";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import React, { Dispatch, FC, SetStateAction, useState } from "react";

type MyDatePickerType = {
  setPlanitaries: Dispatch<SetStateAction<IPlanetary[] | undefined>>;
};

export const MyDatePicker: FC<MyDatePickerType> = ({ setPlanitaries }) => {
  const [date, setDate] = useState<ITimeRange>({} as ITimeRange);

  const handleDatePickerChange = (key: string, value: any) => {
    const formattedDate = `${value.$y}-${value.$M + 1}-${value.$D}`;
    console.log(formattedDate);
    setDate((prevDate: ITimeRange) => ({
      ...prevDate,
      [key]: formattedDate,
    }));
  };

  const handleFindButtonClick = async () => {
    const data = await api.getPlanetaryApodRange(date);

    setPlanitaries(data);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        gap: "10px",
      }}
    >
      <DatePicker
        sx={{
          backgroundColor: "white",
        }}
        label="From"
        value={date.from}
        onChange={(newValue) => handleDatePickerChange("from", newValue)}
      />
      <DatePicker
        sx={{ backgroundColor: "white" }}
        label="To"
        value={date.to}
        onChange={(newValue) => handleDatePickerChange("to", newValue)}
      />
      <Button
        sx={{ width: "200px" }}
        variant="contained"
        color="success"
        onClick={handleFindButtonClick}
      >
        Get image
      </Button>
    </Box>
  );
};
