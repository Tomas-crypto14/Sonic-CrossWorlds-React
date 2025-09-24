import React from 'react'
import HeaderStorm from '../../organisms/HeaderStorm'
import {Routes, Route} from 'react-router-dom'
import Storm from './Storm'
import Storm2 from './Storm2'
const Storm3 = () => {
  return (
    <div id="container-race">
        <h2>Historia de Storm</h2>
        <h3>Velocidad SuperSonic</h3>

        <HeaderStorm/>
        <Routes>
            <Route path="/Storm" element={<Storm/>}/>
            <Route path="/Storm2" element={<Storm2/>}/>
            <Route path="/Storm3" element={<Storm3/>}/>
        </Routes>
    </div>
  )
}

export default Storm3