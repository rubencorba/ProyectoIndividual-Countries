import './landingStyles.css'

import { useState,useEffect } from "react";
import ValidateLanding from "./validateLanding";

function LandingComponent({login}) {
  
  const [userData, setUserData]= useState({
    email: '',
    password: ''
})

const [errors, setErrors]= useState({})

const handleChange= (event)=>{
    setUserData({
        ...userData,
        [event.target.name] : event.target.value
    })
}

useEffect(()=> {
    setErrors(ValidateLanding(userData));
},[userData]);

const handleSubmit=(e)=>{
    e.preventDefault();
    login(userData)
}

  return (
    <div /* className="formStyle" */>
            {/* <div>
                <img src={tittlef} alt="Bienvenido!!" />
            </div> */}
            <form /* className="formformStyle" */ onSubmit={handleSubmit}>
            <label >Email: </label>
            <input placeholder='example@gmail.com' className="input1" type="text" value={userData.email} name='email' onChange={handleChange}/>
            {userData.email !== ''? <>{errors.email}</> : ''} {/* Para que me muestre X estando vacío usar errors no userData */}
            <br />
            <label >Password: </label>
            <input placeholder='*******' type="password" className="input1" value={userData.password} name='password' onChange={handleChange}/>
            {userData.password !== ''? <>{errors.password}</> : ''}
            <br />
            <button type="submit" /* onClick={handleSubmit} */>Submit</button>

        </form>
        </div>
  )
}

export default LandingComponent