const axios = require("axios");
const keys = require("../config/keys");

const getLocation = async adress => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${adress}.json?access_token=${keys.mapBoxToken}`;
  try {
    const { data } = await axios.get(url);
    if(data.features.length === 0) {
      return {error: `Couldn't find any place named: "${adress}", please try again!`}
    }
    const geoData = {
      latitude: data.features[0].center[1],
      longitude: data.features[0].center[0],
      location: data.features[0].place_name
    };
    return geoData;
  } catch (error) {
    console.log(error)
    return { error: "There is a problem in our service, try again soon!" };
  }
};

module.exports = { getLocation };
