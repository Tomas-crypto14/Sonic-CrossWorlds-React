import React from 'react'
import HeaderEggman from '../../organisms/HeaderEggman'
import {Routes, Route} from 'react-router-dom'
import Eggman from './Eggman'
import Eggman2 from './Eggman2'
const Eggman3 = () => {
  return (
    <div id="container-race">
        <h2>Historia de Eggman</h2>
        <h3>Velocidad SuperSonic</h3>

        <HeaderEggman/>
        <Routes>
            <Route path="/Eggman" element={<Eggman/>}/>
            <Route path="/Eggman2" element={<Eggman2/>}/>
            <Route path="/Eggman3" element={<Eggman3/>}/>
        </Routes>
    </div>
  )
}

export default Eggman3