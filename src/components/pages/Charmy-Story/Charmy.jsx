import React from 'react'
import HeaderCharmy from '../../organisms/HeaderCharmy'
import {Routes, Route} from 'react-router-dom'
import Charmy2 from './Charmy2'
import Charmy3 from './Charmy3'
const Charmy = () => {
  return (
    <div id="container-race">
        <h2>Historia de Charmy</h2>
        <h3>Velocidad alta(rápida)</h3>

        <HeaderCharmy/>
        <Routes>
          <Route path="/Charmy" element={<Charmy/>}/>
          <Route path="/Charmy2" element={<Charmy2/>}/>
          <Route path="/Charmy3" element={<Charmy3/>}/>
        </Routes>
    </div>
  )
}

export default Charmy