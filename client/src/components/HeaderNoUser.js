import React from "react";
import logo from "../img/logo4.png";

const HeaderNoUser = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="d-flex flex-grow-1">
        <span className="w-100 d-lg-none d-block"></span>
        <a className="navbar-brand" href="/">
          <img src={logo} width="40" height="40" alt="Logo" />
        </a>
      </div>
    </nav>
  );
};

export default HeaderNoUser;
