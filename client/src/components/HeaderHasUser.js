import React from "react";
import logo from "../img/logo4.png";
import "../styles/styles.css";
import { Link } from "react-router-dom";

const HeaderHasUser = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="d-flex flex-grow-1">
        <span className="w-100 d-lg-none d-block"></span>
        <Link className="navbar-brand" to="/">
          {" "}
          <img src={logo} width="40" height="40" alt="Logo" />
        </Link>
        <div className="w-100 text-right">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#weatherNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </div>

      <div
        className="collapse navbar-collapse flex-grow-1 text-right"
        id="weatherNav"
      >
        <ul className="navbar-nav ml-auto flex-nowrap">
          <li className="nav-item">
            <Link className="nav-link" to="/profile">
              <span className="fas fa-heart"></span>
              {"  "}
              Profile
            </Link>
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
