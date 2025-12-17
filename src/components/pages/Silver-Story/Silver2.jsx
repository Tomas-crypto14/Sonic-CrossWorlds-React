import React from 'react'
import HeaderSilver from '../../organisms/HeaderSilver'
import {Routes, Route} from 'react-router-dom'
import Silver from './Silver'
import Silver3 from './Silver3'
const Silver2 = () => {
  return (
    <div id="container-race">
        <h2>Historia de Silver</h2>
        <h3>Velocidad Sonic</h3>

        <p>
          (Al ganar el Wisp Grand Prix)
        </p>

        <p>
          Silver: Tanta competencia con esos trazados demuestra que Dodon Pa ha creado buena tecnología para estas simulaciones,
          pero tengo una duda. Porque no usó lugares que tengan que ver con mi futuro? Cuando algo pasa mal en el presente de Sonic,
          mi futuro está en ruinas, habrá planeado eso antes de que otro desastre se avecinaba en mi futuro? No, eso sería imposible.
        </p>

        <p>
          (Al llegar al Coral Grand Prix)
        </p>

        <p>
          Silver: Imposible, me tengo que enfrentar ahora a Metal Sonic?<br/>
          Metal Sonic: ...!<br/>
          Silver: No me queda más remedio que derrotarte.
        </p>

        <p>
          (Al ganar el Coral Grand Prix)
        </p>

        <p>
          Silver: Toma ya! Se siente, Metal!<br/>
          Metal Sonic: ...<br/>
          Shadow: Si que ha dolido, para ser una chatarra.
        </p>

        <p>
          (Al llegar al DeathEgg Grand Prix)
        </p>

        <p>
          Shadow: Hola, Silver, me alegro de verte.<br/>
          Silver: Shadow! Así que tú eres mi próximo oponente!<br/>
          Shadow: Así es, y esta vez no pienso andarme con chiquitas.
        </p>
        <HeaderSilver/>
        <Routes>
            <Route path="/Silver" element={<Silver/>}/>
            <Route path="/Silver2" element={<Silver2/>}/>
            <Route path="/Silver3" element={<Silver3/>}/>
        </Routes>
    </div>
  )
}

export default Silver2