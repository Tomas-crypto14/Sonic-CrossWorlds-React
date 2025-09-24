import React from 'react'
import HeaderEggPawn from '../../organisms/HeaderEggPawn'
import {Routes, Route} from 'react-router-dom'
import EggPawn2 from './EggPawn2'
import EggPawn3 from './EggPawn3'
const EggPawn = () => {
  return (
    <div id="container-race">
        <h2>Historia de EggPawn</h2>
        <h3>Velocidad alta(rápida)</h3>

        <HeaderEggPawn/>
        <Routes>
          <Route path="/EggPawn" element={<EggPawn/>}/>
          <Route path="/EggPawn2" element={<EggPawn2/>}/>
          <Route path="/EggPawn3" element={<EggPawn3/>}/>
        </Routes>
    </div>
  )
}

export default EggPawn