const sgMail = require("@sendgrid/mail");
const keys = require("../../config/keys");
const forecastMailTemplate = require("./forecastMailTemplate");

sgMail.setApiKey(keys.sendGridKey);

const sendForecastMail = (fullName, email, location, forecast) => {
  const msg = {
    to: email,
    from: "no-replay@weather.com",
    subject: "forecast",
    html: forecastMailTemplate(fullName, location, forecast)
  };

  try {
    sgMail.send(msg);
    return msg;
  } catch (error) {
    console.log("error sending mail", error);
    return error;
  }
};

module.exports = { sendForecastMail };
