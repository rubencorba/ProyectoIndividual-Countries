import './homeStyles.css'

import NavbarComponent from '../../components/navbar/navbarComponent'
import CardsComponent from '../../components/cards/cardsComponent'

function HomeComponent() {
  

  return (
    <div className="homeStyle">
      <h2 className="homeTittle">Countries</h2>
      <NavbarComponent/>
      <CardsComponent/>
      
    </div>
  )
}

export default HomeComponent