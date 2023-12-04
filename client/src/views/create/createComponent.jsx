import './createStyles.css'

import { useEffect,useState } from 'react'
import validateCreate from './validateCreate';
import { getAllCountries, postNewActivity } from '../../redux/actions';
import { useDispatch,useSelector } from "react-redux";

function CreateComponent() {

  const dispatch= useDispatch();
  const allCountries= useSelector((state)=>state.allCountries);
  useEffect (()=>{
    dispatch(getAllCountries());
  },[dispatch])
  
  const [input,setInput]=useState({
    nombre:"",
    dificultad:0,
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

  const [filteredCountries, setFilteredCountries] = useState([]);
  const [selectedCountries, setSelectedCountries] = useState([]);
  const [existe, setExiste]=useState(false);
  const [countryToAdd, setCountryToAdd]=useState('')
  const [inputCountry,setInputCountry]=useState('')

  const countryChange=(event)=>{
    setInputCountry(event.target.value)
    let nombreInp=event.target.value;

    const filtered = allCountries.filter((countr) =>
      countr.nombre.toLowerCase().includes(nombreInp.toLowerCase())
    );
    setFilteredCountries(filtered) //Para mostrar la lista de países con coincidencia de nombre
    
    const country=allCountries.find((countr)=>countr.nombre===nombreInp); //Para buscar el país con ese nombre
    
    const idFound=country?.id // Guarda en idFound el id del país para luego setearlo
    country?setExiste(true):null
    setCountryToAdd(country?.nombre)
    setInput({
      ...input,
      countryId:[`${idFound}`]  
    })
  }

  
  const handleAgregar=(event)=>{
    event.preventDefault();
    setSelectedCountries([...selectedCountries,countryToAdd]);
    setCountryToAdd('');
    setExiste(false);
    setInputCountry('')
  }

  
  const handleSubmit=async(event)=>{
    event.preventDefault();
    await dispatch(postNewActivity(input));
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
          onChange={countryChange} 
          value={inputCountry}
          
          list="countries"/>
          
          <datalist name="" id="countries">
          
            {filteredCountries.map((country, id) => (
              
                <option key={id}>{country.nombre}</option>
              
            ))}
          </datalist>

          {existe?<button onClick={handleAgregar}>Agregar</button>:null}
          <ul>
            {selectedCountries.map((countr)=>(
              <div key={countr}>

                <li>
                  {countr}
                </li>
                <button>X</button>
              </div>
    
            ))}
          </ul>

          <span>{error.countryId}</span>
        </div>
        {error.nombre? null : <button type='submit' >Crear</button>}
      </form>
    </div>
  )
}

export default CreateComponent;
