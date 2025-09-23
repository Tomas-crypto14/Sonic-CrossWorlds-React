import React from 'react'
import HeaderOmega from '../../organisms/HeaderOmega'
import {Routes, Route} from 'react-router-dom'
import Omega from './Omega'
import Omega3 from './Omega3'
const Omega2 = () => {
  return (
    <div id="container-race">
        <h2>Historia de Omega</h2>
        <h3>Velocidad Sonic</h3>

        <HeaderOmega/>
        <Routes>
            <Route path="/Omega" element={<Omega/>}/>
            <Route path="/Omega2" element={<Omega2/>}/>
            <Route path="/Omega3" element={<Omega3/>}/> 
        </Routes>
    </div>
  )
}

export default Omega2