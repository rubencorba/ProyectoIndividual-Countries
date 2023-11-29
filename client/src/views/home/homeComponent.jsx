import './homeStyles.css'

import { useEffect } from 'react'
import {useDispatch,useSelector} from "react-redux"

import {getAllCountries} from '../../redux/actions/index'

import NavbarComponent from '../../components/navbar/navbarComponent'
import CardsComponent from '../../components/cards/cardsComponent'

function HomeComponent() {
  
  const dispatch= useDispatch();
  const allCountries= useSelector((state)=>state.allCountries)

  useEffect (()=>{
    dispatch(getAllCountries());
  },[dispatch])

  return (
    <div className="homeStyle">
      <h2 className="homeTittle">Countries</h2>
      <NavbarComponent/>
      <CardsComponent allCountries={allCountries}/>
      
    </div>
  )
}

export default HomeComponent