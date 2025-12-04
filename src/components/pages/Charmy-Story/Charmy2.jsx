import React from 'react'
import HeaderCharmy from '../../organisms/HeaderCharmy'
import {Routes, Route} from 'react-router-dom'
import Charmy from './Charmy'
import Charmy3 from './Charmy3'
const Charmy2 = () => {
  return (
    <div id="container-race">
        <h2>Historia de Charmy</h2>
        <h3>Velocidad Sonic</h3>

        <p>
          (Al ganar el Donpa Grand Prix)
        </p>

        <p>
          Charmy: Como loco gano, como loco gano!<br/>
          Knuckles: Madre mía, no me puedo creer que tengamos que aguantar con esa cosa en la pista.
          Nah, da igual porque lo voy a reventar en la siguiente copa<br/>
        </p>

        <p>
          (Al ganar el Wisp Grand Prix)
        </p>

        <p>
          Knuckles: Intolerable, como he podido perder contra él?<br/>
          Espio: Vaya, Charmy en esa clase se pone serio.<br/>
          Charmy: Nadie podrá contra mí, ni siquiera mis compañeros.
        </p>

        <p>
          (Al llegar al DeathEgg Grand Prix)
        </p>

        <p>
          Espio: Te estaba esperando, Charmy.<br/>
          Charmy: No puede ser, me voy a enfrentar a Espio, mi oportunidad de brillar!.<br/>
          Vector: Algo me dice que esto no va a acabar bien.
        </p>

        <p>
          (Al ganar el DeathEgg Grand Prix)
        </p>

        <p>
          Charmy: Toma yaaaaa, ganeeeeé, ganeeeeé!<br/>
          Espio: Jum, le he subestimado.
          Charmy: A la siguiente clase, yupiiiiii!<br/>
          Vector: Esto se va a poner feo.
        </p>

        <HeaderCharmy/>
        <Routes>
            <Route path="/Charmy" element={<Charmy/>}/>
            <Route path="/Charmy2" element={<Charmy/>}/>
            <Route path="/Charmy3" element={<Charmy3/>}/>
        </Routes>
    </div>
  )
}

export default Charmy2