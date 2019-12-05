import React, { useContext } from "react";
import "../styles/styles.css";
import userContext from "../context/userContext";
import Payments from "./Payments";
import { Link } from "react-router-dom";


const Profile = () => {
  const { loggedInUser } = useContext(userContext);

  return (
    <div className="container main-wrapper border border-primary rounded shadow p-3">
      <h5 className="text-justify">Hello {loggedInUser.fullName} <i className="far fa-smile"></i></h5>
      <Link to="/">
        <button className="btn btn-outline-primary">Go get the Weather!</button>
      </Link>
      <fieldset className="border p-2 main-wrapper">
        <legend className="w-auto text-justify">Credits</legend>
        <p>you have {loggedInUser.credits} credits</p>
        <Payments />
      </fieldset>
      
    </div>
  );
};

export default Profile;
