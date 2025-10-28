import React from 'react'
import HeaderSonic from '../../organisms/HeaderSonic'
import {Route, Routes} from 'react-router-dom'
import Sonic from './Sonic'
import Sonic3 from './Sonic3'
const Sonic2 = () => {
  return (
    <div id="container-race">
        <h2>Historia de Sonic</h2>
        <h3>Velocidad Sonic</h3>

        <p>
          Dodon Pa: Todos los corredores se han clasificado a la siguiente clase.<br/>
          Sonic: Genial, parece que la competencia va a estar que arde ahora.<br/>
          Metal Sonic ...!<br/>
          Sonic: Oye, tranquilo, Metal. Que tu pasaste por chiripa.<br/>
          Sage: Dice que piensa aplastarte en la DeathEgg Grand Prix, así que no tardes.<br/>
          Sonic: Bueno, ya sabemos cómo va a acabar.
        </p>

        <p>
          (Al llegar al Wisp Grand Prix)
        </p>

        <p>
          Amy: Hola, Sonic! Me voy a enfrentar a ti en el siguiente Grand Prix, prepárate para ver cuánto he mejorado!<br/>
          Sonic: Contra ti, Amy? Mejor! Porqué tú serás el que te veré en la línea de meta<br/>
          Tails: Ambos estan rivalizados en velocidad y conducción, todo dependerá de la habilidad.
        </p>

        <p>
          (Al ganar el Wisp Grand Prix)
        </p>

        <p>
          Amy: No, no, no! Perdí contra Sonic!<br/>
          Sonic: Pero ha sido una buena carrera.<br/>
          Amy: Jejeje, sí, tienes razón.
        </p>

        <p>
          (Al ganar el Grand Prix Calabaza)
        </p>

        <p>
          Sonic: Perfecto, voy en racha, contra quién me enfrento ahora?<br/>
          Blaze: Hola, Sonic.<br/>
          Sonic: Blaze! Te enfrentarás a mí ahora?<br/>
          Blaze: Si, gané ese Grand Prix antes que tú, nos vemos en el Coral Grand Prix, aquí solucionaremos nuestras diferencias.<br/>
          Sonic: Perfecto! No tardes.
        </p>

        <p>
          (Al llegar el Grand Prix Coral)
        </p>

        <p>
          Blaze: Uff! Después de todo, sigues siendo más rápido.<br/>
          Sonic: Tú tampoco me dejaste descansar, ibas muy seria en esta competencia. Buena carrera<br/>
          Blaze: Je! Igualmente.
        </p>

        <p>
          (Al llegar al DeathEgg Grand Prix)
        </p>

        <p>
          Sonic: Toma ya, ya estoy en la DeathEgg Grand Prix, si gano esta, pasaré a la siguiente clase<br/>
          Eggman: Antes tendrás que derrotar a Metal Sonic, erizo roedor!<br/>
          Metal Sonic: ...!<br/>
          Sonic: No fastidies, él llegó hasta aquí? Perfecto para mí, nada es divertido sin nadie con rivalizar en velocidad<br/>
          Sage: Las posibilidades de quién gane esta carrera es del 50%, suerte a ambos y que gane el mejor.
        </p>

        <p>
          (Al ganar el DeathEgg Grand Prix)
        </p>

        <p>
          Sage: Increible! Has derrotado a Metal!<br/>
          Sonic. Os dije que a mí no deberían subestimarme. Así que me voy a la siguiente clase, adiós!<br/>
        </p>
        
        <HeaderSonic/>
          <Routes>
            <Route path="/Sonic" element={<Sonic/>}/>
            <Route path="/Sonic2" element={<Sonic2/>}/>
            <Route path="/Sonic3" element={<Sonic3/>}/>
          </Routes>

    </div>
  )
}

export default Sonic2