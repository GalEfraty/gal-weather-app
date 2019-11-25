import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "../styles/styles.css";
import WeatherDashboard from "./WeatherDashboard";
import Header from "./Header";

const WeatherApp = () => {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Route path={"/"} component={WeatherDashboard} exact />
      </BrowserRouter>
    </div>
  );
};

export default WeatherApp;
