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
    nombre:'Campo obligatorio', //Para colocal un mensaje de error antes de escribir: nombre:'por favor completar este campo'
    dificultad:"",
    duracion:"",
    temporada:"",
    countryId:""
  });

  const validate=(input)=>{
    if (input.nombre.length<1){
      setError({...error,nombre:"El nombre no puede estar vacío"})
      return
    }
    setError({...error,nombre:''})
  }

  const handleChange=(event)=>{
    setInput({
      ...input,
      [event.target.name]:event.target.value
    })
    validate({
      ...input,
      [event.target.name]:event.target.value
    })
  }


  return (
    <div>
      <form onSubmit={""}>
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
        </div>
        <div>
          <label>Duracion</label>
          <input 
          placeholder='Duración en horas' 
          name='duracion' 
          onChange={handleChange} 
          value={input.value}/>
        </div>
        <div>
          <label>Temporada</label>
          <input 
          placeholder='Verano,Otoño,Invierno,Primavera' 
          name='temporada' 
          onChange={handleChange} 
          value={input.value}/>
        </div>
        <div>
          <label>Pais</label>
          <input 
          name='countryId' 
          onChange={handleChange} 
          value={input.value}/>
        </div>
        {error.nombre? null : <button type='submit' >Crear</button>}
      </form>
    </div>
  )
}

export default CreateComponent;
