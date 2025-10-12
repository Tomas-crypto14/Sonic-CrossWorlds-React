import React from 'react'
import HeaderShadow from '../../organisms/HeaderShadow'
import {Routes, Route} from 'react-router-dom'
import Shadow2 from './Shadow2'
import Shadow3 from './Shadow3'

const Shadow = () => {
  return (
    <div id="container-race">
        <h2>Historia de Shadow</h2>
        <h3>Velocidad alta(rápida)</h3>

        <p>
          Dodon Pa: El Crossworlds Grand Prix está a punto de comenzar. Shadow, como te sientes?<br/>
          Shadow: Listo para correr y listo para ganar.<br/>
          Dodon Pa: Perfecto, porque primero te enfrentarás a Metal Sonic.<br/>
          Metal Sonic: ...!<br/>
          Sage: Ha dicho "Preparate para ser humillado"<br/>
          Shadow: Jum! No me esperaba que la hija del doctor sea una traductora por el codigo binario. En fin, me servirás como calentamiento, vamos!
        </p>

        <p>
          (Al ganar el Grand Prix Donpa)
        </p>

        <p>
          Metal Sonic: ...!<br/>
          Shadow: Parece que su memoria ha quedado humillada. Espero que a la próxima me sirvas de algo digno<br/>
          Dr.Eggman: Maldito seas, Shadow. La próxima vez no se te será tan fácil.<br/>
          Sonic: Así se hace!<br/>
          Shadow: Jum!
        </p>

        <p>
          (Al llegar a la Crystal Grand Prix)
        </p>

        <p>
          Shadow: Que me voy a enfrentar a Rouge? Bromeas, no?<br/>
          Dodon Pa: Jojojojo, no es broma, chaval. Ella ha ganado el resto de copas por ahora al igual que tú y está lista para enfrentarse a ti<br/>
          Shadow: Que se le va a hacer, acabemos rápido.
        </p>

        <p>
          (Al ganar la Crystal Grand Prix)
        </p>

        <p>
          Shadow: Buena carrera, Rouge. No me has dejado ni respirar.<br/>
          Rouge: Ni tú tampoco, Shadow. No es la primera vez que competimos en una carrera de verdad. Suerte en la siguiente copa.<br/>
          Shadow: Tú sigue corriendo igualmente. Mmm?<br/>
          Metal Sonic: ...!!!<br/>
          Shadow: Tú otra vez? Qué quieres? Si Sage estuviera aquí, traduciría sin problema.<br/>
          Metal Sonic: ...!<br/>
          Shadow: No me lo digas, has ganado el resto de copas y has venido a la última 
          para derrotarme en una revancha y pasar a la siguiente clase?. Tú mismo, pero te lo advierto, no voy a andarme con tonterías<br/>
        </p>

        <p>
          (Al ganar la DeathEgg Grand Prix)
        </p>

        <p>
          Shadow: Vaya, guau, esta vez casi me superas, has mejorado mucho.<br/>
          Sage: Así es, Metal ha estado practicando sus trucos de carrera para derrotarte en la DeathEgg Grand Prix<br/>
          Shadow: Parece que me has arrancado la moral, en la siguiente clase voy a ir a por todas. Y Sage, espero que nos enfrentemos
          muy pronto<br/>
          Sage: Como desees, Shadow.
        </p>
        <HeaderShadow/>
        <Routes>
          <Route path="/Shadow" element={<Shadow/>}/>
          <Route path="/Shadow2" element={<Shadow2/>}/>
          <Route path="/Shadow3" element={<Shadow3/>}/>
        </Routes>
    </div>
  )
}

export default Shadow