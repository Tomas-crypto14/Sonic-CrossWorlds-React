import React from 'react'
import HeaderStorm from '../../organisms/HeaderStorm'
import {Routes, Route} from 'react-router-dom'
import Storm2 from './Storm2'
import Storm3 from './Storm3'
const Storm = () => {
  return (
    <div id="container-race">
        <h2>Historia de Storm</h2>
        <h3>Velocidad alta(rápida)</h3>

        <p>
          Storm: Muy bien, hora de ganar la competencia y llevarme el premio a casa para compartirlo con el jefe<br/>
          Jet: Recuerda, Storm. No te contengas contra nadie, especialmente a tus compañeros<br/>
          Storm: Entendido, jefe.<br/>
          Wave: Estás loco, no?<br/>
          Jet: Qué? Tiene que ponerse las pilas.
        </p>

        <p>
          (Al ganar el Gran Premio Wisp)
        </p>

        <p>
          Storm: Jolín, esta competencia aparte de empezar, me ha puesto nervioso que nunca. Tendré que personalizar mi Extreme Gear antes de que
          empiece lo bueno. 
        </p>

        <p>
          (Al llegar al DeathEgg Grand Prix)
        </p>

        <p>
          Storm: Bien, paso a la última copa. Contra quién me enfrentaré?<br/>
          Wave: Contra mí, listillo.<br/>
          Storm: Contra Wave? Perfecto, aprovecharé este enfrentamiento para que pagues por sermonearme todo este tiempo.<br/>
          Wave: Ajjj! Tú mismo.
        </p>

        <p>
          (Al ganar el DeathEgg Grand Prix)
        </p>

        <p>
          Storm: Bien, he ganado a Wave, paso a la siguiente clase. Yuju!<br/>
          Wave: Maldita sea, por culpa de Jet que le dijo que no se contuviera, cuando le alcance se va a enterar<br/>
          Jet: Je! Ya me enfrentaré a ti, ya.
        </p>

        <HeaderStorm/>
        <Routes>
          <Route path="/Storm" element={<Storm/>}/>
          <Route path="/Storm2" element={<Storm2/>}/>
          <Route path="/Storm3" element={<Storm3/>}/>
        </Routes>
    </div>
  )
}

export default Storm