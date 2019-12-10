const geoLocation = require("../services/geolocation");
const forecast = require("../services/forecast");
const requireLogin = require("../middlewares/requireLogin");
const requireCredits = require("../middlewares/requireCredits");
const { sendForecastMail } = require("../services/mail/mailer");

module.exports = app => {
  app.get("/api/weather", requireLogin, requireCredits, async (req, res) => {
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

  app.get("/api/sendForecastEmail", (req, res) => {
    const { fullName, emails } = req.user;
    const email = emails[0];
    const { location, forecast } = req.query;
    const resultMail = sendForecastMail(
      fullName,
      email,
      JSON.parse(location),
      JSON.parse(forecast)
    );
    res.json(resultMail);
  });
};
