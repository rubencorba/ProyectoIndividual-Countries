import './cardsStyles.css';
import Card from '../card/cardComponent'

function CardsComponent({allCountries,prevHandler,nextHandler,pagina}) {

  const countriesList= allCountries;

  return (
    <div >
      <h4>Página: {pagina}</h4>
      <button onClick={prevHandler}>Anterior</button>
      <button onClick={nextHandler}>Siguiente</button>
      
      <div className='card-list'>
        {countriesList?.map((country)=>(
          <Card country={country}/>
        ))}

      </div>
    </div>
  )
}

export default CardsComponent