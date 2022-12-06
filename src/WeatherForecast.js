import React from "react";
import { Box, Grid, Paper, styled } from "@mui/material";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
 import axios from "axios";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: "theme.palette.text.secondary",
}));

export default function WeatherForecast(props) {

 console.log(props);


  return (
    <Box sx={{ flexGrow: 1, p: 6 }}>
      <Grid container spacing={3}>
        <Grid item xs>
          <Item
            sx={{
              bgcolor: "#f2f2f9",
              boxShadow: "2px 7px 8px 2px rgb(0 0 0 / 20%)",
              color: "#5a5c5e",
              fontFamily: "Trebuchet MS",
            }}
          >
            Um
            <WeatherIcon
              className="WeatherForecast-icon"
              code="thunderstorm-day"
              sx={{ mt: 5 }}
            />
            <Item
              xs={6}
              sx={{
                width: "30%",
                p: 0,
                m: 0.25,
                display: "inline-flex",
                justifyContent: "center",
                color: "#5a5c5e",
                bgcolor: "#f2f2f9",
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
                fontWeight: 600,
                color: "#5a5c5e",
                bgcolor: "#f2f2f9",
              }}
            >
              19°
            </Item>
          </Item>
        </Grid>

        <Grid item xs>
          <Item
            sx={{
              bgcolor: "#f2f2f9",
              boxShadow: "2px 7px 8px 2px rgb(0 0 0 / 20%)",
              color: "#5a5c5e",
              fontFamily: "Trebuchet MS",
            }}
          >
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
                color: "#5a5c5e",
                bgcolor: "#f2f2f9",
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
                fontWeight: 600,
                color: "#5a5c5e",
                bgcolor: "#f2f2f9",
              }}
            >
              16°
            </Item>
          </Item>
        </Grid>

        <Grid item xs>
          <Item
            sx={{
              bgcolor: "#f2f2f9",
              boxShadow: "2px 7px 8px 2px rgb(0 0 0 / 20%)",
              color: "#5a5c5e",
              fontFamily: "Trebuchet MS",
            }}
          >
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
                color: "#5a5c5e",
                bgcolor: "#f2f2f9",
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
                fontWeight: 600,
                color: "#5a5c5e",
                bgcolor: "#f2f2f9",
              }}
            >
              14°
            </Item>
          </Item>
        </Grid>

        <Grid item xs>
          <Item
            sx={{
              bgcolor: "#f2f2f9",
              boxShadow: "2px 7px 8px 2px rgb(0 0 0 / 20%)",
              color: "#5a5c5e",
              fontFamily: "Trebuchet MS",
            }}
          >
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
                color: "#5a5c5e",
                bgcolor: "#f2f2f9",
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
                fontWeight: 600,
                color: "#5a5c5e",
                bgcolor: "#f2f2f9",
              }}
            >
              0°
            </Item>
          </Item>
        </Grid>

        <Grid item xs>
          <Item
            sx={{
              bgcolor: "#f2f2f9",
              boxShadow: "2px 7px 8px 2px rgb(0 0 0 / 20%)",
              color: "#5a5c5e",
              fontFamily: "Trebuchet MS",
            }}
          >
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
                color: "#5a5c5e",
                bgcolor: "#f2f2f9",
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
                fontWeight: 600,
                color: "#5a5c5e",
                bgcolor: "#f2f2f9",
              }}
            >
              19°
            </Item>
          </Item>
        </Grid>
        <Grid item xs>
          <Item
            sx={{
              bgcolor: "#f2f2f9",
              boxShadow: "2px 7px 8px 2px rgb(0 0 0 / 20%)",
              color: "#5a5c5e",
              fontFamily: "Trebuchet MS",
            }}
          >
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
                color: "#5a5c5e",
                bgcolor: "#f2f2f9",
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
                fontWeight: 600,
                color: "#5a5c5e",
                bgcolor: "#f2f2f9",
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
