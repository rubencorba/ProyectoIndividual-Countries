const {createCountry,getCountryById,getAllCountries}=require('../controllers/controllersCountry.js')

const getCountries=async (req,res)=>{
    /* const {allCountries}=req.body; */
    try {
        const response=await getAllCountries();
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({error:error.message});
    }

    /* res.status(200).send('pruebita3'); */
}
const postCountry= async (req,res)=>{
    const {nombre}=req.body;
    try {
        const response= await createCountry(nombre);
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({error:error.message});
    }
}

const getDetailCountry= async (req,res)=>{
    const {id}=req.params;

    /* const source= isNaN(id)? "bdd": "api"; */

    try {
        const response= await getCountryById(id);
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({error:error.message});
    }
}

module.exports={
    getCountries,
    postCountry,
    getDetailCountry
};