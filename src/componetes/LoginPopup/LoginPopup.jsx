// import React from 'react'
import { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'

// eslint-disable-next-line react/prop-types
const LoginPopup = ({setShowLogin}) => {

    const [currState,setCurrState] = useState ("Login")
  return (
    <div className='login-popup'>
     <form  className="login-popup-contener">
        <div className="login-popup-titel">
            <h2>{currState}</h2>
            <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className="login-popup-inputs">
            {currState==="Login"?<></>:<input type="text" placeholder='Your name' required/>}
            <input type="email" placeholder='Your email' required/>
            <input type="password" placeholder='password' required/>
        </div>
        <button>{currState==="Sign Up"?"create account":"login"}</button>
        <div className="login-pupop-codition">
            <input type="checkbox" required />
            <p>By continuing, i agree to the terms of use & privacy policy</p>
        </div>
        {currState==="Login"
        ?<p>creat a new account? <span onClick={()=>setCurrState("Sign Up")}>click here</span></p>
        :<p>Already have an account? <span onClick={()=>setCurrState("Login")}>login here</span></p>
        }
     </form>
    </div>
  )
}

export default LoginPopup
