const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Activity', {
    id:{
      type:DataTypes.STRING,
      allowNull: false,
      primaryKey:true,
      /* autoincrement:true */
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dificultad:{
      type:DataTypes.INTEGER,
      allowNull:false,
      validate: {
        max: 5,
        min: 1,
      }
    },
    duracion:{
      type:DataTypes.INTEGER,
      allowNull:false
    },
    temporada:{
      type:DataTypes.ENUM('Verano','Otoño','Invierno','Primavera'),
      allowNull:false
    },
  });
};