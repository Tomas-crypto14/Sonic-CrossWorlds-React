import React from 'react'
import HeaderZavok from '../../organisms/HeaderZavok'
import {Routes, Route} from 'react-router-dom'
import Zavok from './Zavok'
import Zavok2 from './Zavok2'

const Zavok3 = () => {
  return (
    <div id="container-race">
        <h2>Historia de Zavok</h2>
        <h3>Velocidad SuperSonic</h3>

        <HeaderZavok/>
        <Routes>
            <Route path="/Zavok" element={<Zavok/>}/>
            <Route path="/Zavok2" element={<Zavok2/>}/>
            <Route path="/Zavok3" element={<Zavok3/>}/>
        </Routes>
    </div>
  )
}

export default Zavok3