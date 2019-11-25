import React from "react";
import moment from "moment";
import "../styles/styles.css";

const Forecast = ({
  weather: {
    summary,
    temperatureMax,
    temperatureMin,
    humidity,
    precipProbability,
    time
  },
  place: { location },
  today,
  onClose
}) => {
  return (
    <div className="card forecast-card">
      <h5 className="card-header">
        {today ? "today" : moment(time * 1000).format("dddd")} <br></br>{" "}
        {location && location}
      </h5>
      <div className="card-body">
        <h5 className="card-title">{summary}</h5>
        <div >
          <table className="table">
            <tbody>
              <tr>
                <th scope="row">
                  <i className="fas fa-temperature-high"></i>
                  max temp:
                </th>
                <td>{parseInt(temperatureMax)} °C</td>
              </tr>
              <tr>
                <th scope="row">
                  <i className="fas fa-temperature-low"></i>
                  min temp:
                </th>
                <td>{parseInt(temperatureMin)} °C</td>
              </tr>
              <tr>
                <th scope="row">
                  <i className="fas fa-tint"></i>
                  humidity:
                </th>
                <td>{Math.round(humidity * 100)} %</td>
              </tr>
              <tr>
                <th scope="row">
                  <i className="fas fa-cloud-showers-heavy"></i>
                  rain probability:
                </th>
                <td>{parseInt(precipProbability) * 100}%</td>
              </tr>
            </tbody>
          </table>
        </div>
        <button onClick={onClose} className="btn btn-primary">
          close
        </button>
      </div>
    </div>
  );
};

export default Forecast;
