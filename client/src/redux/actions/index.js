import axios from 'axios';

export const GET_ALL_COUNTRIES="GET_ALL_COUNTRIES"
export const GET_COUNTRY_BY_NAME="GET_COUNTRY_BY_NAME"
export const GET_DETAIL_COUNTRY="GET_DETAIL_COUNTRY"
export const POST_NEW_ACTIVITY="POST_NEW_ACTIVITY"

import { useSelector } from 'react-redux';


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

export const getDetailCountry=(id)=>{
    try {
        return async (dispatch)=>{
            const {data}= await axios.get(`http://localhost:3001/countries/${id}`);
            return dispatch({
                type:GET_DETAIL_COUNTRY,
                payload:data
            })
        }
    } catch (error) {
        console.log(error);
    }
    
}

export const postNewActivity=(input)=>{
    input.dificultad = Number(input.dificultad);
    input.duracion = Number(input.duracion);

    /* const allCountries= useSelector((state)=>state.allCountries); */
    /* const {payload}=getAllCountries();
    const allCountries=payload; */

    /* const {response}= await axios.get(`http://localhost:3001/countries/?nombre=${input.countryId}`);

    console.log(response[0].id) */

    /* let country = allCountries.find((country)=>country.nombre===input.countryId) */
    /* input.countryId = response[0].id; */
    try {
        return async (dispatch)=>{

            
            const {data}= await axios.post(`http://localhost:3001/activities/`,input);
            console.log(data);
            return dispatch({
                            type:POST_NEW_ACTIVITY,
                            payload:data
            })
        }
    } catch (error) {
        console.log(error);
    }
}
