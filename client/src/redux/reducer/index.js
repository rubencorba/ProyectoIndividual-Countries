import { GET_ALL_COUNTRIES } from "../actions";

const initialState={
    allCountries:[], // ??
    allCountriesCopy: [],
    activities:[] //??
};


export const reducer=(state=initialState,action)=>{
    switch (action.type){
        case GET_ALL_COUNTRIES:
            return {...state,allCountries:action.payload}
        default:
            return {...state}
    }
}