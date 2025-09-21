import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from './components/molecules/Home'
import Header from './components/molecules/Header'
import HeaderCharacters from './components/organisms/HeaderCharacters'
import Introduccion from './components/molecules/Introduccion'
import Sonic from './components/pages/Sonic'
import Tails from './components/pages/Tails'
import Knuckles from './components/pages/Knuckles'
import Amy from './components/pages/Amy'
import Cream from './components/pages/Cream'
import Big from './components/pages/Big'
import Silver from './components/pages/Silver'
import Blaze from './components/pages/Blaze'
import Shadow from './components/pages/Shadow'
import Rouge from './components/pages/Rouge'
import Omega from './components/pages/Omega'
import Vector from './components/pages/Vector'
import Espio from './components/pages/Espio'
import Charmy from './components/pages/Charmy'
import Zavok from './components/pages/Zavok'
import Zazz from './components/pages/Zazz'
import Eggman from './components/pages/Eggman'
import MetalSonic from './components/pages/MetalSonic'
import Sage from './components/pages/Sage'
import EggPawn from './components/pages/EggPawn'
import Jet from './components/pages/Jet'
import Wave from './components/pages/Wave'
import Storm from './components/pages/Storm'
import Prologo from './components/molecules/Prologo'
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
            <Route path="/Prologo" element={<Prologo/>}/>
          </Routes>
        </BrowserRouter>
        <BrowserRouter>
        <HeaderCharacters/>
          <Routes>
            <Route path="/Sonic" element={<Sonic/>}/>
            <Route path="Tails" element={<Tails/>}/>
            <Route path="Knuckles" element={<Knuckles/>}/>
            <Route path="Amy" element={<Amy/>}/>
            <Route path="Cream" element={<Cream/>}/>
            <Route path="Big" element={<Big/>}/>
            <Route path="Silver" element={<Silver/>}/>
            <Route path="Blaze" element={<Blaze/>}/>
            <Route path="Shadow" element={<Shadow/>}/>
            <Route path="Rouge" element={<Rouge/>}/>
            <Route path="Omega" element={<Omega/>}/>
            <Route path="Vector" element={<Vector/>}/>
            <Route path="Espio" element={<Espio/>}/>
            <Route path="Charmy" element={<Charmy/>}/>
            <Route path="Zavok" element={<Zavok/>}/>
            <Route path="Zazz" element={<Zazz/>}/>
            <Route path="Eggman" element={<Eggman/>}/>
            <Route path="MetalSonic" element={<MetalSonic/>}/>
            <Route path="Sage" element={<Sage/>}/>
            <Route path="EggPawn" element={<EggPawn/>}/>
            <Route path="Jet" element={<Jet/>}/>
            <Route path="Wave" element={<Wave/>}/>
            <Route path="Storm" element={<Storm/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
