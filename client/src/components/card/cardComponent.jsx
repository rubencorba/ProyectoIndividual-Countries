import './cardStyles.css'
import { Link } from 'react-router-dom';

function CardComponent({country}) {
  
  const {nombre,poblacion,area,id}= country;

  return (
    <div className='card-container'>
      <Link to={`/detail/${id}`} >

      <p>{nombre}</p>
      <p>{poblacion}</p>
      <p>{area}</p>
      </Link>
      
      
    </div>
  )
}

export default CardComponent