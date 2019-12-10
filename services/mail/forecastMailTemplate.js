const keys = require("../../config/keys");

module.exports = (
  fullName,
  { location },
  { summary, temperatureMax, temperatureMin, humidity, precipProbability }
) => {
  const template = `
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>Document</title>
            <style>
                .main-wrapper {
                    border: 3px solid;
                    border-radius: 15px;
                    padding: 3%;
                    margin: auto;
                    width: 50%;
                    background-color: #007bff;
                    color: white;
                    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
                    direction: ltr;
                }
            
                button {
                    margin-top: 5%;
                    color: #007bff;
                    border-radius: 5px;
                    background-color: white;
                    color: 007bff;
                    border: none;
                    padding: 2% 3%;
                    font-size: 16px;
                    font-weight: bold;
                }

                button:hover {
                    transition: 1s ease-out;
                    background-color: rgb(216, 210, 210);
                    text-decoration: underline;
                }
            
                table {
                    border-spacing: 0;
                    border: 2px solid #007bff;
                    border-radius: 5%;
                    border-collapse: collapse;
                    position: relative;
                    clear: both;
                    margin: auto;
                    padding: 3px;
                    color: #008CBA;
                    background-color: white;
                    width: 90%;
                    padding: 2%;
                    direction: ltr;
                }
            
                th {
                    text-align: left;
                }
            
                .tr-with-border-btm {
                    border-bottom: 2px solid #007bff;
                    border-radius: 5%;
                }
            
                th {
                    padding: 2%;
                    border-radius: 5%;
                }
            </style>
        </head>
        <body>
            <div style="text-align: center">
                <div class="main-wrapper">
                    <h3>Hello ${fullName}</h3>
                    <hr></hr>
                    <h5>Weather for today at ${location}</h5>
                    <hr></hr>
                    <p>${summary}</p>
                    <table>
                        <tbody>
                            <tr class="tr-with-border-btm">
                                <th>max temp: </th>
                                <td>${parseInt(temperatureMax)} °C</td>
                            </tr>
                            <tr class="tr-with-border-btm">
                                <th>min temp: </th>
                                <td>${parseInt(temperatureMin)} °C</td>
                            </tr>
                            <tr class="tr-with-border-btm">
                                <th>humidity:</th>
                                <td>${Math.round(humidity * 100)} %</td>
                            </tr>
                            <tr>
                                <th>rain probability:</th>
                                <td>${parseInt(precipProbability) * 100}%</td>
                            </tr>
                        </tbody>
                    </table>
                    <a href="${keys.redirectDomain}"><button>go to weather app</button></a>
                </div>
            </div>
        </body>
    </html>`;
  return template;
};
