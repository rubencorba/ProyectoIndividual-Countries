import './createStyles.css'

import { useEffect,useState } from 'react'

function CreateComponent() {
  
  const [input,setInput]=useState({
    nombre:"",
    dificultad:"",
    duracion:"",
    temporada:"",
    countryId:""
  });

  const [error,setError]=useState({
    nombre:"",
    dificultad:"",
    duracion:"",
    temporada:"",
    countryId:""
  });

  const handleChange=(event)=>{
    setInput({
      ...input,
      [event.target.nombre]:event.target.value
    })
  }


  return (
    <div>
      <form onSubmit={""}>
        <div>
          <label>Nombre</label>
          <input 
          placeholder='Nombre de la actividad' 
          nombre='nombre' 
          onChange={handleChange}
          value={input.value}/>
        </div>
        <div>
          <label>Dificultad</label>
          <input 
          placeholder='1-5' 
          nombre='dificultad' 
          onChange={handleChange} 
          value={input.value}/>
        </div>
        <div>
          <label>Duracion</label>
          <input 
          placeholder='Duración en horas' 
          nombre='duracion' 
          onChange={handleChange} 
          value={input.value}/>
        </div>
        <div>
          <label>Temporada</label>
          <input 
          placeholder='Verano,Otoño,Invierno,Primavera' 
          nombre='temporada' 
          onChange={handleChange} 
          value={input.value}/>
        </div>
        <div>
          <label>Pais</label>
          <input 
          nombre='countryId' 
          onChange={handleChange} 
          value={input.value}/>
        </div>
      </form>
    </div>
  )
}

export default CreateComponent;
