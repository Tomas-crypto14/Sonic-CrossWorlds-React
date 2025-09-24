import React from 'react'
import HeaderSage from '../../organisms/HeaderSage'
import {Routes, Route} from 'react-router-dom'
import Sage from './Sage'
import Sage2 from './Sage2'
const Sage3 = () => {
  return (
    <div id="container-race">
        <h2>Historia de Sage</h2>
        <h3>Velocidad SuperSonic</h3>

        <HeaderSage/>
        <Routes>
            <Route path="/Sage" element={<Sage/>}/>
            <Route path="/Sage2" element={<Sage2/>}/>
            <Route path="/Sage3" element={<Sage3/>}/>
        </Routes>
    </div>
  )
}

export default Sage3