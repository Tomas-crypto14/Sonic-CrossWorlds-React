import React from 'react'
import HeaderEggman from '../../organisms/HeaderEggman'
import {Routes, Route} from 'react-router-dom'
import Eggman2 from './Eggman2'
import Eggman3 from './Eggman3'
const Eggman = () => {
  return (
    <div id="container-race">
        <h2>Historia de Eggman</h2>
        <h3>Velocidad alta(rápida)</h3>

        <HeaderEggman/>
        <Routes>
          <Route path="/Eggman" element={<Eggman/>}/>
          <Route path="/Eggman2" element={<Eggman2/>}/>
          <Route path="/Eggman3" element={<Eggman3/>}/>
        </Routes>
    </div>
  )
}

export default Eggman