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

        <p>
          Espio: Listo para la carrera, mi emprendimiento ninja me indica que debo ganar esta competencia.<br/>
          Cream: Oye, Espio. Cuando termine la competencia y ganes, que harás?<br/>
          Espio: Todo debido a su tiempo. Cream. Mi primer rival es Knuckles.<br/>
          Knuckles: Espio, cuanto tiempo! Listo para una paliza?<br/>
          Espio: Jeje, tú lo has querido.
        </p>

        <p>
          (Al ganar el Donpa Grand Prix)
        </p>

        <p>
          Espio: Qué seas fuerte no significa que puedas ganarme en una carrera, Knuckles.<br/>
          Knuckles: Si, lo admito, al fin de cuentas me has ganado.
        </p>

        <p>
          (Al llegar al Crystal Grand Prix)
        </p>

        <p>
          Espio: Así que me enfrento a Jet, eh?<br/>
          Vector: Espio, sobre cómo corre Jet...<br/>
          Espio: No necesito saberlo, quiero derrotarlo en igualdad de condiciones<br/>
          Jet: Je. menudo orgullo ninja que tienes. Venga, a la carrera!
        </p>

        <p>
          (Al ganar el Crystal Grand Prix)
        </p>

        <p>
          Jet: Maldita sea! He perdido!<br/>
          Espio: Je, derrotado en igualdad de condiciones.<br/>
          Cream: Que bien, Sr.Espio. Si ganas la siguiente, pasas a la siguiente clase.<br/>
          Zavok: No por mucho, primero tendrás que derrotar a Zazz.<br/>
          Zazz: Efectivamente, he conseguido las seis disponibles, dirigiendome a la última, a ver quién me gana.<br/>
          Vector: Ese tío? Es que no aprende.<br/>
          Espio: No os preocupeis, es fácil ganarle.<br/>
          Zavok: Ya lo veremos, después de estar en el Primer Grand Prix por Dodon Pa, le enseñé a Zazz algunas técnicas de conducción,
          no tienes ninguna posiblidad.<br/>
          Zazz: Ya lo has oído, cara de camaleón. Voy a enseñarte quién manda aquí! Jia, jia!
        </p>

        <p>
          (Al ganar el DeathEgg Grand Prix)
        </p>

        <p>
          Zazz: No! Eso no tenía que pasar!<br/>
          Espio: Je, he ganado.<br/>
          Dodon Pa: El camaleón pasa a la siguiente clase.
        </p>
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