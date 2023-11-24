const { Router } = require("express");

const countriesRouter = Router();

const {getCountries,getCountryById}= require('../handlers/countriesHandler');


countriesRouter.get('/',getCountries)
countriesRouter.get('/:id',getCountryById)
/* countriesRouter.get('/?',getCountryById) */

module.exports= countriesRouter;