import React from 'react'
import HeaderSonic from '../organisms/HeaderSonic'
import {Route, Routes} from 'react-router-dom'
import Sonic from './Sonic'
import Sonic3 from './Sonic3'
const Sonic2 = () => {
  return (
    <div id="container-race">
        <h2>Historia de Sonic</h2>
        <h2>Velocidad Sonic</h2>
        <HeaderSonic/>
          <Routes>
            <Route path="/Sonic" element={<Sonic/>}/>
            <Route path="/Sonic2" element={<Sonic2/>}/>
            <Route path="/Sonic3" element={<Sonic3/>}/>
          </Routes>

    </div>
  )
}

export default Sonic2