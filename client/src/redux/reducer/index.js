import { GET_ALL_COUNTRIES, GET_COUNTRY_BY_NAME,GET_DETAIL_COUNTRY } from "../actions";

const initialState={
    allCountries:[],
    allCountriesCopy: [],
    activities:[],
    detailCountry:{}
};


export const reducer=(state=initialState,action)=>{
    switch (action.type){
        case GET_ALL_COUNTRIES:
            return {...state,allCountries:action.payload,allCountriesCopy:action.payload}
        case GET_COUNTRY_BY_NAME:
            return {...state,allCountries:action.payload}
        case GET_DETAIL_COUNTRY:
            return {...state,detailCountry:action.payload}
        default:
            return {...state}
    }
}