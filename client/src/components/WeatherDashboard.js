import React, { useState } from "react";
import axios from "axios";
import Forecast from "./Forecast";
import ForecastSpinner from "./ForecastSpinner";
import ErrorMessage from "./ErrorMessage";

const WeatherDashboard = () => {
  const [todayWeatherState, setTodayWeather] = useState("");
  const [locationState, setLocation] = useState("");
  const [searchStatusState, setSearchStatus] = useState(false);
  const [errorMessageState, setErrorMessage] = useState("");

  const onDataClose = () => {
    setTodayWeather("");
  };

  const handleOnSubmit = async e => {
    e.preventDefault();

    setSearchStatus(true);
    setErrorMessage("");

    if (!e.target.elements.city.value) {
      setSearchStatus(false);
      return setErrorMessage(
        "You must choose a city or place before searching!"
      );
    }

    const city = e.target.elements.city.value;
    const weatherResponse = await axios.get("/api/weather", {
      params: {
        adress: city
      }
    });

    if (weatherResponse.data.error) {
      setSearchStatus(false);
      return setErrorMessage(weatherResponse.data.error);
    }

    const { forecastData, geoData } = weatherResponse.data;
    setTodayWeather(forecastData.daily.data[0]);
    setLocation(geoData);
    setSearchStatus(false);
  };

  return (
    <div className="container border border-primary search-wrapper rounded shadow p-3 search-form-wrapper ">
      <form onSubmit={handleOnSubmit}>
        <div className="form-group">
          <label>Search City:</label>
          <input
            name="city"
            type="text"
            className="form-control"
            placeholder="city"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Search!
        </button>
      </form>
      {searchStatusState && <ForecastSpinner />}
      {todayWeatherState && (
        <Forecast
          weather={todayWeatherState}
          place={locationState}
          today={false}
          onClose={onDataClose}
        />
      )}
      {errorMessageState && <ErrorMessage message={errorMessageState} />}
    </div>
  );
};

export default WeatherDashboard;
