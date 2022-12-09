import React from "react";
import { Box, Grid, Paper, styled } from "@mui/material";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import "./ClimaApp.css";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: "theme.palette.text.secondary",
}));

export default function WeatherInfo(props) {
  var data = props.data;

  if (!data.ready) {
    return <Box>Please enter your city</Box>;
  } else {
    return (
      <>
        <Grid
          item
          xs={3}
          sx={{
            mt: 6,
            ml: 6,
            display: "column",
            justifyItems: "center",
          }}
        >
          <Item
            sx={{
              display: "column",
              justifyItems: "center",
              fontFamily: "Trebuchet MS",
              bgcolor: "transparent",
              boxShadow: "none",
            }}
          >
            <WeatherIcon
              className="icons"
              code={props.data.icon}
              alt={props.data.iconDescription}
              sx={{ mb: 10 }}
            />
            <br /> <br />
           
            <p>
              <FormattedDate date={data.date} />
            </p>
            <p>{data.description}</p>
            <p>Humidity: {data.humidity}%</p>
            <p>Wind: {data.wind} km/h</p>
          </Item>
        </Grid>

        <Grid item xs={3} sx={{ mt: 8 }}>
          <Item
            sx={{
              display: "column",
              justifyItems: "center",
              fontFamily: "Trebuchet MS",
              bgcolor: "transparent",
              boxShadow: "none",
              mr: 0,
              ml: 10,
            }}
          >
            <WeatherTemperature celsius={props.data.temperature} />
          </Item>
        </Grid>

        <Grid item xs={5}>
          <>
            <Item
              sx={{
                color: "#5a5c5e",
                fontFamily: "Trebuchet MS",
                mt: 2,
                ml: 0,
                bgcolor: "transparent",
                boxShadow: "none",
              }}
            >
              <h2>{data.city}</h2>
              <h4>{data.country}</h4>

              <ul>
                <li>{/* <FormattedDate date={data.date} /> */}</li>

                {/* <li>Humidity: {data.humidity}%</li>
                <li>Wind: {data.wind} km/h</li> */}
                <li>
                  Lat:{data.coordinates.latitude}, Lon:
                  {data.coordinates.longitude}
                </li>
              </ul>
            </Item>
          </>
        </Grid>
      </>
    );
  }
}
