import React from 'react'
import HeaderEggPawn from '../../organisms/HeaderEggPawn'
import {Routes, Route} from 'react-router-dom'
import EggPawn2 from './EggPawn2'
import EggPawn3 from './EggPawn3'
const EggPawn = () => {
  return (
    <div id="container-race">
        <h2>Historia de EggPawn</h2>
        <h3>Velocidad alta(rápida)</h3>

        <p>
          Egg Pawn: ~...!<br/>
          Eggman: No sé porque han invitado a una de mis creaciones, pero espero que valga la pena.<br/>
          Sage: Según mis datos sobre él, parece que es como si fuera un robot experimentado en técncias de conducción, si gano todas
          las copas hasta llegar a la DeathEgg Grand Prix, podré luchar contra él para ponerlo a prueba.<br/>
          Eggman: Buena idea, mi niña, consiedralo como una orden de tu papaíto.<br/>
          Sage: Entendido, padre.
        </p>

        <p>
          (Al llegar al DeathEgg Grand Prix)
        </p>

        <p>
          Egg Pawn: ...!<br/>
          Sage: Parece que al final nos encontramos, mi padre me ha ordenado que me enfrente a ti en esta copa, compite contra mí.<br/>
          Egg Pawn: ...!
        </p>

        <p>
          (Al ganar el DeathEgg Grand Prix)
        </p>

        <p>
          Sage: Superando las expectativas, este robot no es normal. Pero que ha creado mi padre?<br/>
          Dodon Pa: Jojojojo, eso sí que nadie se lo esperaba, eh? Este robot ha pasado sin problemas a la siguiente clase.
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

export default EggPawn