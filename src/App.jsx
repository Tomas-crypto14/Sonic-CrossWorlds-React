import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from './components/molecules/Home'
import Header from './components/molecules/Header'
import HeaderCharacters from './components/organisms/HeaderCharacters'
import Introduccion from './components/molecules/Introduccion'
import Sonic from './components/pages/Sonic-Story/Sonic'
import Sonic2 from './components/pages/Sonic-Story/Sonic2'
import Sonic3 from './components/pages/Sonic-Story/Sonic3'
import Tails from './components/pages/Tails-Story/Tails'
import Tails2 from './components/pages/Tails-Story/Tails2'
import Tails3 from './components/pages/Tails-Story/Tails3'
import Knuckles from './components/pages/Knuckles-Story/Knuckles'
import Knuckles2 from './components/pages/Knuckles-Story/Knuckles2'
import Knuckles3 from './components/pages/Knuckles-Story/Knuckles3'
import Amy from './components/pages/Amy-Story/Amy'
import Amy2 from './components/pages/Amy-Story/Amy2'
import Amy3 from './components/pages/Amy-Story/Amy3'
import Cream from './components/pages/Cream-Story/Cream'
import Cream2 from './components/pages/Cream-Story/Cream2'
import Cream3 from './components/pages/Cream-Story/Cream3'
import Big from './components/pages/Big-Story/Big'
import Big2 from './components/pages/Big-Story/Big2'
import Big3 from './components/pages/Big-Story/Big3'
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
            <Route path="/Sonic" element={<Sonic/>}/>
            <Route path="/Sonic2" element={<Sonic2/>}/>
            <Route path="/Sonic3" element={<Sonic3/>}/>
            <Route path="/Tails" element={<Tails/>}/>
            <Route path="/Tails2" element={<Tails2/>}/>
            <Route path="/Tails3" element={<Tails3/>}/>
            <Route path="/Knuckles" element={<Knuckles/>}/>
            <Route path="/Knuckles2" element={<Knuckles2/>}/>
            <Route path="/Knuckles3" element={<Knuckles3/>}/>
            <Route path="/Amy" element={<Amy/>}/>
            <Route path="/Amy2" element={<Amy2/>}/>
            <Route path="/Amy3" element={<Amy3/>}/>
            <Route path="/Cream" element={<Cream/>}/>
            <Route path="/Cream2" element={<Cream2/>}/>
            <Route path="/Cream3" element={<Cream3/>}/>
            <Route path="/Big" element={<Big/>}/>
            <Route path="/Big2" element={<Big2/>}/>
            <Route path="/Big3" element={<Big3/>}/>
            <Route path="/Silver" element={<Silver/>}/>
            <Route path="/Blaze" element={<Blaze/>}/>
            <Route path="/Shadow" element={<Shadow/>}/>
            <Route path="/Rouge" element={<Rouge/>}/>
            <Route path="/Omega" element={<Omega/>}/>
            <Route path="/Vector" element={<Vector/>}/>
            <Route path="/Espio" element={<Espio/>}/>
            <Route path="/Charmy" element={<Charmy/>}/>
            <Route path="/Zavok" element={<Zavok/>}/>
            <Route path="/Zazz" element={<Zazz/>}/>
            <Route path="/Eggman" element={<Eggman/>}/>
            <Route path="/MetalSonic" element={<MetalSonic/>}/>
            <Route path="/Sage" element={<Sage/>}/>
            <Route path="/EggPawn" element={<EggPawn/>}/>
            <Route path="/Jet" element={<Jet/>}/>
            <Route path="/Wave" element={<Wave/>}/>
            <Route path="/Storm" element={<Storm/>}/>
          </Routes>
          <HeaderCharacters/>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
