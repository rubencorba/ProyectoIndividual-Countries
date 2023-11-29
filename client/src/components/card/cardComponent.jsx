import './cardStyles.css'

function CardComponent({country}) {
  
  const {nombre,population,imagenBandera}= country;

  return (
    <div className='card-container'>
      <p>{nombre}</p>
      <p>{population}</p>
      <p>{imagenBandera}</p>
      
      <p>Soy una card</p>
      
    </div>
  )
}

export default CardComponent