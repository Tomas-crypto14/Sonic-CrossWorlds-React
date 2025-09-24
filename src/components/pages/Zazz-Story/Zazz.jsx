import React from 'react'
import HeaderZazz from '../../organisms/HeaderZazz'
import {Routes, Route} from 'react-router-dom'
import Zazz2 from './Zazz2'
import Zazz3 from './Zazz3'
const Zazz = () => {
  return (
    <div id="container-race">
        <h2>Historia de Zazz</h2>
        <h3>Velocidad alta(rápida)</h3>

        <HeaderZazz/>
        <Routes>
          <Route path="/Zazz" element={<Zazz/>}/>
          <Route path="/Zazz2" element={<Zazz2/>}/>
          <Route path="/Zazz3" element={<Zazz3/>}/>
        </Routes>
    </div>
  )
}

export default Zazz