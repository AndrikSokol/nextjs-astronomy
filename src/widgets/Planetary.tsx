"use client";
// Import necessary modules
import { useEffect, useState } from "react";
import { IPlanetary } from "@/shared/types/planetary";
import { api } from "@/shared/api";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { MyImageList } from "./MyImageList";
import { MyDatePicker } from "./MyDatePicker";
import Image from "next/image";

export const Planetary = () => {
  const [planetary, setPlanetary] = useState<IPlanetary | null>(null);
  const [planetaries, setPlanitaries] = useState<IPlanetary[]>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await api.getPlanetaryApod();
        setPlanetary(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <Typography sx={{ color: "white", width: "100%", textAlign: "center" }}>
        Loading...
      </Typography>
    );
  }

  return (
    <>
      <div
        style={{
          position: "fixed",
          zIndex: "-1",
          width: "100vw",
          height: "110%",
          backgroundColor: "black",
        }}
      >
        <Image
          src="/night-sky.jpg"
          alt="night sky"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <Container
        maxWidth="xl"
        sx={{
          color: "white",
        }}
      >
        <Grid container spacing={2} sx={{ paddingTop: "10px" }}>
          <Grid item xs={6}>
            <MyDatePicker setPlanitaries={setPlanitaries}></MyDatePicker>
            {planetaries && <MyImageList planetaries={planetaries} />}
          </Grid>
          <Grid item xs={6}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography variant="h4" component="h1">
                Astronomy Picture of the Day
              </Typography>
              <Typography>{planetary?.date}</Typography>
              <Typography variant="h5" component="h2">
                {planetary?.title}
              </Typography>
              <img
                src={planetary?.hdurl}
                alt={planetary?.title}
                style={{
                  maxWidth: "80%",
                  height: "auto",
                  borderRadius: "10px",
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};
