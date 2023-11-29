import { GET_ALL_COUNTRIES, GET_COUNTRY_BY_NAME } from "../actions";

const initialState={
    allCountries:[],
    allCountriesCopy: [],
    activities:[]
};


export const reducer=(state=initialState,action)=>{
    switch (action.type){
        case GET_ALL_COUNTRIES:
            return {...state,allCountries:action.payload}
        case GET_COUNTRY_BY_NAME:
            return {...state,allCountries:action.payload}
        default:
            return {...state}
    }
}