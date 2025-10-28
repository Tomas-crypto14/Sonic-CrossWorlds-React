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

        <p>
          (Al llegar al Wisp Grand Prix)
        </p>

        <p>
          Knuckles: Vaya, vaya, la princesa de Sonic va a tener que enfrentarse a mí, cuidado por donde esquivas mis golpes.<br/>
          Amy: Vaya, vayha, el equidna rojo ha decidido ponerse serio, prepárate porque no te lo voy a poner nada fácil.<br/>
        </p>

        <p>
          (Al ganar el Wisp Grand Prix)
        </p>

        <p>
          Knuckles: Grrr! Otra derrota, no me lo puedo creer!<br/>
          Amy: Creo que casi lo consigues,<br/>
          Wave: Así que el que puede contra Storm no puede derrotar a una chiquilla?<br/>
          Amy: Ah, eres tú, Wave.<br/>
          Wave: He conseguido las otras dos copas posteriores mientras tú corrías contra ese equidna, 
          ya nos veremos en el Coral Grand Prix.<br/>
          Amy: Esos Babylon no han cambiado para nada, tendré que tener cuidado cuando me enfrente a ella.
        </p>

        <p>
          (Al ganar el Coral Grand Prix)
        </p>

        <p>
          Wave: Maldición! Perdí contra ella? No!<br/>
          Amy: Sí que era difícil de ganarla, a seguir compitiendo.<br/>
          Jet: Ajjjj! Estoy rodeado de tontos. En la siguiente clase me encargaré de ella.
        </p>

        <p>
          (Al llegar al DeathEgg Grand Prix)
        </p>

        <p>
          Amy: A ver quién será mi rival ahora.<br/>
          Cream: Hola, Amy!<br/>
          Amy: Cream! Correrás conmigo esta vez?<br/>
          Cream: Así es, no me voy a contener, prepárate para que te gane<br/>
          Amy: Jejeje, ya lo veremos.
        </p>

        <p>
          (Al ganar el DeathEgg Grand Prix)
        </p>

        <p>
          Cream: Ay, he perdido. Felicidades, señora Amy!<br/>
          Amy: Gracias, Cream! Ahora, a por la siguiente clase.
        </p>
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