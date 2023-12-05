import './cardsStyles.css';
import Card from '../card/cardComponent'

function CardsComponent({countriesToShow,prevHandler,nextHandler,pagina}) {

  const countriesList= countriesToShow;

  return (
    <div >
      <h4 className='paginaStyle'>Página: {pagina}</h4>
      <button onClick={prevHandler}>Anterior</button>
      <button onClick={nextHandler}>Siguiente</button>
      
      <div className='card-list'>
        {countriesList.length?(
        countriesList?.map((country)=>(
          <Card key={country.id} country={country}/>
        ))
        ):(<h5>Cargando..</h5>)}

      </div>
    </div>
  )
}

export default CardsComponent