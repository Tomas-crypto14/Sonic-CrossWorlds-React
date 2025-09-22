import React from 'react'
import HeaderBlaze from '../../organisms/HeaderBlaze'
import {Routes, Route} from 'react-router-dom'
import Blaze2 from './Blaze2'
import Blaze3 from './Blaze3'
const Blaze = () => {
  return (
    <div id="container-race">
        <h2>Historia de Blaze</h2>
        <h3>Velocidad alta(rápida)</h3>
        <HeaderBlaze/>
        <Routes>
          <Route path="/Blaze" element={<Blaze/>}/>
          <Route path="/Blaze2" element={<Blaze2/>}/>
          <Route path="/Blaze3" element={<Blaze3/>}/>
        </Routes>
    </div>
  )
}

export default Blaze