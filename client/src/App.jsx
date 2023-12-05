import {Route,Routes,useNavigate} from "react-router-dom";

import CreateComponent from './views/create/createComponent'
import DetailComponent from './views/detail/detailComponent'
import HomeComponent from './views/home/homeComponent'
import LandingComponent from './views/landing/landingComponent'
import ActivitiesComponent from "./views/activities/activitiesComponent";

/* import './App.css' */

function App() {

const navigate = useNavigate();

const login= async (userData)=> {

    const { email, password } = userData;

    if (email==="rubencorba@gmail.com" && password==="123asd"){
      navigate('/home')
    }else{
      throw Error("Usuario o contraseña incorrectos")
    }
  
   
}

  return (
    <div>
      <Routes>
        <Route exact path='/' element={<LandingComponent login={login}/>}/>
        <Route exact path='/home' element={<HomeComponent/>}/>
        <Route path='/detail/:id' element={<DetailComponent/>}/>
        <Route path='/create' element={<CreateComponent/>}/>
        <Route path='/activities' element={<ActivitiesComponent/>}/>
      </Routes>
      
    </div>
  )
}

export default App
