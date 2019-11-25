import React from "react";

const ForecastSpinner = () => {
  return (
    <div className="forecast-spinner">
      <div className="forecast-spinner md-4">
        <div className="spinner-border text-primary" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    </div>
  );
};

export default ForecastSpinner;
