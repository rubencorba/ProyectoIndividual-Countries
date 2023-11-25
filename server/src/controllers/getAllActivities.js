const {Activity}= require('../db.js');

const getAllActivities=async()=> await Activity.findAll()


module.exports={getAllActivities}