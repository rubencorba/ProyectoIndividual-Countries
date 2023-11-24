const {Country}= require('../db.js');

const countryById=async(id)=> await Country.findOne({where:{id:id}})


module.exports={countryById}