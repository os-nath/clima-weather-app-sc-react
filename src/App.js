import "./App.css";
import "./ClimaApp.css";
import ClimaApp from "./ClimaApp.js";
import { Grid } from "@mui/material";

// import CssBaseline from "@mui/material/CssBaseline";

function App() {
  return (
    <div className="App">
      <Grid xs={1} sx={{ width: "30%", mt: 10 }}>
        <img src="ClimaLogo.png" alt="appLogo" height="80vh"></img>
      </Grid>

      <ClimaApp defaultCity="Perth" />

      {/* <CssBaseline enableColorScheme /> Not sure if I'll use it or when to start using it*/}

      <br />
      <br />
      <br />
      <footer>
        Open-sourced{" "}
        <a
          href="https://github.com/os-nath/clima-weather-app-sc-react"
          target="_blank"
          rel="noreferrer"
        >
          code{" "}
        </a>{" "}
        by
        <a
          href="https://www.linkedin.com/in/nathasha-soares-1327275a/"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          Nath Soares
        </a>{" "}
        hosted on
        <a
          href="https://637f1f9f48c65532b6f796d4--wondrous-pothos-41872e.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          Netlify
        </a>
      </footer>
    </div>
  );
}

export default App;
