import React from 'react'
import HeaderEggPawn from '../../organisms/HeaderEggPawn'
import {Routes, Route} from 'react-router-dom'
import EggPawn from './EggPawn'
import EggPawn3 from './EggPawn3'
const EggPawn2 = () => {
  return (
    <div id="container-race">
        <h2>Historia de EggPawn</h2>
        <h3>Velocidad Sonic</h3>

        <HeaderEggPawn/>
        <Routes>
            <Route path="/EggPawn" element={<EggPawn/>}/>
            <Route path="/EggPawn2" element={<EggPawn2/>}/>
            <Route path="/EggPawn3" element={<EggPawn3/>}/>
        </Routes>
    </div>
  )
}

export default EggPawn2