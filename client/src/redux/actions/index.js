import axios from 'axios';

export const GET_ALL_COUNTRIES="GET_ALL_COUNTRIES"
export const GET_COUNTRY_BY_NAME="GET_COUNTRY_BY_NAME"
export const GET_DETAIL_COUNTRY="GET_DETAIL_COUNTRY"
export const POST_NEW_ACTIVITY="POST_NEW_ACTIVITY"
export const FILTER="FILTER"
export const ORDER="ORDER"
export const FILTER_ACT="FILTER_ACT"



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
            if(typeof data==="string")window.alert(data);
            else return dispatch({
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

    return async (dispatch)=>{
        try {
            const {data}= await axios.post(`http://localhost:3001/activities/`,input);
            /* console.log(data); */
            window.alert('¡Actividad creada con éxito!');
            return dispatch({
                            type:POST_NEW_ACTIVITY,
                            payload:data
            })
        
        } catch (error) {
        window.alert('¡Actividad ya existente!');
        throw new Error(error);
        }
    }
}

export const filterCards=(continente)=>{
    return {type:FILTER, payload:continente}
}


export const orderCards=(orden)=>{
    return {type:ORDER, payload:orden}
}


export const filterByActivity=(actividad)=>{
    return {type:FILTER_ACT, payload:actividad}
}