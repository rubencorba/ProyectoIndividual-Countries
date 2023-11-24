const {Country}= require('../db.js');

const countryByName=async(nombre)=> await Country.findOne({where:{nombre}})//Como es un objeto literal puedo colocar simplemente nombre


module.exports={countryByName}