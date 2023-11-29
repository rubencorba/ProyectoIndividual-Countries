import axios from 'axios';

export const GET_ALL_COUNTRIES="GET_ALL_COUNTRIES"

export const getAllCountries=()=>{
    try {
        const endpoint='http://localhost:5000/countries/';
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