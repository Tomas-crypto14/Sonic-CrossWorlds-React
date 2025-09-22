import React from 'react'
import HeaderCream from '../../organisms/HeaderCream'
import {Routes, Route} from 'react-router-dom'
import Cream from './Cream'
import Cream2 from './Cream2'
const Cream3 = () => {
  return (
    <div id="container-race">
        <h2>Historia de Cream</h2>
        <h3>Velocidad SuperSonic</h3>
        <HeaderCream/>
        <Routes>
            <Route path="/Cream" element={<Cream/>}/>
            <Route path="/Cream2" element={<Cream2/>}/>
            <Route path="/Cream3" element={<Cream3/>}/>
        </Routes>
    </div>
  )
}

export default Cream3