import React from "react";
import { Box,Grid,CircularProgress } from "@mui/material";

import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
    var data = props.data;
    var search = props.searchfunction;
    console.log(data.ready);
    if (!data.ready) {
        search();
        return (
            <Box>
                Please enter your city
            </Box>
        )
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
            <h3>{Math.round(data.temperature)}</h3>

            <h5>
              <a href="/">°C </a>|<a href="/">°F</a>{" "}
            </h5>
          </Grid>

          <Grid
            xs={1}
            sx={{
              mt: 10,
              ml: 3,
              display: "flex-start",
            }}
          >
            <img
              src={data.icon}
              alt={data.iconDescription}
              height="150vh"
            ></img>
          </Grid>
        </>
      );
    }
}