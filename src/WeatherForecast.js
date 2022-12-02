import React from "react";
import { Box, Grid, Paper, styled } from "@mui/material";
import WeatherIcon from "./WeatherIcon";




const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: "theme.palette.text.secondary",

}));



export default function WeatherForecast() {
  return (
    <Box sx={{ flexGrow: 1, p: 6 }}>
      <Grid container spacing={3}>
        <Grid item xs spacing={3}>
          <Item>
            Um
            <WeatherIcon code="thunderstorm-day" />
            <Item
              xs={6}
              className="WeatherForecast-temp-min"
              sx={{
                width: "30%",
                p: 0,
                m: 0.25,
                display: "inline-flex",
                justifyContent: "center",
              }}
            >
              10°
            </Item>
            <Item
              xs={6}
              sx={{
                width: "30%",
                p: 0,
                m: 0.25,
                display: "inline-flex",
                justifyContent: "center",
              }}
            >
              19°
            </Item>
          </Item>
        </Grid>
        <Grid item xs>
          <Item>Dois</Item>
        </Grid>
        <Grid item xs>
          <Item>Tres</Item>
        </Grid>
        <Grid item xs>
          <Item>Quatro</Item>
        </Grid>
        <Grid item xs>
          <Item>Cinco</Item>
        </Grid>
        <Grid item xs>
          <Item>Seis</Item>
        </Grid>
      </Grid>
    </Box>
  );
}
