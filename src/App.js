import "./App.css";
import ClimaApp from "./ClimaApp.js";

function App() {
  return (
    <div className="App">

      <ClimaApp />

      
      <h1>Clima Tempo</h1>
      <footer>
        Open source code on{" "}
        <a
          href="https://github.com/os-nath/clima-weather-app-sc-react"
          target="_blank"
          rel="noreferrer"
        >
          GitHub{" "}
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
        > Netlify
        </a>
      </footer>
    </div>
  );
}

export default App;
