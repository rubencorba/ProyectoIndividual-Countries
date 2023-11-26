const {Country}= require('../db.js');
const {Op}= require("sequelize");

const countryByName=async(nombre)=> {
    const lowerName=nombre.toLowerCase();
    return await Country.findOne({where:{nombre:{[Op.iLike]: `%${lowerName}%`}}})
}


module.exports={countryByName}