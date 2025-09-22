import React from 'react'
import HeaderBig from '../../organisms/HeaderBig'
import {Routes, Route} from 'react-router-dom'
import Big2 from './Big2'
import Big3 from './Big3'
const Big = () => {
  return (
    <div id="container-race">
        <h2>Historia de Big</h2>
        <h3>Velocidad alta(rápida)</h3>
        <HeaderBig/>
        <Routes>
          <Route path="/Big" element={<Big/>}/>
          <Route path="/Big2" element={<Big2/>}/>
          <Route path="/Big3" element={<Big3/>}/>
        </Routes>
    </div>
  )
}

export default Big