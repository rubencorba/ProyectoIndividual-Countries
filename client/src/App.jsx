import {Route,Routes,useNavigate} from "react-router-dom";

import CreateComponent from './views/create/createComponent'
import DetailComponent from './views/detail/detailComponent'
import HomeComponent from './views/home/homeComponent'
import LandingComponent from './views/landing/landingComponent'

/* import './App.css' */

function App() {

  const navigate = useNavigate();
  /* const [access, setAccess] = useState(false); */

const login= async (userData)=> {

    const { email, password } = userData;

    if (email==="rubencorba@gmail.com" && password==="123asd"){
      navigate('/home')
    }else{
      throw Error("Usuario o contraseña incorrectos")
    }
    /* const { access } = data;
    setAccess(access);
    access && navigate('/home'); */
   
}

/* useEffect(() => {
  !access && navigate('/');
}, [access]); */


  return (
    <div>
      <Routes>
        <Route exact path='/' element={<LandingComponent login={login}/>}/>
        <Route exact path='/home' element={<HomeComponent/>}/>
        <Route path='/detail/:id' element={<DetailComponent/>}/>
        <Route path='/create' element={<CreateComponent/>}/>
      </Routes>
      
    </div>
  )
}

export default App
