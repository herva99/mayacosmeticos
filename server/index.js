const app = require ("./src/app");
require('dotenv').config();
const {sequelize} = require("./src/DB/db")

app.listen(process.env.PORT, () => {
  sequelize.sync( {alter: true})
  console.log(`Servidor levantado en el puerto: ${process.env.PORT}`);
});

