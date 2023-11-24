const {Country}= require('../db.js');

const CountryById=async(id)=> await Country.findAll({where:{id:id}})


module.exports={CountryById}