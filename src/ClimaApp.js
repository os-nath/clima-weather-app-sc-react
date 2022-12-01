import React, { useState } from "react";
import { Button, Box, Grid, Card, CardContent, TextField } from "@mui/material";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import axios from "axios";
import "./ClimaApp.css";
import WeatherInfo from "./WeatherInfo";

export default function ClimaApp(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      coordinates:
        "Lat Long: " +
        response.data.coordinates.latitude +
        ", " +
        response.data.coordinates.longitude,
      temperature: response.data.temperature.current,
      humidity: response.data.temperature.humidity,
      date: new Date(response.data.time * 1000),
      description: response.data.condition.description,
      icon: response.data.condition.icon,
      icon_url: response.data.condition.icon_url,
      iconDescription: response.data.condition.icon,
      wind: response.data.wind.speed,
      city: response.data.city,
      country: response.data.country,
    });
  }

  function handleCityChange(event) {
    console.log(event);
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "c8ofb37351203d2abe70t35b1d4121da";
    const units = "metric";
    const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <Card
        sx={{
          width: "100vh",
          height: "80vh",
          display: "inline-flex",
          mt: 6,
          mb: 0,
          bgcolor: "#e2dee4",
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

              <WeatherInfo data={weatherData} searchfunction={search} />
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
