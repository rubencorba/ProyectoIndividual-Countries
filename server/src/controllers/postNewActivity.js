const {Activity}= require('../db.js');

const postNewActivity= async (nombre,dificultad,duracion,temporada)=>{
    const newActivity= await Activity.create({nombre,dificultad,duracion,temporada});
    return newActivity;
}


module.exports={postNewActivity}