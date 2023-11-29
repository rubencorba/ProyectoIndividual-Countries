import './homeStyles.css'

import { useEffect,useState } from 'react'
import {useDispatch,useSelector} from "react-redux"

import {getAllCountries} from '../../redux/actions/index'

import NavbarComponent from '../../components/navbar/navbarComponent'
import CardsComponent from '../../components/cards/cardsComponent'

function HomeComponent() {
  
  const dispatch= useDispatch();
  const allCountries= useSelector((state)=>state.allCountries);
  

  /* const [filtered,setFiltered]= useState(allCountries);
  const [searchString, setSearchString]= useState('');

  const handleChange=(event)=>{
    event.preventDefault();
    setSearchString(event.target.value);
  }

  const handleSubmit=(event)=>{
    event.preventDefault();
    const filtered= allCountries.filter(country=>country.name.includes(searchString))
    setFiltered(filtered);
  }

  useEffect (()=>{
    dispatch(getAllCountries());
  },[dispatch])
 */
  return (
    <div className="homeStyle">
      <h2 className="homeTittle">Countries</h2>
      <NavbarComponent /* handleChange={handleChange} handleSubmit={handleSubmit} */      />
      <CardsComponent allCountries={allCountries}/> {/* filtered */}
      
    </div>
  )
}

export default HomeComponent