import React, { useState } from "react";
import {
  Button,
  Box,
  Grid,
  Card,
  CardContent,
  TextField,
  Paper,
  styled,
} from "@mui/material";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import "./ClimaApp.css";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import { useWeatherData } from "./hooks/useWeatherData";
import moment from "moment";


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: "theme.palette.text.secondary",
}));

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
        date: moment.utc(response.daily[0].time * 1000),
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

  function searchByLocation() {
    setSearchCity(undefined);
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
            <Grid item xs={4} sx={{ display: "flex-start" }}>
              <Item
                sx={{
                  textAlign: "left",
                  ml: 4,
                  mt: 1,
                  bgcolor: "transparent",
                  boxShadow: "none",
                }}
              >
                <img
                  src="ClimaLogo.png"
                  alt="appLogo"
                  height="70vh"
                  marginTop="10"
                ></img>
              </Item>
            </Grid>
            <Grid
              item
              xs={8}
              sx={{
                ml: 36,
                mr: 1,
                mt: -7,

                display: "flex-start",
              }}
            >
              <Item sx={{ bgcolor: "transparent", boxShadow: "none" }}>
                <TextField
                  id="outlined-search"
                  label="Type a city name"
                  type="search"
                  size="small"
                  sx={{ width: "34vh", height: 36, p: 0 }}
                  onChange={handleCityChange}
                />
                <Button
                  onClick={search}
                  sx={{
                    textTransform: "capitalize",
                    color: "#000000",
                    bgcolor: "transparent",
                    fontSize: 14,
                    fontFamily: "Trebuchet MS",
                    ml: 0.8,
                    mr: 0.8,
                    width: 30,
                    height: 36,
                    borderRadius: 100,

                    "&:hover": {
                      backgroundColor: "#e4c77e",
                    },
                  }}
                >
                  <SearchRoundedIcon sx={{ color: "#BF4BE3" }} />
                </Button>

                <Button
                  onClick={searchByLocation}
                  sx={{
                    textTransform: "capitalize",
                    color: "#000000",
                    bgcolor: "transparent",
                    fontSize: 14,
                    fontFamily: "Trebuchet MS",
                    width: 10,
                    height: 36,
                    borderRadius: 100,
                    "&:hover": {
                      backgroundColor: "#e4c77e",
                    },
                  }}
                >
                  <PlaceOutlinedIcon sx={{ color: "#BF4BE3" }} />
                </Button>
              </Item>
            </Grid>

            <WeatherInfo data={weatherData} />
            <WeatherForecast weatherData={response} />
          </Grid>
        </Box>
      </CardContent>
    </Card>
  );
}
