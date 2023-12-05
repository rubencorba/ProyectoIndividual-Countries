import './navbarStyles.css';
import { Link } from 'react-router-dom';


function NavbarComponent({handleChange,handleSubmit}) {
  

  return (
    <div className='search-box'>
        <Link to='/Home'>
                <button>Home</button>
        </Link>
        <Link  to='/Activities'>
                <button>Actividades</button>
        </Link>
        <h2 className="homeTittle">Countries</h2>
      <form className='NavForm' onChange={handleChange}>
        <input  className='inputNavForm' placeholder='Ingrese nombre' type='search'/>
        <button type='submit' onClick={handleSubmit}>Buscar</button>
        <Link  to='/'>
                <button>Salir</button>
        </Link>
      </form>
      
    </div>
  )
}

export default NavbarComponent