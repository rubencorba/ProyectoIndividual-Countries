const {Country}= require('../db.js');

const createCountry= async (nombre)=>{
    return await Country.create({nombre})
}

module.exports=createCountry;