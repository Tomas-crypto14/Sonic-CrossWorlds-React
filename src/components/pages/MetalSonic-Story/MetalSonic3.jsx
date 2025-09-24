import React from 'react'
import HeaderMetalSonic from '../../organisms/HeaderMetalSonic'
import {Routes, Route} from 'react-router-dom'
import MetalSonic from './MetalSonic'
import MetalSonic2 from './MetalSonic2'
const MetalSonic3 = () => {
  return (
    <div id="container-race">
        <h2>Historia de Metal Sonic</h2>
        <h3>Velocidad SuperSonic</h3>

        <HeaderMetalSonic/>
        <Routes>
            <Route path="/MetalSonic" element={<MetalSonic/>}/>
            <Route path="/MetalSonic2" element={<MetalSonic2/>}/>
            <Route path="/MetalSonic3" element={<MetalSonic3/>}/>
        </Routes>
    </div>
  )
}

export default MetalSonic3