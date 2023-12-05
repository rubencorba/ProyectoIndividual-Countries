import './homeStyles.css'

import { useEffect,useState } from 'react'
import {useDispatch,useSelector} from "react-redux"

import {getAllCountries, getCountriesByName, orderCards,filterCards} from '../../redux/actions/index'

import NavbarComponent from '../../components/navbar/navbarComponent'
import CardsComponent from '../../components/cards/cardsComponent'


function HomeComponent() {
  
  const dispatch= useDispatch();
  const allCountries= useSelector((state)=>state.allCountries);
  
  const [searchString, setSearchString]= useState('');
  
  const handleChange=(event)=>{
    event.preventDefault();
    setSearchString(event.target.value);
  }
  
  const handleSubmit=(event)=>{
    event.preventDefault();
    dispatch(getCountriesByName(searchString))
  }
  
  
  
  useEffect (()=>{
    dispatch(getAllCountries());
  },[dispatch])

  
  
  const [countriesToShow, setCountriesToShow]= useState([]);

  useEffect(() => {
    /* if (allCountries.length) { */
      setCountriesToShow([...allCountries].splice(0, 10));
    /* } */
  }, [allCountries]);
  
  
  const [page,setPage]=useState(1)
  
  const prevHandler=()=>{
    const prevPage=page-1;
    
    if(prevPage<1) return;
    
    const firstCountry=(prevPage-1)*10;
    
    setPage(prevPage);
    setCountriesToShow([...allCountries].splice(firstCountry,10))
  }
  
  const nextHandler=()=>{
    const totalCountries=allCountries.length;
    
    const nextPage=page+1;
    
    const firstCountry=page*10;
    
    if (firstCountry>totalCountries) return;
    setPage(nextPage);
    setCountriesToShow([...allCountries].splice(firstCountry,10))
  }
  

  const handleOrder=(event)=>{
    dispatch(orderCards(event.target.value));
    setCountriesToShow([...allCountries].splice(0, 10)); //Para solucionar problema de asincronía y forzar el renderizado actual
    setPage(1);
  }
  const handleFilter=(event)=>{
    dispatch(filterCards(event.target.value))
    setPage(1);
  }
  return (
    <div className="homeStyle">
      
      <NavbarComponent handleChange={handleChange} handleSubmit={handleSubmit}/>


      <div /* className="orderStyle" */ >
                  <select /* className="selectStyle" */ onChange={handleOrder}>
                    <option value="" disabled selected >Ordenar</option>
                    
                     <option value="Alfabeticamente">Alfabeticamente</option>
                     <option value="Mayor area">Mayor Área</option>
                     <option value="Mayor poblacion">Mayor Población</option>
                  </select>
                  <select /* className="selectStyle" */ onChange={handleFilter}>
                    <option value="" disabled selected>Continente</option>
                     <option value="South America">South América</option>
                     <option value="North America">North América</option>
                     <option value="Asia">Asia</option>
                     <option value="Africa">África</option>
                     <option value="Europe">Europe</option>
                     <option value="Antarctica">Antarctica</option>
                     <option value="Oceania">Oceanía</option>
                  </select>
      </div>
      <CardsComponent countriesToShow={countriesToShow} 
      prevHandler={prevHandler} 
      nextHandler={nextHandler}
      pagina={page}/>
      
      
    </div>
  )
}

export default HomeComponent