import React from 'react'
import HeaderBlaze from '../../organisms/HeaderBlaze'
import {Routes, Route} from 'react-router-dom'
import Blaze from './Blaze'
import Blaze3 from './Blaze3'
const Blaze2 = () => {
  return (
    <div id="container-race">
        <h2>Historia de Blaze</h2>
        <h3>Velocidad Sonic</h3>

        <p>
          (Al ganar el Calabaza Grand Prix)
        </p>

        <p>
          Blaze: Bien, cuatro copas conseguidas.<br/>
          Sonic: Hola, Blaze! Sorpendida de verme?<br/>
          Blaze: Eh, Sonic! Me alegro de verte, como va por aquí?<br/>
          Sonic: Ah, nada, diciendote que me enfrentaré a ti en el Coral Grand Prix, te veo en la línea de meta.<br/>
          Blaze: Je, ese Sonic.
        </p>

        <p>
          (Al ganar el Coral Grand Prix)
        </p>

        <p>
          Sonic: He... perdido? Vaya, quizá si eres mejor y muy buena corredora como yo.<br/>
          Blaze: Sonic.<br/>
          Sonic: Te voy a decir algo, si alguna vez Eggman o Zavok planean hacer de las suyas en tu mundo, estaré aquí para detenerlos.
          Puedes contar con ello.
        </p>

        <p>
          (Al llegar al DeathEgg Grand Prix)
        </p>

        <p>
          Silver: Estoy listo para enfrentarme a ti, Blaze!<br/>
          Blaze: Vaya, ahora cara a cara contra Silver? Eso me gusta más.
        </p>

        <p>
          (Al ganar el DeathEgg Grand Prix)
        </p>

        <p>
          Silver: No me lo puedo creer, pero fue buena carrera, Blaze! Suerte en la siguiente clase!<br/>
          Blaze: Gracias!
        </p>

        <HeaderBlaze/>
        <Routes>
            <Route path="/Blaze" element={<Blaze/>}/>
            <Route path="/Blaze2" element={<Blaze2/>}/>
            <Route path="/Blaze3" element={<Blaze3/>}/>
        </Routes>
    </div>
  )
}

export default Blaze2