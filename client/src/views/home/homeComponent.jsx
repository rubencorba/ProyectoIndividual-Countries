import './homeStyles.css'

import { useEffect,useState } from 'react'
import {useDispatch,useSelector} from "react-redux"

import {getAllCountries, getCountriesByName} from '../../redux/actions/index'

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
    if (allCountries.length) {
      setCountriesToShow([...allCountries].splice(0, 10));
    }
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
    
    /* dispatch(OrderCards(event.target.value)) */
  }
  const handleFilter=(event)=>{
    /* dispatch(FilterCards(event.target.value)) */
  }
  return (
    <div className="homeStyle">
      <h2 className="homeTittle">Countries</h2>
      <NavbarComponent handleChange={handleChange} handleSubmit={handleSubmit}/>


      <div className="orderStyle" >
                  <select className="selectStyle" onChange={handleOrder}>
                     <option value="Ascendente">Ascendente</option>
                     <option value="Descendente">Descendente</option>
                  </select>
                  <select className="selectStyle" onChange={handleFilter}>
                     <option value="All">All</option>
                     <option value="Male">Male</option>
                     <option value="Female">Female</option>
                     <option value="Genderless">Genderless</option>
                     <option value="unknown">unknown</option>
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