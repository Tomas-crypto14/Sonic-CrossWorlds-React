import React from 'react'
import HeaderTails from '../../organisms/HeaderTails'
import {Route, Routes} from 'react-router-dom'
import Tails from './Tails'
import Tails2 from './Tails2'
const Tails3 = () => {
  return (
    <div id="container-race">
        <h2>Historia de Tails</h2>
        <h3>Velocidad SuperSonic</h3>
        <HeaderTails/>
          <Routes>
            <Route path="/Tails" element={<Tails/>}/>
            <Route path="/Tails2" element={<Tails2/>}/>
            <Route path="/Tails3" element={<Tails3/>}/>
          </Routes>
    </div>
  )
}

export default Tails3