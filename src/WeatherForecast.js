import React from "react";
import { Box, Grid, Paper, styled } from "@mui/material";
import WeatherIcon from "./WeatherIcon";
import get from "lodash/get";
import moment from "moment";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: "theme.palette.text.secondary",
}));

export default function WeatherForecast(props) {
  const response = props.weatherData;
  const forecast = get(response, "daily", []);

  return (
    <Box
      sx={{
        flexGrow: 1,
        p: 6,
      }}
    >
      <Grid container spacing={3}>
        {forecast.map(function(daily, index) {
          if (index <= 6 && index > 0) {
            const minTemp = Math.round(
              get(daily, "temperature.minimum", "default")
            );

            const maxTemp = Math.round(
              get(daily, "temperature.maximum", "default")
            );

            const showIcon = get(daily, "condition.icon", "default");
            var weekDay = moment
              .utc(get(daily, "time", 0) * 1000)
              .format("dddd")
              .substring(0, 3);

            return (
              <Grid item xs key={index} sx={{pt: 0}}>
                <Item
                  sx={{
                    bgcolor: "#f2f2f9",
                    boxShadow: "2px 7px 8px 2px rgb(0 0 0 / 20%)",
                    color: "#5a5c5e",
                    fontFamily: "Trebuchet MS",
                    
                  }}
                >
                  {weekDay}
                  <br />
                  <br />
                  <WeatherIcon
                    className="WeatherForecast-icon"
                    code={showIcon}
                    sx={{ mt: 5 }}
                  />
                  <br />
                  <br />
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
                    {minTemp}°
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
                    {maxTemp}°
                  </Item>
                </Item>
              </Grid>
            );
          }
          return null;
        })}
      </Grid>
    </Box>
  );
}
