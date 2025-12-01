import React from 'react'
import HeaderEspio from '../../organisms/HeaderEspio'
import {Routes, Route} from 'react-router-dom'
import Espio from './Espio'
import Espio3 from './Espio3'
const Espio2 = () => {
  return (
    <div id="container-race">
        <h2>Historia de Espio</h2>
        <h3>Velocidad Sonic</h3>

        <p>
          (Al ganar el Wisp Grand Prix)
        </p>

        <p>
          Espio: Esa carrera está siendo muy peligrosa pero entretenida, los corredores mejoran su rendimiento
          de conducción para ganar esa competencia cueste lo que cueste. Sin embargo, algunas pistas
          pueden hacer que los corredores aprovechen sus tácticas de atajo, tendré que ser más cauteloso<br/>
        </p>

        <p>
          (Al llegar al Coral Grand Prix)
        </p>

        <p>
          Charmy: Hola, Espio. Me enfrentaré a ti ahora mismo, jijijiji!<br/>
          Espio: No me puedo creer que me haya tocado enfrentarme a Charmy, esto va a ser más difícil de lo que esperaba.
        </p>

        <p>
          (Al ganar el Coral Grand Prix)
        </p>

        <p>
          Charmy: Jo! Tenía muchas de ganar. Ya verás cuando el jefe te dé su merecido.<br/>
          Espio: Más adelante tendré que enfrentarme a Vector? Esto se pone cada vez más interesante.
        </p>

        <p>
          (Al llegar al DeathEgg Grand Prix)
        </p>

        <p>
          Vector: Vaya, Espio, mi fiel amigo. No me esperaba verte en este enfrentamiento para pasar a la siguiente clase.<br/>
          Espio: Espero que estés preparado, Vector. No tendré piedad de ti, aunque seas mi jefe.<br/>
          Vector: Lo mismo te digo a ti, como mi fiel ayudante.
        </p>

        <p>
          (Al ganar el DeathEgg Grand Prix)
        </p>

        <p>
          Espio: Conseguido!<br/>
          Vector: No me puedo creer que me haya derrotado un miembro de mi agencia de detectives, debo admitir que estoy
          orgulloso de él, suerte en la siguiente clase.<br/>
          Espio: Gracias.
        </p>

        <HeaderEspio/>
        <Routes>
            <Route path="/Espio" element={<Espio/>}/>
            <Route path="/Espio2" element={<Espio2/>}/>
            <Route path="/Espio3" element={<Espio3/>}/>
        </Routes>
    </div>
  )
}

export default Espio2