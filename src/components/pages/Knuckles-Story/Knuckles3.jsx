import React from 'react'
import HeaderKnuckles from '../../organisms/HeaderKnuckles'
import {Routes, Route} from 'react-router-dom'
import Knuckles from './Knuckles'
import Knuckles2 from './Knuckles2'
const Knuckles3 = () => {
  return (
    <div id="container-race">
        <h2>Historia de Knuckles</h2>
        <h3>Velocidad SuperSonic</h3>

        <HeaderKnuckles/>
        <Routes>
          <Route path="/Knuckles" element={<Knuckles/>}/>
          <Route path="/Knuckles2" element={<Knuckles2/>}/>
          <Route path="/Knuckles3" element={<Knuckles3/>}/>
        </Routes>
    </div>
  )
}

export default Knuckles3