import React, { useState } from "react";


export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function changeUnits(event) {
    event.preventDefault();
    unit === "celsius" ? setUnit("Fahrenheit") : setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <>
        <h3>{Math.round(props.celsius)}</h3>
        <h5>
          °C |{" "}
          <a href="/" onClick={changeUnits} style={{ color: "#024e88" }}>
            °F
          </a>{" "}
        </h5>
      </>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;

    return (
      <>
        <h3>{Math.round(fahrenheit)}</h3>
        <h5>
          <a href="/" onClick={changeUnits} style={{ color: "#024e88" }}>
            °C{" "}
          </a>
          | °F
        </h5>
      </>
    );
  }
}
