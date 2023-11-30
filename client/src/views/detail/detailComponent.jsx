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

  return (
    <div>
      <div>{detail.nombre}</div>
      <img src={detail.imagenBandera} alt="dhdghgdz" />
      
    </div>
  )
}

export default DetailComponent