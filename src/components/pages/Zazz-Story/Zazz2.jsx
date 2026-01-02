import React from 'react'
import HeaderZazz from '../../organisms/HeaderZazz'
import {Routes, Route} from 'react-router-dom'
import Zazz from './Zazz'
import Zazz3 from './Zazz3'
const Zazz2 = () => {
  return (
    <div id="container-race">
        <h2>Historia de Zazz</h2>
        <h3>Velocidad Sonic</h3>

        <p>
          (Al ganar el Wisp Grand Prix)
        </p>

        <p>
          Zazz: Nyaaaah, esta competencia es una chorrada. No hay nadie a mi altura.<br/>
        </p>

        <p>
          (Al llegar el Coral Grand Prix)
        </p>

        <p>
          Big: Hola, señor rosa, me voy a enfrentar a ti ahora.<br/>
          Zavok: He visto a ese hombre antes, se llama Big, me pregunto si esta vez está en la competencia por dinero.<br/>
          Zazz: Nah, da igual, derrotaré al oponente, sea fuerte o gordo.
        </p>

        <p>
          (Al ganar el Coral Grand Prix)
        </p>

        <p>
          Big: No puede ser, he perdido.<br/>
          Zazz: Toma ya, no me gana nadie!
        </p>

        <p>
          (Al llegar al DeathEgg Grand Prix)
        </p>

        <p>
          Zazz: Veamos, quién será el siguiente oponente que me impide llegar a la siguiente clase? Voy a hacerle picadillo!<br/>
          Zavok: Aquí lo tienes. Yo!<br/>
          Zazz: Pero Zavok! Vas a luchar contra mí?<br/>
          Zavok: Por supuesto, además, no creas que te lo hago para liderar el grupo. Me preocupa tu futuro, Zazz.<br/>
          Zazz: Pues más para mí, nuestro enfrentamineto destrozará a toda la carretera.
        </p>

        <p>
          (Al ganar el DeathEgg Grand Prix)
        </p>

        <p>
          Zazz: He ganado, he ganado!!! Toma yaaa!!!
          Zavok: Enhorabuena, has demostrado tener control, justicia y sobretodo victoria, suerte en la siguiente clase.
        </p>

        <HeaderZazz/>
        <Routes>
            <Route path="/Zazz" element={<Zazz/>}/>
            <Route path="/Zazz2" element={<Zazz2/>}/>
            <Route path="/Zazz3" element={<Zazz3/>}/>
        </Routes>
    </div>
  )
}

export default Zazz2