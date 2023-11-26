const {Activity}= require('../db.js');

const postNewActivity= async (nombre,dificultad,duracion,temporada,countryId)=>{
    const newActivity= await Activity.create({nombre,dificultad,duracion,temporada});

    await newActivity.setCountries(countryId);
    return newActivity;
}


module.exports={postNewActivity}