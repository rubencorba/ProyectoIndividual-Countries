const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Country', {
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3]
      }
    },
    /* id:{
      type:DataTypes.STRING,
      allowNull: false,
      primaryKey:true,
      autoincrement:true
    },
    imagenBandera:{
      type:DataTypes.STRING,
      allowNull:false
    },
    continente:{
      type:DataTypes.STRING,
      allowNull:false
    },
    capital:{
      type:DataTypes.STRING,
      allowNull:false
    },
    subRegion:{
      type:DataTypes.STRING,
      allowNull:true
    },
    area:{
      type:DataTypes.STRING,
      allowNull:true
    },
    poblacion:{
      type:DataTypes.STRING,
      allowNull:false
    }, */
  });
};