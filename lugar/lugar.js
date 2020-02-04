const axios = require('axios');

const getLugarLatLng = async direccion => {
  const instance = axios.create({
    baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${direccion}`,
    headers: {
      'x-rapidapi-key': '18e7fd3163mshc85b5b4325427ddp1d34f7jsnd9a5d00a06de'
    }
  });
  const resp = await instance.get();

  if (resp.data.Results.length === 0) {
    throw new Error(`No existen resultados para ${direccion}`);
  }
  const data = resp.data.Results[0];
  const { name, lat, lon } = data;
  return { name, lat, lon };
};

module.exports = { getLugarLatLng };
