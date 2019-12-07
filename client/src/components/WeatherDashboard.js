import React, { useState, useContext } from "react";
import axios from "axios";
import Forecast from "./Forecast";
import ForecastSpinner from "./ForecastSpinner";
import ErrorMessage from "./ErrorMessage";
import userContext from "../context/userContext";

const WeatherDashboard = () => {
  const [todayWeatherState, setTodayWeather] = useState("");
  const [locationState, setLocation] = useState("");
  const [searchStatusState, setSearchStatus] = useState(false);
  const [errorMessageState, setErrorMessage] = useState("");

  const { loggedInUser } = useContext(userContext);

  const onDataClose = () => {
    setTodayWeather("");
  };

  const onCloseAndSendEmail = () => {
    onDataClose()
    const email = loggedInUser.emails[0]
    console.log("sending email to ", email)
  }

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
    //console.log( "the weather response", weatherResponse)

    if (weatherResponse.data.error) {
      setSearchStatus(false);
      return setErrorMessage(weatherResponse.data.error);
    }

    const { forecastData, geoData } = weatherResponse.data;
    setTodayWeather(forecastData.daily.data[0]);
    setLocation(geoData);
    setSearchStatus(false);

    loggedInUser.credits -= 1;
    try {
      await axios.put("/api/decrementcredits");
    } catch (error) {
      setErrorMessage("something wrong with the website, try again soon");
    }
  };

  return (
    <div className="container border border-primary search-wrapper rounded shadow p-3  main-wrapper  overflow-auto position-relative">
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
          onCloseAndSendEmail={onCloseAndSendEmail}
        />
      )}
      {errorMessageState && <ErrorMessage message={errorMessageState} />}
    </div>
  );
};

export default WeatherDashboard;
