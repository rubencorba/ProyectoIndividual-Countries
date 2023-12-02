import './createStyles.css'

import { useEffect,useState } from 'react'
import validateCreate from './validateCreate';
import { postNewActivity } from '../../redux/actions';
import { useDispatch } from "react-redux";

function CreateComponent() {

  const dispatch= useDispatch();
  
  const [input,setInput]=useState({
    nombre:"",
    dificultad:"",
    duracion:"",
    temporada:"",
    countryId:""
  });

  const [error,setError]=useState({
    nombre:'Campo obligatorio', 
    dificultad:"",
    duracion:"",
    temporada:"",
    countryId:""
  });

  const handleChange=(event)=>{
    setInput({
      ...input,
      [event.target.name]:event.target.value
    })
    setError(validateCreate({
      ...input,
      [event.target.name]:event.target.value
    }))
  }

  const handleSubmit=(event)=>{
    event.preventDefault();
    dispatch(postNewActivity(input))
  }


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre</label>
          <input 
          placeholder='Nombre de la actividad' 
          name='nombre' 
          onChange={handleChange}
          value={input.value}/>
          <span>{error.nombre}</span>
        </div>
        <div>
          <label>Dificultad</label>
          <input 
          placeholder='1-5' 
          name='dificultad' 
          onChange={handleChange} 
          value={input.value}/>
          <span>{error.dificultad}</span>
        </div>
        <div>
          <label>Duracion</label>
          <input 
          placeholder='Duración en horas' 
          name='duracion' 
          onChange={handleChange} 
          value={input.value}/>
          <span>{error.duracion}</span>
        </div>
        <div>
          <label>Temporada</label>
          <input 
          placeholder='Verano,Otoño,Invierno,Primavera' 
          name='temporada' 
          onChange={handleChange} 
          value={input.value}/>
          <span>{error.temporada}</span>
        </div>
        <div>
          <label>Pais</label>
          <input 
          name='countryId' 
          onChange={handleChange} 
          value={input.value}/>
          <span>{error.countryId}</span>
        </div>
        {error.nombre? null : <button type='submit' >Crear</button>}
      </form>
    </div>
  )
}

export default CreateComponent;
