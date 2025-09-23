import React from 'react'
import HeaderShadow from '../../organisms/HeaderShadow'
import {Routes, Route} from 'react-router-dom'
import Shadow from './Shadow'
import Shadow3 from './Shadow3'

const Shadow2 = () => {
  return (
    <div id="container-race">
        <h2>Historia de Shadow</h2>
        <h3>Velocidad Sonic</h3>

        <HeaderShadow/>
            <Routes>
                <Route path="/Shadow" element={<Shadow/>}/>
                <Route path="/Shadow2" element={<Shadow2/>}/>
                <Route path="/Shadow3" element={<Shadow3/>}/>
            </Routes>
    </div>
  )
}

export default Shadow2