const {Country}= require('../db.js');

const getAllCountries=async()=> await Country.findAll()


module.exports={getAllCountries}