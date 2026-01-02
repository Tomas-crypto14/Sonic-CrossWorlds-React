import React from 'react'
import HeaderMetalSonic from '../../organisms/HeaderMetalSonic'
import {Routes, Route} from 'react-router-dom'
import MetalSonic from './MetalSonic'
import MetalSonic3 from './MetalSonic3'
const MetalSonic2 = () => {
  return (
    <div id="container-race">
        <h2>Historia de Metal Sonic</h2>
        <h3>Velocidad de Sonic</h3>

        <p>
          (Al llegar el Wisp Grand Prix)
        </p>

        <p>
          Egg Pawn: !...!<br/>
          Sage: Es algo raro que tengas que enfrentarte a este Egg Pawn, en fin, suerte.
        </p>

        <p>
          (Al ganar el Wisp Grand Prix)
        </p>

        <p>
          Sage: Su aceleración de su vehículo podía con las curvas de estos circuitos, debió costarte mucho.
          Metal Sonic: ...!
        </p>

        <p>
          (Al llegar al DeathEgg Grand Prix)
        </p>

        <p>
          Eggman: Bueno, Metal Sonic, llegó la hora de que compitamos, más te vale no contenerte!<br/>
          Sage: Según mis datos, querías traicionar a mi padre para conseguir datos de Sonic y sus amigos, más te vale no tener rencor
          si quieres ganar la carrera.<br/>
          Metal Sonic: ...!
        </p>

        <p>
          (Al ganar el DeathEgg Grand Prix)
        </p>

        <p>
          Eggman: No me lo puedo creer, como he perdido contra ti, Metal?<br/>
          Metal Sonic: ...!<br/>
          Eggman: Menos mal que no hablas, podría haber sido peor.
        </p>

        <HeaderMetalSonic/>
        <Routes>
            <Route path="/MetalSonic" element={<MetalSonic/>}/>
            <Route path="/MetalSonic2" element={<MetalSonic2/>}/>
            <Route path="/MetalSonic3" element={<MetalSonic3/>}/>
        </Routes>
    </div>
  )
}

export default MetalSonic2