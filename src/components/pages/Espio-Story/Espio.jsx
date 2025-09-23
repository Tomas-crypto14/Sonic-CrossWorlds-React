import React from 'react'
import HeaderEspio from '../../organisms/HeaderEspio'
import {Routes, Route} from 'react-router-dom'
import Espio2 from './Espio2'
import Espio3 from './Espio3'
const Espio = () => {
  return (
    <div id="container-race">
        <h2>Historia de Espio</h2>
        <h3>Velocidad alta(rápida)</h3>

        <HeaderEspio/>
        <Routes>
          <Route path="/Espio" element={<Espio/>}/>
          <Route path="/Espio2" element={<Espio2/>}/>
          <Route path="/Espio3" element={<Espio3/>}/>
        </Routes>
    </div>
  )
}

export default Espio