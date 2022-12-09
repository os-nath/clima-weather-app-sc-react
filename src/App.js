import "./App.css";
import React from "react";
import "./ClimaApp.css";
import ClimaApp from "./ClimaApp.js";
import { useWeatherData } from "./hooks/useWeatherData";
import { Box, CircularProgress } from "@mui/material";

function App() {
  const responseData = useWeatherData();
  console.log("First time retrieve of API data", responseData);
  if (responseData) {
    return (
      <div className="App">
        <ClimaApp defaultData={responseData} />

        <br />
        <br />
        <br />

        <footer>
          Open-sourced on{" "}
          <a
            href="https://github.com/os-nath/clima-weather-app-sc-react"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub{" "}
          </a>{" "}
          by
          <a
            href="https://www.linkedin.com/in/nathasha-soares-1327275a/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            Nath Soares
          </a>{" "}
          and hosted on
          <a
            href="https://master--wondrous-pothos-41872e.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            Netlify
          </a>
        </footer>
      </div>
    );
  } else {
    return (
      <Box
        sx={{
          mt: 50,
          display: "flex",
          justifyContent: "center",
          color: "#024e88",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }
}
export default App;
