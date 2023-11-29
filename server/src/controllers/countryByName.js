const {Country}= require('../db.js');
const {Op}= require("sequelize");

const countryByName=async(nombre)=> {
    const lowerName=nombre.toLowerCase();
    let countriesFound=await Country.findAll({where:{nombre:{[Op.iLike]: `%${lowerName}%`}}})
    if (countriesFound.length===0){countriesFound="No existen países con esa coincidencia"}
    return countriesFound
}


module.exports={countryByName}