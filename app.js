const argv = require('yargs').options({
  direccion: {
    alias: 'd',
    desc: 'Direccion de la ciduad para obtener el clima',
    demand: true
  }
}).argv;
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');
const getInfo = async direccion => {
  const encodeUlr = encodeURI(direccion);
  try {
    const coords = await lugar.getLugarLatLng(encodeUlr);
    const temp = await await clima.getClima(coords.lat, coords.lon);
    return `El clima de ${coords.name} es de ${temp}°C`;
  } catch (error) {
    return `No de pudo determinar el clima de ${direccion}`;
  }
};

getInfo(argv.direccion).then(resp=>console.log(resp)).catch(err=>console.log(err));
