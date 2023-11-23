const createCountry=require('../controllers/createCountry')

const getCountries=(req,res)=>{
    const {allCountries}=req.body;

    res.status(200).send('pruebita3');
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

module.exports={
    getCountries,
    postCountry,
};