import React, { useEffect, useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import axios from "axios";
import "../styles/styles.css";
import WeatherDashboard from "./WeatherDashboard";
import Header from "./Header";
import LandingPage from "./LandingPage";

import userContext from "../context/userContext";

const WeatherApp = () => {
  const [loggedInUser, setLoggedInUser] = useState("");

  const fetchUser = async () => {
    console.log("fetching user");
    const fetchedUser = await axios.get("/api/current_user")
    console.log("fetched user: ", fetchedUser)
    setLoggedInUser(fetchedUser.data)
  };

  useEffect(() => {
    fetchUser();
  }, []);


  return (
    <div className="App">
      <userContext.Provider value={{loggedInUser}}>
        <Header />
        <BrowserRouter>
          <Route path={"/"} component={loggedInUser ? WeatherDashboard : LandingPage} exact />
        </BrowserRouter>
      </userContext.Provider>
    </div>
  );
};

export default WeatherApp;
