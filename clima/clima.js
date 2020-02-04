const axios = require('axios');

const getClima = async (lat, lon) => {
  const resp = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=13127cc5072d0d1739461dd3574189d2&units=metric`
  );
 return resp.data.main.temp
};

module.exports = { getClima };
