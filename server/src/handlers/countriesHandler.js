const {CountryById}=require('../controllers/countryById.js')
const {getAllCountries}=require('../controllers/getAllCountries.js')

const getCountries=async (req,res)=>{

    try {
        const response=await getAllCountries();
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({error:error.message});
    }
}


const getCountryById=async (req,res)=>{
    const {id}=req.params;

    try {
        const response=await CountryById(id);
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({error:error.message});
    }
}

/* const getDetailCountry= async (req,res)=>{
    const {id}=req.params;

    try {
        const response= await getCountryById(id);
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({error:error.message});
    }
}
 */
module.exports={
    getCountries,
    getCountryById
};