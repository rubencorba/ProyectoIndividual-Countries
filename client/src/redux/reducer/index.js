import { GET_ALL_COUNTRIES, GET_COUNTRY_BY_NAME,GET_DETAIL_COUNTRY,POST_NEW_ACTIVITY,FILTER,ORDER } from "../actions";

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
        case POST_NEW_ACTIVITY:
            return {...state,activities:[...state.activities,action.payload]}
        case FILTER:
            if (action.payload==="North America"){
                console.log(state.allCountries)
                console.log(action.payload)

                const NAcountries= state.allCountries.filter((country)=>country.continente=="{\"North America\"}")
                console.log(NAcountries)
                return {...state,allCountries: NAcountries} 
            }
        default:
            return {...state}
    }
}