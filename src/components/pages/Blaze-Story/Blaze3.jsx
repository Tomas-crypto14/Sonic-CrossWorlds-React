import React from 'react'
import HeaderBlaze from '../../organisms/HeaderBlaze'
import {Routes, Route} from 'react-router-dom'
import Blaze from './Blaze'
import Blaze2 from './Blaze2'

const Blaze3 = () => {
  return (
    <div id="container-race">
        <h2>Historia de Blaze</h2>
        <h3>Velocidad SuperSonic</h3>

        <HeaderBlaze/>
        <Routes>
            <Route path="/Blaze" element={<Blaze/>}/>
            <Route path="/Blaze2" element={<Blaze/>}/>
            <Route path="/Blaze3" element={<Blaze3/>}/>
        </Routes>
    </div>
  )
}

export default Blaze3