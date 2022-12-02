import React from "react";
import { Box, Grid, Paper, styled } from "@mui/material";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: "theme.palette.text.secondary",

}));

export default function WeatherForecast() {
  return (
    <Box sx={{ flexGrow: 1, p: 6 }}>
      <Grid container spacing={3}>
        <Grid item xs>
          <Item>
            Um
            <WeatherIcon
              className="WeatherForecast-icon"
              code="thunderstorm-day"
            />
            <Item
              xs={6}
              sx={{
                width: "30%",
                p: 0,
                m: 0.25,
                display: "inline-flex",
                justifyContent: "center",
                fontWeight: 600,
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
          <Item>
            Dois
            <WeatherIcon code="clear-sky-night" />
            <Item
              xs={6}
              sx={{
                width: "30%",
                p: 0,
                m: 0.25,
                display: "inline-flex",
                justifyContent: "center",
                fontWeight: 600,
              }}
            >
              8°
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
              16°
            </Item>
          </Item>
        </Grid>

        <Grid item xs>
          <Item>
            Tres
            <WeatherIcon code="mist-day" />
            <Item
              xs={6}
              sx={{
                width: "30%",
                p: 0,
                m: 0.25,
                display: "inline-flex",
                justifyContent: "center",
                fontWeight: 600,
              }}
            >
              7°
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
              14°
            </Item>
          </Item>
        </Grid>

        <Grid item xs>
          <Item>
            Quatro
            <WeatherIcon code="snow-night" />
            <Item
              xs={6}
              sx={{
                width: "30%",
                p: 0,
                m: 0.25,
                display: "inline-flex",
                justifyContent: "center",
                fontWeight: 600,
              }}
            >
              -9°
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
              0°
            </Item>
          </Item>
        </Grid>

        <Grid item xs>
          <Item>
            Cinco
            <WeatherIcon code="scattered-clouds-night" />
            <Item
              xs={6}
              sx={{
                width: "30%",
                p: 0,
                m: 0.25,
                display: "inline-flex",
                justifyContent: "center",
                fontWeight: 600,
              }}
            >
              11°
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
          <Item>
            Seis
            <WeatherIcon code="clear-sky-day" />
            <Item
              xs={6}
              sx={{
                width: "30%",
                p: 0,
                m: 0.25,
                display: "inline-flex",
                justifyContent: "center",
                fontWeight: 600,
              }}
            >
              18°
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
              32°
            </Item>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
