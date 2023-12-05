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
                state.allCountries=state.allCountriesCopy
                const FilteredCountries= state.allCountries.filter((country)=>country.continente=="{\"North America\"}")
                return {...state,allCountries: FilteredCountries} 
            }
            if (action.payload==="South America"){
                state.allCountries=state.allCountriesCopy
                const FilteredCountries= state.allCountries.filter((country)=>country.continente=="{\"South America\"}")
                return {...state,allCountries: FilteredCountries} 
            }
            if (action.payload==="Asia"){
                state.allCountries=state.allCountriesCopy
                const FilteredCountries= state.allCountries.filter((country)=>country.continente=="{Asia}")
                return {...state,allCountries: FilteredCountries} 
            }
            if (action.payload==="Europe"){
                state.allCountries=state.allCountriesCopy
                const FilteredCountries= state.allCountries.filter((country)=>country.continente=="{Europe}")
                return {...state,allCountries: FilteredCountries} 
            }
            if (action.payload==="Africa"){
                state.allCountries=state.allCountriesCopy
                const FilteredCountries= state.allCountries.filter((country)=>country.continente=="{Africa}")
                return {...state,allCountries: FilteredCountries} 
            }
            if (action.payload==="Oceania"){
                state.allCountries=state.allCountriesCopy
                const FilteredCountries= state.allCountries.filter((country)=>country.continente=="{Oceania}")
                return {...state,allCountries: FilteredCountries} 
            }
            if (action.payload==="Antarctica"){
                state.allCountries=state.allCountriesCopy
                const FilteredCountries= state.allCountries.filter((country)=>country.continente=="{Antarctica}")
                return {...state,allCountries: FilteredCountries} 
            }
        case ORDER:
            if (action.payload==="Alfabeticamente"){
                const orderedCountries=state.allCountries.sort((a, b)=> {if(a.nombre>b.nombre) return 1; else return -1})
                return {...state,allCountries:orderedCountries}
            }
            if (action.payload==="Mayor area"){
                const orderedCountries=state.allCountries.sort((a, b)=> {if(Number(a.area)<Number(b.area)) return 1; else return -1})
                return {...state,allCountries:orderedCountries}
            }
            if (action.payload==="Mayor poblacion"){
                const orderedCountries=state.allCountries.sort((a, b)=> {if(Number(a.poblacion)<Number(b.poblacion)) return 1; else return -1})
                return {...state,allCountries:orderedCountries}
            }
        default:
            return {...state}
    }
}