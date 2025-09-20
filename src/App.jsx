import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from './components/Home'
import Header from './components/Header'
import Introduccion from './components/Introduccion'
import Sonic from './components/Sonic'
import Prologo from './components/Prologo'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import './App.scss'

function App() {
  return (
    <>
      <div id="main-container">
        <div id="logo-crossworlds">
          <img src="./src/assets/crossworlds-logo.png"/>
        </div>
        <BrowserRouter>
        <Header/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/Introduccion" element={<Introduccion/>}/>
            <Route path="/Sonic" element={<Sonic/>}/>
            <Route path="/Prologo" element={<Prologo/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
