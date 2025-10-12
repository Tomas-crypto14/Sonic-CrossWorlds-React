import React from 'react'
import HeaderZavok from '../../organisms/HeaderZavok'
import {Routes, Route} from 'react-router-dom'
import Zavok2 from './Zavok2'
import Zavok3 from './Zavok3'
const Zavok = () => {
  return (
    <div id="container-race">
        <h2>Historia de Zavok</h2>
        <h3>Velocidad alta(rápida)</h3>

        <p>
          Zavok: Esa es la competencia del Crossworlds Grand Prix? Aquí haremos una base y planearemos como ganar a Sonic y los demás.<br/>
          Zazz: Sí! Yo también quiero destrozar algo!<br/>
          Zavok: Eso es lo que me esperaba de ti, Zazz. Siempe atacando, sin importar cuál es el objetivo.<br/>
          Zazz: Ah, sí? Pués mandame el objetivo y lo destrozaré! Muajajaja!<br/>
          Zavok: También ganaremos esta competencia para ganarnos las Chaos Emeralds!
        </p>

        <p>
          (Al ganar el Coral Grand Prix)
        </p>

        <p>
          Zavok: Esta competencia no es nada dificil, puedo ganarla con los ojos cerrados.<br/>
          Eggman: Pues más te vale tener suerte. Te enfrentarás a Metal Sonic en la siguiente carrera.<br/>
          Zavok: Vaya, vaya, si es el buen doctor. Hace tiempo que no te veía, cómo estás?<br/>
          Eggman: Pues mira tú, yo intentando ganar la competencia para conseguir el dinero. Veo que tú estás por otros planes.<br/>
          Zavok: Bien sabido, Eggman. Zavok es poderoso!<br/>
          Eggman: Espero que me lo demuestres cuando te enfrentes a Metal Sonic.
        </p>
        
        <p>
          (Al ganar el Crystal Grand Prix)
        </p>

        <p>
          Zavok: Ja! Un robot menos en mi camino hacia la gloria.<br/>
          Dr.Eggman: Aghhh! No me esperaba que Zavok pudiera derrotar a Metal.<br/>
          Zavok: Me pregunto quién será mi digno oponente de camino a la siguiente clase?<br/>
          Silver: Eso te lo crees tú, Zavok!<br/>
          Zavok: Anda, el bueno de Silver. Estás aquí porque te enfrentarás a mí en la Death Egg Grand Prix, no?<br/>
          Silver: Así es, y esta vez no me ganarás.
        </p>

        <p>
          (Al ganar el DeathEgg Grand Prix)
        </p>

        <p>
          Silver: No! Cómo he podido perder contra este monstruo?<br/>
          Zavok: Se siente, has perdido. Ahora a celebrar mi victoria, rumbo a la siguiente clase!
        </p>

        <HeaderZavok/>
        <Routes>
          <Route path="/Zavok" element={<Zavok/>}/>
          <Route path="/Zavok2" element={<Zavok2/>}/>
          <Route path="/Zavok3" element={<Zavok3/>}/>
        </Routes>
    </div>
  )
}

export default Zavok