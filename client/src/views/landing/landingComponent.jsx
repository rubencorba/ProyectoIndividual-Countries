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
    <div className="formStyle">
            <h1 className="TittleStyle">Countries</h1>
            <form className="formformStyle" onSubmit={handleSubmit}>
            <div className="inputContainer">
            <label >Email: </label>
            <input placeholder='example@gmail.com' className="input1" type="text" value={userData.email} name='email' onChange={handleChange}/>
            <span className="validationIcon">{userData.email !== ''? <>{errors.email}</> : ''}</span> {/* Para que me muestre X estando vacío usar errors no userData */}
            </div>
            
            <div className="inputContainer">
            <label >Password: </label>
            <input placeholder='*******' type="password" className="input1" value={userData.password} name='password' onChange={handleChange}/>
            <span className="validationIcon">{userData.password !== ''? <>{errors.password}</> : ''}</span>
            </div>
            
            <button type="submit" /* onClick={handleSubmit} */>Submit</button>

        </form>
        </div>
  )
}

export default LandingComponent