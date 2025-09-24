import React from 'react'
import HeaderJet from '../../organisms/HeaderJet'
import {Routes, Route} from 'react-router-dom'
import Jet from './Jet'
import Jet2 from './Jet2'
const Jet3 = () => {
  return (
    <div id="container-race">
        <h2>Historia de Jet</h2>
        <h3>Velocidad SuperSonic</h3>

        <HeaderJet/>
        <Routes>
            <Route path="/Jet" element={<Jet/>}/>
            <Route path="/Jet2" element={<Jet2/>}/>
            <Route path="/Jet3" element={<Jet3/>}/>
        </Routes>
    </div>
  )
}

export default Jet3