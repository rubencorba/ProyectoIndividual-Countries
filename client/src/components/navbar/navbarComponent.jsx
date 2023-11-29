import './navbarStyles.css';


function NavbarComponent() {
  

  return (
    <div>
      <form className='search-box'>
        <input placeholder='Ingrese ID o nombre' />
        <button>Buscar</button>
      </form>
      
    </div>
  )
}

export default NavbarComponent