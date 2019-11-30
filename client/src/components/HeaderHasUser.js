import React, { useContext, useEffect } from "react";
import logo from "../img/logo4.png";
import "../styles/styles.css";
import userContext from "../context/userContext";

const HeaderHasUser = () => {
  const { loggedInUser } = useContext(userContext);

  useEffect(() => {
    if (loggedInUser) {
      console.log(loggedInUser);
    }
  });

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="d-flex flex-grow-1">
        <span className="w-100 d-lg-none d-block"></span>
        <a className="navbar-brand" href="/">
          <img src={logo} width="40" height="40" alt="Logo" />
        </a>
        <div className="w-100 text-right">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#myNavbar7"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </div>

      <div
        className="collapse navbar-collapse flex-grow-1 text-right"
        id="myNavbar7"
      >
        <ul className="navbar-nav ml-auto flex-nowrap">
          <li className="nav-item">
            <a href="/" className="nav-link">
              <span className="fas fa-heart"></span>
              {"  "}
              Hi {loggedInUser.fullName}
            </a>
          </li>
          <li className="nav-item">
            <a href="/api/logout" className="nav-link">
              <span className="fas fa-sign-out-alt"></span>
              {"  "}
              logout
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default HeaderHasUser;
