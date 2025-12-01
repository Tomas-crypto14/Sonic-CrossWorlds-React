import React from 'react'
import HeaderOmega from '../../organisms/HeaderOmega'
import {Routes, Route} from 'react-router-dom'
import Omega from './Omega'
import Omega3 from './Omega3'
const Omega2 = () => {
  return (
    <div id="container-race">
        <h2>Historia de Omega</h2>
        <h3>Velocidad Sonic</h3>

        <p>
          (Al ganar el Wisp Grand Prix)
        </p>

        <p>
          Omega: Circuitos muy reconocidos desde las aventuras que tenía con Shadow.<br/>
          Shadow: Parece que Omega se está acostumbrando a la comopetencia, algunos de esos circuitos
          le traen recuerdos de nuestras aventuras.<br/>
          Rouge: Cómo si no es el torneo legendario de carreras.
        </p>

        <p>
          (Al llegar al Coral Grand Prix)
        </p>

        <p>
          Metal Sonic: ...!<br/>
          Omega: Siguiente rival: Metal Sonic!
        </p>

        <p>
          (Al ganar el Coral Grand Prix)
        </p>
        
        <p>
          Dr.Eggman: Pero bueno, Metal Sonic. Como te han podido ganar?<br/>
          Omega: Objetivo eliminado.
        </p>

        <p>
          (Al llegar al DeathEgg Grand Prix)
        </p>

        <p>
          Omega: Objetivo localizado: Rouge<br/>
          Rouge: Eh, no te pases de listo.
        </p>

        <p>
          (Al ganar el DeathEgg Grand Prix)
        </p>

        <p>
          Dodon Pa: El robot de acero pasa a la siguiente clase.<br/>
          Omega: Estrategia para ganar la siguiente y última clase. Mejoira de vehículo y rendimiento.
        </p>
        <HeaderOmega/>
        <Routes>
            <Route path="/Omega" element={<Omega/>}/>
            <Route path="/Omega2" element={<Omega2/>}/>
            <Route path="/Omega3" element={<Omega3/>}/> 
        </Routes>
    </div>
  )
}

export default Omega2