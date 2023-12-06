import './cardStyles.css'
import { Link } from 'react-router-dom';

function CardComponent({country}) {
  
  const {id,nombre,area,imagenBandera,capital,continente,activities}= country;

  return (

    <div className="flip-card">
      <Link to={`/detail/${id}`} >
        <div className="flip-card-inner">

         <div className="flip-card-front">
          <img src={imagenBandera} alt="imagen de la bandera" />
          <p>{nombre}</p>
         </div>
         <div className="flip-card-back">
          <p>Nombre: {nombre}</p>
          <p>Capital: {capital}</p>
          <p>Continente: {continente}</p>
          <p>Area: {area}</p>
          <p>Actividades: {activities}</p>
         </div>
        </div>
      </Link>
    </div>
    
  )
}

export default CardComponent

/* <div className='card-container'>
      

      
      
      
      </Link>
      
      
    </div> */