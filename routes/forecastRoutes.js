const geoLocation = require("../services/geolocation");
const forecast = require("../services/forecast");

module.exports = app => {
  app.get("/api/weather", async (req, res) => {
    const { adress } = req.query;
    const geoData = await geoLocation.getLocation(adress);
    if (geoData.error) {
      return res.json({ error: geoData.error });
    }
    const forecastData = await forecast.getForecast(geoData);
    if (forecastData.error) {
      return res.json({ error: forecastData.error });
    }
    //console.log(forecastData, geoData)
    res.json({ forecastData, geoData });
  });
};
