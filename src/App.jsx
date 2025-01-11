// eslint-disable-next-line no-unused-vars
import React, {useState} from 'react'
import { Route, Routes } from "react-router-dom"
import Navbar from "./componetes/Navbar/Navbar"
import Home from './pages/Home/Home'
import Cart from  './pages/Cart/Cart/'
import PlaceOuder from "./pages/PlaceOuder/PlaceOuder"
import Footer from "./componetes/Footer/Footer"
// import { useState } from "react"
import LoginPopup from "./componetes/LoginPopup/LoginPopup"
const App = () => {

  const [showLogin,setShowLogin] = useState (false)
  return (
    <>
    {showLogin?<LoginPopup setShowLogin={setShowLogin} /> : <></>}
    <div className="app">
      <Navbar setShowLogin={setShowLogin}/> 
      <Routes>
        < Route path="/" element={<Home/>}/>
        < Route path="/Cart" element={<Cart/>}/>
        < Route path="/order" element={<PlaceOuder/>}/>


      </Routes>
    </div>
    <Footer/>
    
    </>

  )
}

export default App
