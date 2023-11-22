const { Router } = require("express");

const countriesRouter = Router();

countriesRouter.get('/',(req,res)=>{
    res.status(200).send('pruebita');
})

module.exports= countriesRouter;