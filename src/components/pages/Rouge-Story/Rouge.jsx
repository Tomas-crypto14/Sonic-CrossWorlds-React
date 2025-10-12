import React from 'react'
import HeaderRouge from '../../organisms/HeaderRouge'
import {Routes, Route} from 'react-router-dom'
import Rouge2 from './Rouge2'
import Rouge3 from './Rouge3'
const Rouge = () => {
  return (
    <div id="container-race">
        <h2>Historia de Rouge</h2>
        <h3>Velocidad alta(rápida)</h3>

        <p>
          Rouge: Que bien que me hayan invitado al Crossworlds Grand Prix, conseguiré aqueella tesorería de joyas y con el millón de dolares
          y las Chaos Emeralds, esto va a ser pan comido.
        </p>

        <p>
          (Al ganar el Grand Prix Calabaza)
        </p>

        <p>
          Vector: Eh, Rouge. Te podemos hacer una pregunta?
          Rouge: Si es por el dinero para compartir, olvidadlo, será todo mío.<br/>
          Espio: Una de las razones por la que estamos aquí es porque tenemos cuentas pendientes con los encargos de nuestra agencia<br/>
          Rouge: Y qué? Cada murcielago debe tener sus aventuras, no?<br/>
          Vector: Vaya, creo que va a ser más difícil de lo que parecía.<br/>
          Charmy: Y mira a mí, con lo que me había esforzado.
        </p>

        <p>
          (Al llegar a la Crystal Grand Prix)
        </p>

        <p>
          Rouge: Pero mira a quien tenemos aquí, si es la mecánica de los Babylon Rogues.<br/>
          Wave: Tú! Jet y yo tenemos cuentas pendientes contigo de la que te vamos a hablar<br/>
          Rouge: No se de qué me habláis, pero a ver, vamos a competir o no?
        </p>

        <p>
          (Al ganar la Crystal Grand Prix)
        </p>

        <p>
          Rouge: Mira tú que bien, parece que me he hecho con la victoria.<br/>
          Wave: Arrghh! No, por qué?<br/>
          Rouge: Veamos, contra quién me enfrentaré en la última copa para pasar a la sigueinte clase? Omega?!
        </p>

        <p>
          Omega: Derrotado por Rouge, se recomienda más entrenamiento para la próxima!
          Rouge: Jajaja, Omega! Mira que eres así. Bueno, me voy a la siguiente clase! A por el dinero del millón!
        </p>
        <HeaderRouge/>
        <Routes>
          <Route path="/Rouge" element={<Rouge/>}/>
          <Route path="/Rouge2" element={<Rouge2/>}/>
          <Route path="/Rouge3" element={<Rouge3/>}/>
        </Routes>
    </div>
  )
}

export default Rouge