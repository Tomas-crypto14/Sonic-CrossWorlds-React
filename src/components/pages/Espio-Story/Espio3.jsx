import React from 'react'
import HeaderEspio from '../../organisms/HeaderEspio'
import {Routes, Route} from 'react-router-dom'
import Espio from './Espio'
import Espio2 from './Espio2'
const Espio3 = () => {
  return (
    <div id="container-race">
        <h2>Historia de Espio</h2>
        <h3>Velocidad SuperSonic</h3>

        <HeaderEspio/>
        <Routes>
            <Route path="/Espio" element={<Espio/>}/>
            <Route path="/Espio2" element={<Espio2/>}/>
            <Route path="/Espio3" element={<Espio3/>}/>
        </Routes>
    </div>
  )
}

export default Espio3