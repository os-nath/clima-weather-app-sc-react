import React, { useState, useEffect } from "react";
import { Box, Grid, Paper, styled } from "@mui/material";
import WeatherIcon from "./WeatherIcon";
import get from "lodash/get";
import "./WeatherForecast.css";
import moment from "moment"

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: "theme.palette.text.secondary",
}));

export default function WeatherForecast(props) {
  console.log(props);
  const [loaded, setLoaded] = useState(false);
  const response = props.weatherData;
  const forecast = get(response, "daily", []);

  console.log(forecast);
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
            // date is a moment object
            var weekDay = moment
              .utc(get(daily, "time", 0) * 1000)
              .format("dddd")
              .substring(0, 3);
            // const day = date.getDay();
            // const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
            // const weekDay = date.format("dddd").substring(0, 3);
      
            // console.log("oiii", {
            //   daily,
            //   weekDay,
            //   showIcon,
            //   date,
            //   day,
            // });

            return (
              <Grid item xs key={index}>
                <Item
                  sx={{
                    bgcolor: "#f2f2f9",
                    boxShadow: "2px 7px 8px 2px rgb(0 0 0 / 20%)",
                    color: "#5a5c5e",
                    fontFamily: "Trebuchet MS",
                  }}
                >
                  
                  {weekDay}
                  
                  <WeatherIcon
                    className="WeatherForecast-icon"
                    code={showIcon}
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
        })}

        {/* 
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
        </Grid> */}
      </Grid>
    </Box>
  );
}

// criar const para path and default value?

// get(response, "daily.temperature.minimum");
