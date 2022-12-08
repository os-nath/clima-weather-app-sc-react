import React, { useState, useEffect } from "react";
import axios from "axios";
import memoize from "lodash.memoize";

const API_endpoint = `https://api.shecodes.io/weather/v1/forecast`;
const apiKey = "c8ofb37351203d2abe70t35b1d4121da";
const units = "metric";

const getCurrentPosition = () =>
  new Promise((resolve, reject) =>
    navigator.geolocation.getCurrentPosition(resolve, reject)
  );

const getWeatherDataFromGeolocation = memoize(() =>
  getCurrentPosition().then((position) => {
    let url = `${API_endpoint}?lon=${position.coords.longitude}&lat=${position.coords.latitude}&key=${apiKey}`;
    return axios.get(url).then((response) => response.data);
  })
);

export function useWeatherData(cityName) {
  const [responseData, setResponseData] = useState(undefined);

  useEffect(() => {
    if (cityName) {
      let url = `${API_endpoint}?query=${cityName}&key=${apiKey}&units=${units}`;
      axios.get(url).then((response) => {
        setResponseData(response.data);
      });
    } else {
      getWeatherDataFromGeolocation().then(setResponseData);
    }
  }, [cityName]);

  return responseData;
}
