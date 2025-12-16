import React from 'react'
import HeaderStorm from '../../organisms/HeaderStorm'
import {Routes, Route} from 'react-router-dom'
import Storm from './Storm'
import Storm3 from './Storm3'
const Storm2 = () => {
  return (
    <div id="container-race">
        <h2>Historia de Storm</h2>
        <h3>Velocidad Sonic</h3>

        <p>
          (Al ganar el Grand Prix Calabaza)
        </p>

        <p>
          Storm: Madre mía, esa carrera se complica más y más, desde que pusieron más locura a los circuitos de CrossWorld
          he tenido que cerrar más curvas que nunca, y además, seguro que me enfrento al jefe antes de pasar a la siguiente clase.<br/>
          Jet: Storm va mejorando, sin embargo, le falta materia gris si quiere superar los siguientes obstáculos.<br/>
          Wave: Tú sabes que igual deberías preocuparte por él, no?<br/>
          Jet: Qué? Un jefe orgulloso no haría eso, verdad? Verdad?
        </p>

        <p>
          (Al llegar el DeathEgg Grand Prix)
        </p>

        <p>
          Jet: Buenas, Storm, te estaba esperando!<br/>
          Storm: Ay, no. Me tengo que enfrentar al jefe!<br/>
          Jet: Más te vale no dejarme de mala manera, Storm! Yo seré que pase a la siguiente clase!
        </p>

        <p>
          (Al ganar el DeathEgg Grand Prix)
        </p>

        <p>
          Jet: No me puedo creer, derrotado contra... contra...<br/>
          Storm: Me voy a la siguiente clase, hasta otra, carahuevos!<br/>
          Jet: Grrr! Maldito seas, Storm!
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

export default Storm2