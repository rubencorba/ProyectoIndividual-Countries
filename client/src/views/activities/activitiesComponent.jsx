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
      activities?.map((activity)=>(
        <CardActivityComponent key={activity.nombre} activity={activity}/>
      ))
    ):(<h3>Aun no hay actividades creadas</h3>)
    }
    </div>
    </div>
  )
}

export default ActivitiesComponent

