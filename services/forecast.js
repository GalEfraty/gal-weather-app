const axios = require("axios");
const keys = require("../config/keys");

const getForecast = async ({ latitude, longitude }) => {
  const darkSkyUrl = `https://api.darksky.net/forecast/${keys.darkSkyToken}/${latitude},${longitude}?units=si`;

  try {
    const forecast = await axios.get(darkSkyUrl);
    return forecast.data;
  } catch (error) {
    console.log(error)
    return { error: "Couldn't find weather, try again!" };
  }
};

module.exports = { getForecast };
