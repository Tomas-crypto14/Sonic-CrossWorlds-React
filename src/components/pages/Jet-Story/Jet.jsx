import React from 'react'
import HeaderJet from '../../organisms/HeaderJet'
import {Routes, Route} from 'react-router-dom'
import Jet2 from './Jet2'
import Jet3 from './Jet3'

const Jet = () => {
  return (
    <div id="container-race">
        <h2>Historia de Jet</h2>
        <h3>Velocidad alta(rápida)</h3>

        <p>
          Dodon Pa: El Crossworlds Grand Prix ha comenzado y la competencia arde con la presencia de los Babylon Rogues<br/>
          Jet: Je. Hablas de nosotros, no? Yo estoy aquí para ajustar cuentas de una vez por todas con Sonic The Hedgehog.<br/>
          Wave: Como siempre, eh? Veo que hay cosas que no cambian<br/>
          Storm: Sí, el jefe os va a echar papilla a todos.<br/>
          Jet: Storm, sabes que es un todos contra todos, no? También os voy a echar papilla.<br/>
          Storm: Ups!<br/>
          Dodon Pa: Bueno, pues prepárate para la siguiente carrera.<br/>
          Jet: Perfecto, allá voy!
        </p>

        <p>
          (Al ganar el Donpa Grand Prix)
        </p>

        <p>
          Jet: A eso llamáis competencia? Acabo de barrer a todos incluido al rival sin ningún problema.<br/>
          Wave: Jet, eso es porque estás en la primera clase de la competencia, cuanto más avanzes, más complciado será.<br/>
          Jet: Ah, ahora explica todo eso. Ok, gracias.
        </p>

        <p>
          (Al llegar al DeathEgg Grand Prix)
        </p>

        <p>
          Jet: Ja! Esos rivales no eran nada para enfrentarse a mí. A quién me enfrento ahora?<br/>
          Amy: Ah, eres tú, Jet.<br/>
          Jet: La amiga de Sonic? Tú también has llegado hasta aquí?<br/>
          Amy: Así es. Prepárate porque la Amy contra quién correrás será diferente al de la otra vez<br/>
          Jet: Pues deberías tener cuidado, no subestimes al Legendario Señor del Viento!
        </p>

        <p>
          (Al ganar el DeathEgg Grand Prix)
        </p>

        <p>
          Amy: No! A punto de llegar.<br/>
          Jet: Bien, toma ya! Paso a la siguiente clase!<br/>
          Sonic: Hola, Jet. Veo que le has dado un buen repaso a Amy.<br/>
          Jet: Ya verás, Sonic! Cuando llegue a lo más alto de todo, te derrotaré.<br/>
          Sonic: Ya veremos quién ríe el último.
        </p>

        <HeaderJet/>
        <Routes>
          <Route path="/Jet" element={<Jet/>}/>
          <Route path="/Jet2" element={<Jet2/>}/>
          <Route path="/Jet3" element={<Jet3/>}/>
        </Routes>
    </div>
  )
}

export default Jet