import {Route,Routes} from "react-router-dom";

import CreateComponent from './views/create/createComponent'
import DetailComponent from './views/detail/detailComponent'
import HomeComponent from './views/home/homeComponent'
import LandingComponent from './views/landing/landingComponent'

/* import './App.css' */

function App() {

  return (
    <div>
      <Routes>
        <Route exact path='/home' element={<HomeComponent/>}/>
        <Route path='/detail/:id' element={<DetailComponent/>}/>
        <Route path='/create' element={<CreateComponent/>}/>
      </Routes>
      
    </div>
  )
}

export default App
