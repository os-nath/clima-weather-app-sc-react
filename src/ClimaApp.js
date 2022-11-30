import React, { useState } from "react";
import { Button, Box, Grid, Card, CardContent, TextField } from "@mui/material";
// import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
// import IconButton from "@material-ui/core/IconButton";

import axios from "axios";
import "./ClimaApp.css";
import FormattedDate from "./FormattedDate";

export default function ClimaApp(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      coordinates:
        "Lat: " +
        response.data.coordinates.latitude +
        " / Lon: " +
        response.data.coordinates.longitude,
      temperature: 65,
      humidity: 65,
      date: new Date(response.data.time * 1000),
      description: "yes",
      icon: "",
      wind: 45,
      city: "Perth",
    });
    // setWeatherData({
    //   ready: true,
    //   coordinates: response.data.coord,
    //   temperature: response.data.main.temp,
    //   humidity: response.data.main.humidity,
    //   date: new Date(response.data.dt * 1000),
    //   description: response.data.weather[0].description,
    //   icon: response.data.weather[0].icon,
    //   wind: response.data.wind.speed,
    //   city: response.data.name,
    // });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search() {
    // const apiKey = "cc3d7e1ef77d4969f21a8c0c2fdcd5e4";
    // const units = "metric";
    // const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    // axios.get(apiUrl).then(handleResponse);
    const apiKey = "c8ofb37351203d2abe70t35b1d4121da";
    const units = "metric";
    const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleResponse);
  }

  return (
    <Card
      sx={{
        width: "100vh",
        height: "80vh",
        display: "inline-flex",
        mt: 6,
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
                display: "flex-start",
              }}
            >
              <img src="ClimaLogo.png" alt="appLogo" height="80vh"></img>
            </Grid>
            <Grid
              xs={11}
              sx={{
                ml: 32,
                display: "flex-start",
              }}
            >
              <TextField
                onSubmit={handleSubmit}
                id="outlined-search"
                label="Type a city name"
                type="search"
                size="small"
                onChange={handleCityChange}
                sx={{ width: "40vh" }}
              />
              <Button
                variant="contained"
                sx={{
                  textTransform: "capitalize",
                  color: "#000000",
                  bgcolor: "#4595D4",
                  fontSize: 16,
                  fontFamily: "Trebuchet MS",

                  ml: 0.8,
                  mr: 0.8,

                  width: 68,

                  "&:hover": {
                    backgroundColor: "#E8B923",
                  },
                }}
              >
                Search
              </Button>

              <Button
                variant="contained"
                sx={{
                  textTransform: "capitalize",
                  color: "#000000",
                  bgcolor: "rgb(114, 189, 114)",
                  fontSize: 16,
                  fontFamily: "Trebuchet MS",
                  width: 68,
                  "&:hover": {
                    backgroundColor: "#E8B923",
                  },
                }}
              >
                Current
              </Button>
            </Grid>

            <Grid xs={5} sx={{ textAlign: "left" }}>
              <h2>{city}</h2>
              {weatherData.ready ? (
                <ul>
                  <li>
                    <FormattedDate date={weatherData.date} />
                  </li>
                  <li>Sunny</li>
                  <li>Precipitation: 15%</li>
                  <li>Humidity: {weatherData.humidity}</li>
                  <li>Wind: {weatherData.wind}</li>
                  <li>Co-ords: {weatherData.coordinates}</li>
                </ul>
              ) : (
                search()
              )}
            </Grid>

            <Grid xs={3} sx={{ mt: 12, display: "inline-flex" }}>
              <h3>19</h3>

              <h4>
                <a href="/">°C </a>|<a href="/">°F</a>{" "}
              </h4>
            </Grid>

            <Grid
              xs={1}
              sx={{
                mt: 12,
                ml: 3,
                display: "flex-start",
              }}
            >
              <img
                src="sunnyBw.png"
                alt={weatherData.description}
                height="80vh"
              ></img>
            </Grid>
          </Grid>
        </Box>
      </CardContent>
    </Card>
  );
}
