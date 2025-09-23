import React from 'react'
import HeaderRouge from '../../organisms/HeaderRouge'
import {Routes, Route} from 'react-router-dom'
import Rouge from './Rouge'
import Rouge2 from './Rouge2'
const Rouge3 = () => {
  return (
    <div id="container-race">
        <h2>Historia de Rouge</h2>
        <h3>Velocidad SuperSonic</h3>

        <HeaderRouge/>
        <Routes>
            <Route path="/Rouge" element={<Rouge/>}/>
            <Route path="/Rouge2" element={<Rouge2/>}/>
            <Route path="/Rouge3" element={<Rouge3/>}/>
        </Routes>
    </div>
  )
}

export default Rouge3