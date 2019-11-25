import React from "react";
import ReactDOM from "react-dom";
import "./styles/styles.css";
import WeatherApp from "./components/WeatherApp";
import * as serviceWorker from "./serviceWorker";

// import { UserContextProvider } from "../src/context";

//Development only axios helpers(next 2 lines)
import axios from "axios";
window.axios = axios;

ReactDOM.render(<WeatherApp />, document.getElementById("root"));

serviceWorker.unregister();

// <UserContextProvider>
// <WeatherApp />
// </UserContextProvider>,
