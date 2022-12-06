import "./App.css";
import React from "react";
import "./ClimaApp.css";
import ClimaApp from "./ClimaApp.js";



// import CssBaseline from "@mui/material/CssBaseline";

function App() {
// add Geolocation function to get Lat and Long and pass the props to ClimaApp instead of defaultCity
  return (
    <div className="App">
      <ClimaApp defaultCity="Perth" />

      {/* <CssBaseline enableColorScheme /> Not sure if I'll use it or when to start using it*/}

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
          href="https://637f1f9f48c65532b6f796d4--wondrous-pothos-41872e.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          Netlify
        </a>
      </footer>
    </div>
  );
}

export default App;
