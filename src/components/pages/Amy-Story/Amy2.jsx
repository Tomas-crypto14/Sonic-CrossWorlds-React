import React from 'react'
import HeaderAmy from '../../organisms/HeaderAmy'
import {Routes, Route} from 'react-router-dom'
import Amy from './Amy'
import Amy3 from './Amy3'
const Amy2 = () => {
  return (
    <div id="container-race">
        <h2>Historia de Amy</h2>
        <h3>Velocidad Sonic</h3>

        <HeaderAmy/>
        <Routes>
          <Route path="/Amy" element={<Amy/>}/>
          <Route path="/Amy2" element={<Amy2/>}/>
          <Route path="/Amy3" element={<Amy3/>}/>
        </Routes>
    </div>
  )
}

export default Amy2