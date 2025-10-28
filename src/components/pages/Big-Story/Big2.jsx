import React from 'react'
import HeaderBig from '../../organisms/HeaderBig'
import {Routes, Route} from 'react-router-dom'
import Big from './Big'
import Big3 from './Big3'
const Big2 = () => {
  return (
    <div id="container-race">
        <h2>Historia de Big</h2>
        <h3>Velocidad Sonic</h3>

        <p>
          (Al terminar el Donpa y Wisp Grand Prix)
        </p>

        <p>
          Big: Esta carrera se está complicando mucho, lo sé por las acrobacias y tácticas
          que hace la gente<br/>
          Amy: Es por eso que no puedes desconcentrarte ni un segundo durante la carrera, Big!<br/>
          Big: Así que si me concentro durante la carrera, ganaré seguro?<br/>
          Amy: Sólo si te esfuerzas, Big.
        </p>

        <p>
          (Al llegar al DeathEgg Grand Prix)
        </p>

        <p>
          Vector: Hola, Big! Listo para luchar contra mí?<br/>
          Big: Anda, me voy a enfrentar al cocodrilo, buena suerte.
        </p>

        <p>
          (Al ganar el DeathEgg Grand Prix)
        </p>

        <p>
          Big: Bieeeen! Voy a la siguiente clase!<br/>
          Vector: Este tío es de armas tomar, en la velocidad Super Sonic será complicado que le ganen.
        </p>
        <HeaderBig/>
        <Routes>
            <Route path="/Big" element={<Big/>}/>
            <Route path="/Big2" element={<Big2/>}/>
            <Route path="/Big3" element={<Big3/>}/>
        </Routes>
    </div>
  )
}

export default Big2