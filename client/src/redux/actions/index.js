import axios from 'axios';

export const GET_ALL_COUNTRIES="GET_ALL_COUNTRIES"
export const GET_COUNTRY_BY_NAME="GET_COUNTRY_BY_NAME"
export const GET_DETAIL_COUNTRY="GET_DETAIL_COUNTRY"
export const POST_NEW_ACTIVITY="POST_NEW_ACTIVITY"


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
    /* try {
        return async (dispatch)=>{
            const {data}= await axios.get(`http://localhost:3001/countries/${id}`);
            return dispatch({
                type:GET_DETAIL_COUNTRY,
                payload:data
            })
        }
    } catch (error) {
        console.log(error);
    } */
    return (dispatch)=>{
        return dispatch({
            type:POST_NEW_ACTIVITY,
            payload:input
        })
    }
    
}