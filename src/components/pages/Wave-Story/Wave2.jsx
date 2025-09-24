import React from 'react'
import HeaderWave from '../../organisms/HeaderWave'
import {Routes, Route} from 'react-router-dom'
import Wave from './Wave'
import Wave3 from './Wave3'
const Wave2 = () => {
  return (
    <div id="container-race">
       <h2>Historia de Wave</h2>
       <h3>Velocidad Sonic</h3>

        <HeaderWave/>
        <Routes>
            <Route path="/Wave" element={<Wave/>}/>
            <Route path="/Wave2" element={<Wave2/>}/>
            <Route path="/Wave3" element={<Wave3/>}/>
        </Routes>

    </div>
  )
}

export default Wave2