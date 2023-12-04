import './detailStyles.css'
import {getDetailCountry} from '../../redux/actions/index'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from "react-router-dom";

function DetailComponent() {

  const detail= useSelector((state)=>state.detailCountry)

  const dispatch=useDispatch()
  let {id}= useParams();
  
  useEffect(()=>{
    dispatch(getDetailCountry(id))
  },[id])

  console.log(detail.Activities)

  return (
    <div>
      {/* <div>{detail.nombre}</div>
      <img src={detail.imagenBandera} alt="dhdghgdz" /> */}


      <div /* className="detailStyle" */>
                    <div>
                    <img /* className="imgdetailStyle" */ src={detail.imagenBandera} alt={detail.nombre}/>
                    </div>
                    <div /* className="detdetStyle" */>
                    <h1>Name: {detail.nombre}</h1>
                    <h1>ID: {detail.id}</h1>
                    <h1>Continente: {detail.continente}</h1>
                    <h1>Capital: {detail.capital}</h1>
                    <h1>Sub-Region: {detail.subRegion}</h1>
                    <h1>Area: {detail.area}</h1>
                    <h1>Población: {detail.poblacion}</h1>
                    {detail.Activities?.map((act)=>
                      <div>
                        <h3>Actividad: {act.nombre}</h3>
                        <h3>Temporada: {act.temporada}</h3>
                      </div>
                    )}
                    </div>

                
                
            </div>
      
    </div>
  )
}

export default DetailComponent