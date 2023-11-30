import './cardStyles.css'
import { Link } from 'react-router-dom';

function CardComponent({country}) {
  
  const {nombre,poblacion,imagenBandera,id}= country;

  return (
    <div className='card-container'>
      <Link to={`/Home/${id}`} >

      <p>{nombre}</p>
      <p>{poblacion}</p>
      <p>{imagenBandera}</p>
      </Link>
      
      
    </div>
  )
}

export default CardComponent