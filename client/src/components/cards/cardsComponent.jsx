import './cardsStyles.css';
import Card from '../card/cardComponent'

function CardsComponent({allCountries}) {

  const countriesList= allCountries;

  return (
    <div className='card-list'>
      
      {countriesList?.map((country)=>(
        <Card country={country}/>
      ))}
    </div>
  )
}

export default CardsComponent