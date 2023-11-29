import './navbarStyles.css';


function NavbarComponent({handleChange,handleSubmit}) {
  

  return (
    <div className='search-box'>
      <form onChange={handleChange}>
        <input placeholder='Ingrese ID o nombre' type='search'/>
        <button type='submit' onClick={handleSubmit}>Buscar</button>
      </form>
      
    </div>
  )
}

export default NavbarComponent