import * as React from "react";
import { Button, Box, Grid, Card, CardContent } from "@mui/material";
import "./ClimaApp.css";

export default function ClimaApp() {
  return (
    <Card sx={{ width: "100vh", display: "inline-flex" }}>
      <CardContent>
        <Box sx={{ border: 1, borderColor: "#FAFBFD1" }}>
          <Grid container>
            <Grid xs={12} sx={{ width: "80%", textAlign: "left" }}>
              <h2>Itabira</h2>
              <ul>
                <li>Thursday 07:00</li>
                <li>Sunny</li>
              </ul>
            </Grid>

            <Grid xs={2} sx={{ width: "50%", textAlign: "left", ml: 4 }}>
              <img src="sunnyBw.png" alt="sunnycloud" height="100vh"></img>
              19°C
            </Grid>

            <Grid xs={2} sx={{ width: "50%" }}>
              <ul>
                <li>Precipitation: 15%</li>
                <li>Humidity: 15%</li>
                <li>Wind: 15%</li>
              </ul>
            </Grid>
            <Grid xs={12} sx={{ textAlign: "center" }}>
              <form>
                <input type="search" placeholder="Enter a city name" />
                <input type="submit" value="Search" />
              </form>
            </Grid>

            <Grid xs={12} sx={{ mt: 10, mb: 10 }}>
              <Button sx={{ color: "greenyellow" }} variant="contained">
                Hello World
              </Button>
            </Grid>
          </Grid>
        </Box>
      </CardContent>
    </Card>
  );
}
