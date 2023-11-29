import axios from 'axios';

export const GET_ALL_COUNTRIES="GET_ALL_COUNTRIES"
export const GET_COUNTRY_BY_NAME="GET_COUNTRY_BY_NAME"

export const getAllCountries=()=>{
    try {
        const endpoint='http://localhost:3001/countries';
        return async (dispatch)=>{
            const {data}= await axios.get(endpoint);
            return dispatch({
                type:GET_ALL_COUNTRIES,
                payload:data
            })
        }
    } catch (error) {
        console.log(error);
    }
    
}

export const getCountriesByName=(nombre)=>{
    try {
        return async (dispatch)=>{
            const {data}= await axios.get(`http://localhost:3001/countries/?nombre=${nombre}`);
            return dispatch({
                type:GET_COUNTRY_BY_NAME,
                payload:data
            })
        }
    } catch (error) {
        console.log(error);
    }
    
}