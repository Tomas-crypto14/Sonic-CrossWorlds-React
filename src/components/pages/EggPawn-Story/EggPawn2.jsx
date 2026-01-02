import React from 'react'
import HeaderEggPawn from '../../organisms/HeaderEggPawn'
import {Routes, Route} from 'react-router-dom'
import EggPawn from './EggPawn'
import EggPawn3 from './EggPawn3'
const EggPawn2 = () => {
  return (
    <div id="container-race">
        <h2>Historia de EggPawn</h2>
        <h3>Velocidad Sonic</h3>

        <p>
          (Al llegar al Wisp Grand Prix)
        </p>

        <p>
          Jet: En serio, me voy a enfrentar a ese Egg Pawn? Espero que no valga la pena, no quiero un desafío aburrido.<br/>
          Egg Pawn: ...
        </p>

        <p>
          (Al ganar el Wisp Grand Prix)
        </p>

        <p>
          Jet: En serio? He perdido contra ese maldito robot? Arrghh, no me lo puedo creer.
        </p>

        <p>
          (Al llegar al DeathEgg Grand Prix)
        </p>

        <p>
          Metal Sonic: ...!<br/>
          Egg Pawn: ...!
        </p>

        <p>
          (Al ganar el DeathEgg Grand Prix)
        </p>

        <p>
          Dodon Pa: Después de esa carrera robótica, el ganador es el Egg Pawn, que pasa a la siguiente clase.
        </p>

        <HeaderEggPawn/>
        <Routes>
            <Route path="/EggPawn" element={<EggPawn/>}/>
            <Route path="/EggPawn2" element={<EggPawn2/>}/>
            <Route path="/EggPawn3" element={<EggPawn3/>}/>
        </Routes>
    </div>
  )
}

export default EggPawn2