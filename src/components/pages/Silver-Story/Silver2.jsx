import React from 'react'
import HeaderSilver from '../../organisms/HeaderSilver'
import {Routes, Route} from 'react-router-dom'
import Silver from './Silver'
import Silver3 from './Silver3'
const Silver2 = () => {
  return (
    <div id="container-race">
        <h2>Historia de Silver</h2>
        <h3>Velocidad Sonic</h3>

        <HeaderSilver/>
        <Routes>
            <Route path="/Silver" element={<Silver/>}/>
            <Route path="/Silver2" element={<Silver2/>}/>
            <Route path="/Silver3" element={<Silver3/>}/>
        </Routes>
    </div>
  )
}

export default Silver2