import React from 'react'
import HeaderBig from '../../organisms/HeaderBig'
import {Routes, Route} from 'react-router-dom'
import Big from './Big'
import Big2 from './Big2'
const Big3 = () => {
  return (
    <div id="container-race">
        <h2>Historia de Big</h2>
        <h3>Velocidad SuperSonic</h3>
        
        <HeaderBig/>
        <Routes>
            <Route path="/Big" element={<Big/>}/>
            <Route path="/Big2" element={<Big2/>}/>
            <Route path="Big3" element={<Big3/>}/>
        </Routes>
    </div>
  )
}

export default Big3