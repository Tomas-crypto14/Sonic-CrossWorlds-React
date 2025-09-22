import React from 'react'
import HeaderSilver from '../../organisms/HeaderSilver'
import {Routes, Route} from 'react-router-dom'
import Silver from './Silver'
import Silver2 from './Silver2'
const Silver3 = () => {
  return (
    <div id="container-race">
        <h2>Historia de Silver</h2>
        <h3>Velocidad SuperSonic</h3>

        <HeaderSilver/>
        <Routes>
            <Route path="/Silver" element={<Silver/>}/>
            <Route path="/Silver2" element={<Silver2/>}/>
            <Route path="/Silver3" element={<Silver3/>}/>        
        </Routes>
    </div>
  )
}

export default Silver3