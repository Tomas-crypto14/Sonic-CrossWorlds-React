import React from 'react'
import HeaderVector from '../../organisms/HeaderVector'
import {Routes, Route} from 'react-router-dom'
import Vector2 from './Vector2'
import Vector3 from './Vector3'
const Vector = () => {
  return (
    <div id="container-race">
        <h2>Historia de Vector</h2>
        <h3>Velocidad alta(rápida)</h3>

        <HeaderVector/>
        <Routes>
          <Route path="/Vector" element={<Vector/>}/>
          <Route path="/Vector2" element={<Vector2/>}/>
          <Route path="/Vector3" element={<Vector3/>}/>
        </Routes>
    </div>
  )
}

export default Vector