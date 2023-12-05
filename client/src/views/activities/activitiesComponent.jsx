import CardActivityComponent from '../../components/cardActivity/cardActivityComponent';
import NavbarComponent from '../../components/navbar/navbarComponent';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './activities.css';


function ActivitiesComponent() {

  const activities= useSelector((state)=>state.activities)

  return (
    <div>
    <NavbarComponent/>
    <Link to='/create'>
    <button>Crear Actividad</button>
    </Link>
    <div className='Actcard-list'>
    {activities.length?(
      activities?.map((act)=>(
        <CardActivityComponent key={act.nombre} activity={act}/>
      ))
    ):(<h3>Aun no hay actividades creadas</h3>)
    }
    </div>
    </div>
  )
}

export default ActivitiesComponent

{/* <div >
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
    </div> */}