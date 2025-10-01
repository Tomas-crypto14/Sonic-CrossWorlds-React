import React from 'react'
import HeaderAmy from '../../organisms/HeaderAmy'
import {Routes, Route} from 'react-router-dom'
import Amy2 from './Amy2'
import Amy3 from './Amy3'
const Amy = () => {
  return (
    <div id="container-race">
        <h2>Historia de Amy</h2>
        <h3>Velocidad alta(rápida)</h3>

        <p>
          Amy: Bien, estoy lista para ganar esta competencia y llevarme el dinero a casa.<br/>
          Storm: Anda, mira, si es la chica de antes.<br/>
          Amy: Aj! El de los Babylon Rogues. Se pude saber que haces aquí?<br/>
          Storm: De parte del jefe. Te quiere dar suerte debido a que te medirás conmigo tarde o temprano. O eso ha dicho él, creo.<br/>
          Amy: Eso quiere decir que más adelante tendré que enfrentarme a Storm. Bueno, me llaman, así que, a competir.
        </p>

        <p>
          (Al ganar a Storm en el Boom boo Grand Prix)
        </p>

        <p>
          Storm: No me lo puedo creer, he perdido. Jefe, puedo explicarlo, intenté ganar y...<br/>
          Jet: Sin comentarios, vamonos.<br/>
          Storm: Grrrr! Ya verás, niñata. Más adelante te enfrentarás a mi jefe, te va a partir de lo lindo.<br/>
          Amy: Ay, que quejica es.<br/>
          Silver: No le escuches, Amy.<br/>
          Amy: Ahhh, Silver! Como te va?<br/>
          Silver: Muy bien, ya gané el Gran Premio Calabaza, dentro de poco llegaré a la siguiente copa, puede que nos veamos allí. Bueno,
          hasta la siguiente carrera.
          Amy: Ya lo veremos, Silver. hasta luego. Y yo que pensaba que la competencia iba a ser más fácil.
        </p>

        <p>
          (Al ganar a Silver en el Crystal Grand Prix)
        </p>

        <p>
          Silver: Increíble, acabo de perder contra Amy!? Bueno, no me lo esperaba, pero te has adelantado a mis movimientos.
          Amy: Buena carrera, Silver. En fin, me preparo para clasificarme.<br/>
          Silver: Espera! Oí que Big llegó a la Death Egg Grand Prix, lo que significa que te enfrentarás a él.<br/>
          Amy: Perfecto, gracias por el aviso, Silver!
        </p>

        <p>
          (Al ganar a Big en la DeathEgg Grand Prix)
        </p>

        <p>
          Big: Que mal. Amy me ha ganado.<br/>
          Amy: Se siente, Big. La victoria es mía.<br/>
          Dodon Pa: Perfecto, pasas a la siguiente clase.
        </p>
        <HeaderAmy/>
        <Routes>
          <Route path="/Amy" element={<Amy/>}/>
          <Route path="/Amy2" element={<Amy2/>}/>
          <Route path="/Amy3" element={<Amy3/>}/>
        </Routes>
    </div>
  )
}

export default Amy