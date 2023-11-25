const axios = require("axios");
const server = require("./src/server");
const { conn } = require('./src/db.js');
const { saveCountriesInDb } = require("./src/controllers/controllersCountry.js");
const PORT = 3001;



conn.sync({ force: false }).then(() => {
  saveCountriesInDb(); //Para guardar todos los países en mi base de datos
server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
})
}).catch(error => console.error(error))
