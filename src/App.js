import "./App.css";
import React, { useEffect, useState } from "react";
import "./ClimaApp.css";
import ClimaApp from "./ClimaApp.js";
import { useWeatherData } from "./hooks/useWeatherData";

import { Box, CircularProgress } from "@mui/material";

// add Geolocation function to get Lat and Long and pass the props to ClimaApp instead of defaultCity
// import CssBaseline from "@mui/material/CssBaseline";

var forecastdata = {
  data: {
    city: "Perth",
    country: "Australia",
    coordinates: {
      longitude: 115.8605801,
      latitude: -31.9558964,
    },
    daily: [
      {
        condition: {
          description: "overcast clouds",
          icon_url:
            "http://shecodes-assets.s3.amazonaws.com/api/weather/icons/broken-clouds-day.png",
          icon: "broken-clouds-day",
        },
        temperature: {
          day: 24.65,
          minimum: 16.81,
          maximum: 24.65,
          humidity: 47,
        },
        wind: { speed: 8.34 },
        time: new Date(1670299200),
      },
      {
        condition: {
          description: "light rain",
          icon_url:
            "http://shecodes-assets.s3.amazonaws.com/api/weather/icons/rain-day.png",
          icon: "rain-day",
        },
        temperature: {
          day: 26.3,
          minimum: 15.31,
          maximum: 27.09,
          humidity: 33,
        },
        wind: { speed: 8.76 },
        time: 1670385600,
      },
      {
        condition: {
          description: "light rain",
          icon_url:
            "http://shecodes-assets.s3.amazonaws.com/api/weather/icons/rain-day.png",
          icon: "rain-day",
        },
        temperature: {
          day: 23.82,
          minimum: 17.83,
          maximum: 23.97,
          humidity: 50,
        },
        wind: { speed: 7.76 },
        time: 1670472000,
      },
      {
        condition: {
          description: "scattered clouds",
          icon_url:
            "http://shecodes-assets.s3.amazonaws.com/api/weather/icons/scattered-clouds-day.png",
          icon: "scattered-clouds-day",
        },
        temperature: {
          day: 20.22,
          minimum: 16.2,
          maximum: 20.84,
          humidity: 49,
        },
        wind: { speed: 6.49 },
        time: 1670558400,
      },
      {
        condition: {
          description: "scattered clouds",
          icon_url:
            "http://shecodes-assets.s3.amazonaws.com/api/weather/icons/scattered-clouds-day.png",
          icon: "scattered-clouds-day",
        },
        temperature: {
          day: 20.84,
          minimum: 14.85,
          maximum: 21.46,
          humidity: 50,
        },
        wind: { speed: 7.24 },
        time: 1670644800,
      },
      {
        condition: {
          description: "sky is clear",
          icon_url:
            "http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-day.png",
          icon: "clear-sky-day",
        },
        temperature: {
          day: 25.36,
          minimum: 15.65,
          maximum: 26.93,
          humidity: 32,
        },
        wind: { speed: 7.73 },
        time: 1670731200,
      },
      {
        condition: {
          description: "sky is clear",
          icon_url:
            "http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-day.png",
          icon: "clear-sky-day",
        },
        temperature: {
          day: 27.96,
          minimum: 18.29,
          maximum: 28.79,
          humidity: 28,
        },
        wind: { speed: 7.94 },
        time: 1670817600,
      },
    ],
  },
};

function App() {
  const responseData = useWeatherData();

  if (responseData) {
    return (
      <div className="App">
        <ClimaApp defaultData={responseData} />

        {/* <CssBaseline enableColorScheme /> Not sure if I'll use it or when to start using it*/}

        <br />
        <br />
        <br />
        <footer>
          Open-sourced on{" "}
          <a
            href="https://github.com/os-nath/clima-weather-app-sc-react"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub{" "}
          </a>{" "}
          by
          <a
            href="https://www.linkedin.com/in/nathasha-soares-1327275a/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            Nath Soares
          </a>{" "}
          and hosted on
          <a
            href="https://637f1f9f48c65532b6f796d4--wondrous-pothos-41872e.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            Netlify
          </a>
        </footer>
      </div>
    );
  } else {
    return (
      <Box
        sx={{
          mt: 50,
          display: "flex",
          justifyContent: "center",
          color: "#024e88",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }
}
export default App;
