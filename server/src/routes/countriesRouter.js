const { Router } = require("express");

const countriesRouter = Router();

const {getCountries,postCountry}= require('../handlers/countriesHandler')
/* const postCountry= require('../handlers/countriesHandler') */

countriesRouter.get('/',getCountries)
countriesRouter.post('/',postCountry)

module.exports= countriesRouter;