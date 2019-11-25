import React from "react";
import "../styles/styles.css";

const ErrorMessage = ({ message }) => {
  console.log(message);
  return (
    <div className="alert alert-info error-message" role="alert">
      <i className="fas fa-exclamation"></i>
      <br></br>
      {message}
    </div>
  );
};

export default ErrorMessage;
