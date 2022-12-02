import React from "react";
import { Box, Grid } from "@mui/material";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  var data = props.data;
  var search = props.searchfunction;

  if (!data.ready) {
    search();
    return <Box>Please enter your city</Box>;
  } else {
    return (
      <>
        <Grid xs={5} sx={{ textAlign: "left" }}>
          <>
            <h2>{data.city}</h2>
            <h4>{data.country}</h4>

            <ul>
              <li>
                <FormattedDate date={data.date} />
              </li>
              <li>{data.description}</li>
              <li>Humidity: {data.humidity}%</li>
              <li>Wind: {data.wind} km/h</li>
              <li>{data.coordinates}</li>
            </ul>
          </>
        </Grid>

        <Grid xs={3} sx={{ mt: 12, display: "inline-flex" }}>


          <WeatherTemperature celsius={props.data.temperature} />

          {/* <h3>{Math.round(data.temperature)}</h3>

            <h5>
              <a href="/">°C </a>|<a href="/">°F</a>{" "}
            </h5> */}
        </Grid>

        <Grid
          xs={1}
          sx={{
            mt: 10,
            ml: 3,
            display: "flex-start",
          }}
        >
          <WeatherIcon
            code={props.data.icon}
            alt={props.data.iconDescription}
            sx={{ height: "150vh" }}
          />

          {/* <img src={data.icon_url ></img> */}
        </Grid>
      </>
    );
  }
}
