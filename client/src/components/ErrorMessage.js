import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "../styles/styles.css";

const ErrorMessage = ({ message }) => {
  //console.log(message);
  return (
    <Fragment>
      <div className="alert alert-info error-message" role="alert">
        <i className="fas fa-exclamation"></i>
        <br></br>
        {message}
      </div>
      <Link to="/profile">
        <button type="submit" className="btn btn-outline-primary">
          Go to profile and add credit
        </button>
      </Link>
    </Fragment>
  );
};

export default ErrorMessage;
