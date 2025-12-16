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

       <p>
        (Al ganar la Calabaza Grand Prix)
       </p>

       <p>
        Tails: Tu Extreme Gear sigue siendo fascinante como siempre, Wave!<br/>
        Wave: Tampoco te quedes embobado, chiquillo, aún me queda por pasar a la siguiente clase ganando las otras copas que me faltan<br/>
        Storm: Para eso primero tendrás que enfrentarte a Amy, y sobretodo a esa hija de Eggman, Sage.<br/>
        Wave: Pues ya me aseguraré de que pierdan.
       </p>

       <p>
        (Al ganar el Coral Grand Prix)
       </p>

       <p>
        Amy: No! Qué ha pasado?<br/>
        Jet: Guau! Mira como vas ganando, tía.<br/>
        Sage: Las expectativas de Wave indica victoria de 80%, tengo que mejorar mi vehículo para derrotarla.
       </p>

       <p>
        (Al ganar el DeathEgg Grand Prix)
       </p>

       <p>
        Sage: Fracaso total!<br/>
        Wave: Me voy a la siguiente clase, a mí no me gana nadie.
       </p>

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