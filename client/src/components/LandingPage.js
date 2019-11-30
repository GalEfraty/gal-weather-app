import React from "react";
import "../styles/styles.css";

const LandingPage = () => {
  return (
    <div className="container md-6 xs-2">
      <div className="landing-container border border-primary search-wrapper rounded shadow p-3" style={{overflow: "hidden"}}>
        <h3>Weather App</h3>
        <hr></hr>
        <h5> <i className="fas fa-sign-in-alt"></i> Please sign in to continue</h5>
        <hr></hr>

        
        <button
        
        className="btn btn-danger"
          onClick={(e) => {
            e.preventDefault()
            window.location.href="/auth/google"
          }}
        >
          Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
