import React, { useState } from "react";
import { Button, Box, Grid, Card, CardContent, TextField } from "@mui/material";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import axios from "axios";
import "./ClimaApp.css";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";

export default function ClimaApp(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  const [forecastData, setForecastData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coordinates,
      temperature: response.data.daily[0].temperature.day,
      humidity: response.data.daily[0].temperature.humidity,
      date: new Date(response.data.daily[0].time * 1000),
      description: response.data.daily[0].condition.description,
      icon: response.data.daily[0].condition.icon,
      icon_url: response.data.daily[0].condition.icon_url,
      iconDescription: response.data.daily[0].condition.description,
      wind: response.data.daily[0].wind.speed,
      city: response.data.city,
      country: response.data.country,
    });
  }

  function handle1Response(response) {
    setForecastData({
      ready: true,
      coordinates: response.data.coordinates,
      temperature: response.data.daily[1].temperature.day,
      humidity: response.data.daily[1].temperature.humidity,
      date: new Date(response.data.daily[1].time * 1000),
      description: response.data.daily[1].condition.description,
      icon: response.data.daily[1].condition.icon,
      icon_url: response.data.daily[1].condition.icon_url,
      iconDescription: response.data.daily[1].condition.description,
      wind: response.data.daily[1].wind.speed,
      city: response.data.city,
      country: response.data.country,
    });
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "c8ofb37351203d2abe70t35b1d4121da";
    const units = "metric";
    // var apiUrlForecast = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=${units}`;
    // axios.get(apiUrlForecast).then(handleResponse);

    // console.log(response);
    // const apiKey = "c8ofb37351203d2abe70t35b1d4121da";
    // const units = "metric";
    // var apiUrl = `https://api.shecodes.io/weather/v1/current?lon=${response.data.coordinates.longitude}&lat=${response.data.coordinates.latitude}&key=${apiKey}&units=${units}`;

    // axios.get(apiUrl).then(handle1Response);


    var forecastdata = {
      data: {
        city: city,
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
    handleResponse(forecastdata);

  }

  if (weatherData.ready) {
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
  } else {
    search();
    return "Loading...";
  }
}
