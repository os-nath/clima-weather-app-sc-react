import * as React from "react";
import { Button, Box, Grid, Card, CardContent, TextField } from "@mui/material";
import "./ClimaApp.css";

export default function ClimaApp() {
  return (
    <Card sx={{ width: "90vh", height: "60vh", display: "inline-flex", m: 0 }}>
      <CardContent sx={{ p: 3, m: 0, display: "inline-flex" }}>
        <Box
          sx={{
            border: 1,
            borderColor: "rgba(18, 89, 122, 0.945)",
            borderRadius: 1,
          }}
        >
          <Grid container>
            <Grid xs={5} sx={{ textAlign: "left" }}>
              <h2>Itabira</h2>
              <ul>
                <li>Thursday 07:00</li>
                <li>Sunny</li>
              </ul>
            </Grid>

            <Grid
              xs={7}
              sx={{ display: "flex", alingItems: "flex-end", mt: 12 }}
            >
              <img src="sunnyBw.png" alt="sunnycloud" height="80vh"></img>
            </Grid>

            <Grid
              xs={3}
              sx={{
                width: "50%",
                textAlign: "left",
                ml: 4,
                display: "inline-flex",
              }}
            >
              <h3>19</h3>

              <h4>
                <a href="/">°C </a>|<a href="/">°F</a>{" "}
              </h4>
            </Grid>

            <Grid xs={4} sx={{ width: "50%", textAlign: "left" }}>
              <ul>
                <li>Precipitation: 15%</li>
                <li>Humidity: 15%</li>
                <li>Wind: 15%</li>
              </ul>
            </Grid>

            <Grid xs={12} sx={{ mb: 3, mt: 4, ml: 4, textAlign: "left" }}>
              <TextField
                id="outlined-search"
                label="Type a city name"
                type="search"
                size="small"
              />

              {/* <form>
                <input type="search" placeholder="Enter a city name" /> */}

              <Button
                variant="contained"
                sx={{
                  textTransform: "capitalize",
                  color: "#000000",
                  bgcolor: "rgb(90, 137, 224)",
                  fontSize: 16,
                  fontFamily: "Trebuchet MS",
                  ml: 0.8,
                  mr: 0.8,
                  "&:hover": {
                    backgroundColor: "rgb(191, 75, 227);",
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
                  "&:hover": {
                    backgroundColor: "rgb(191, 75, 227);",
                  },
                }}
              >
                Current
              </Button>
              {/* </form> */}
            </Grid>

            {/* <Grid xs={12} sx={{ mt: 1, mb: 1 }}>
              <Button sx={{ color: "greenyellow" }} variant="contained">
                Hello World
              </Button>
            </Grid> */}
          </Grid>
        </Box>
      </CardContent>
    </Card>
  );
}
