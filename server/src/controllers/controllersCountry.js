const {Country}= require('../db.js');
let axios= require('axios');

const getAllCountries=async()=>{
    try {
        const {data}=await axios.get(`http://localhost:5000/countries/`);
        const countriesFiltered=[];
        for (let i = 0; i < data.length; i++) {
            await countriesFiltered.push({
                nombre:data[i].name.official,
                id:data[i].cca3,
                imagenBandera:data[i].flags.png,
                continente:data[i].continents,
                capital:data[i].capital,
                subRegion:data[i].subregion,
                area:data[i].area,
                poblacion:data[i].population
            })
        }
        /* const newCountries= */await Country.bulkCreate(countriesFiltered);
        /* return newCountries; */
        return countriesFiltered;
    } catch (error) {
        return ("No se pudieron cargar")
    }
}






const createCountry= async (nombre)=>{
    return await Country.findOrCreate({where:{nombre}})
}

const getCountryById= async (id)=>{
    /* return await Country.findByPk(id); */
    try {
        const {data}=/* await axios.get(`http://localhost:5000/countries/${id}`) */
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json({error:error.message});
    }
}

module.exports={createCountry,getCountryById,getAllCountries};