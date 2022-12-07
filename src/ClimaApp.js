import React, { useState, useEffect } from "react";
import { Button, Box, Grid, Card, CardContent, TextField } from "@mui/material";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import axios from "axios";
import "./ClimaApp.css";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import { useWeatherData } from "./hooks/useWeatherData";

export default function ClimaApp(props) {
  const [city, setCity] = useState(undefined);
  const [searchCity, setSearchCity] = useState(undefined);
  const response = useWeatherData(searchCity);

  const weatherData = !response
    ? { ready: false }
    : {
        ready: true,
        coordinates: response.coordinates,
        temperature: response.daily[0].temperature.day,
        humidity: response.daily[0].temperature.humidity,
        date: new Date(response.daily[0].time * 1000),
        description: response.daily[0].condition.description,
        icon: response.daily[0].condition.icon,
        icon_url: response.daily[0].condition.icon_url,
        iconDescription: response.daily[0].condition.description,
        wind: response.daily[0].wind.speed,
        city: response.city,
        country: response.country,
      };

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search() {
    setSearchCity(city);
  }

  return (
    <Card
      className="mainAppCard"
      sx={{
        width: "100vh",
        height: "80vh",
        display: "inline-flex",
        mt: 6,
        mb: 0,
        bgcolor: "#f2f2f9",
      }}
    >
      <CardContent sx={{ p: 3, m: 0, display: "inline-flex" }}>
        <Box
          sx={{
            border: 1,
            borderColor: "rgba(18, 89, 122, 0.945)",
            borderRadius: 1,
          }}
        >
          <Grid container sx={{ mt: 2 }}>
            <Grid
              item
              xs={1}
              sx={{
                textAlign: "left",
                ml: 4,
                mt: 1,
                display: "flex-start",
              }}
            >
              <img src="ClimaLogo.png" alt="appLogo" height="64vh"></img>
            </Grid>
            <Grid
              item
              xs={11}
              sx={{
                ml: 32,
                mt: -3,
                display: "flex-start",
              }}
            >
              <TextField
                id="outlined-search"
                label="Type a city name"
                type="search"
                size="small"
                sx={{ width: "34vh", height: 36, p: 0 }}
                onChange={handleCityChange}
              />
              <Button
                variant="contained"
                onClick={search}
                sx={{
                  textTransform: "capitalize",
                  color: "#000000",
                  bgcolor: "#4595D4",
                  fontSize: 14,
                  fontFamily: "Trebuchet MS",
                  ml: 0.8,
                  mr: 0.8,
                  width: 38,
                  height: 36,

                  "&:hover": {
                    backgroundColor: "#DAA520",
                  },
                }}
              >
                <SearchRoundedIcon />
              </Button>

              <Button
                variant="contained"
                sx={{
                  textTransform: "capitalize",
                  color: "#000000",
                  bgcolor: "rgb(114, 189, 114)",
                  fontSize: 14,
                  fontFamily: "Trebuchet MS",
                  width: 30,
                  height: 36,
                  "&:hover": {
                    backgroundColor: "#DAA520",
                  },
                }}
              >
                <PlaceOutlinedIcon />
              </Button>
            </Grid>

            <WeatherInfo data={weatherData} />
            <WeatherForecast coordinates={weatherData.coordinates} />
          </Grid>
        </Box>
      </CardContent>
    </Card>
  );
}
