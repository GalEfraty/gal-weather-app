import React, { useContext } from "react";
import "../styles/styles.css";
import userContext from "../context/userContext";
import Payments from "./Payments";
import { Link } from "react-router-dom";

const Profile = () => {
  const { loggedInUser } = useContext(userContext);

  return (
    <div className="container main-wrapper border border-primary rounded shadow p-3">
      <h5 className="text-justify">
        Hello {loggedInUser.fullName} <i className="far fa-smile"></i>
      </h5>
      <Link to="/">
        <button className="btn btn-outline-primary">
          Go check the Weather!
        </button>
      </Link>
      <fieldset className="border p-2 main-wrapper">
        <legend className="w-auto text-justify">Credits</legend>
        <p>you have {loggedInUser.credits} credits</p>
        <Payments />
      </fieldset>
      <div
        className="alert alert-warning alert-dismissible fade show"
        role="alert"
      >
        <strong>Attention!</strong> This is a demo version, use this credit card
        number: 4242424242424242
        <button
          type="button"
          className="close"
          data-dismiss="alert"
          aria-label="Close"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    </div>
  );
};

export default Profile;
