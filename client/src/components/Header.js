import React from "react";
import logo from "../img/logo4.png";
import "../styles/styles.css";

const Header = () => {
  return (
    <nav className="navbar navbar-dark bg-primary">
      <ul className="navbar-nav">
        <a className="navbar-brand" href="/">
          <img src={logo} width="40" height="40" alt="Logo" />
        </a>
      </ul>

      <ul className="navbar-nav">
        <li className="nav-item active">
          <a className="nav-link" href="/">
            Hello!
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
