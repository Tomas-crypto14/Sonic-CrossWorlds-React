import React from 'react'
import HeaderCharmy from '../../organisms/HeaderCharmy'
import {Routes, Route} from 'react-router-dom'
import Charmy from './Charmy'
import Charmy3 from './Charmy3'
const Charmy2 = () => {
  return (
    <div id="container-race">
        <h2>Historia de Charmy</h2>
        <h3>Velocidad Sonic</h3>

        <HeaderCharmy/>
        <Routes>
            <Route path="/Charmy" element={<Charmy/>}/>
            <Route path="/Charmy2" element={<Charmy/>}/>
            <Route path="/Charmy3" element={<Charmy3/>}/>
        </Routes>
    </div>
  )
}

export default Charmy2