import React from 'react'
import HeaderSage from '../../organisms/HeaderSage'
import {Routes, Route} from 'react-router-dom'
import Sage2 from './Sage2'
import Sage3 from './Sage3' 
const Sage = () => {
  return (
    <div id="container-race">
        <h2>Historia de Sage</h2>
        <h3>Velocidad alta(rápida)</h3>
        
        <p>
          Dr.Eggman: Por fin estamos aquí, hija mía, en el CrossWorlds Grand Prix.<br/>
          Sage: Este estadio... es precioso.<br/>
          Dr.Eggman: Esto es una experiencia única para ti y para conocer el mundo, hija mía, disfruta de la competencia.<br/>
          Sage: Gracias, Padre!<br/>
          Metal Sonic: ...!<br/>
          Sage: Parece que Metal Sonic y yo nos enfrentaremos en la primera ronda de la competencia. Bueno, me servirá para calentar.
          Vamos allá!
        </p>

        <p>
          (Al ganar el Donpa Grand Prix)
        </p>

        <p>
          Sage: Mi primera carrera y mi estimulación de emoción ha subido al máximo, me prepararé para las siguientes copas.
        </p>

        <p>
          (Al llegar al Crystal Grand Prix)
        </p>

        <p>
          Sage: De todos los circuitos que he visto, ese conjunto de tres tiene dificultad alta de riesgo entre resbalón y caída.
          Contra quién me enfrento ahora?<br/>
          Amy: Hola, Sage. Compites contra mí, no?<br/>
          Sage: Amy? Me tengo que enfrentar a ella?<br/>
          Amy: Perfecto, yo aquí estoy listo para luchar contra ti, no te lo pondré fácil.<br/>
          Sage: Según su análisis, emprendió viajes para compartir su amor con todo el mundo, vamos a ver cuánto ha mejorado?
        </p>

        <p>
          (Al ganar el Crystal Grand Prix)
        </p>

        <p>
          Amy: Ufff, Sage, buena carrera.<br/>
          Sage: Tengo una pregunta, cómo es que querías correr en el Crystal Grand Prix?<br/>
          Amy: Es porque en uno de los circuitos estaba el Chao Park, es uno de los lugares favoritos de Cream.<br/>
          Sage: Cream. Te refieres a la coneja que está con un amigo Chao?<br/>
          Amy: Esa, sí. Es mi mejor amiga y los dos formamos gran equipo, siempre vamos de aventuras para divertirnos.<br/>
          Sage: No me esperaba eso, una amistad similar a la de Sonic y Tails. Espero competir contra ella muy pronto para conocerla mejor.
        </p>

        <p>
          (Al llegar al DeathEgg Grand Prix)
        </p>

        <p>
          Blaze: Sage, no? La hija artifical de Eggman y la heredera del imperio.<br/>
          Sage: Tú eres Blaze The Cat. Te enfrentarás a mí en la DeathEgg Grand Prix para pasar a la siguiente clase?<br/>
          Blaze: Así es, te derrotaré en nombre de mí misma!<br/>
          Sage: Proviene de otro mundo y dimensión similar al de Sonic. Quizás sea su contraparte.
        </p>
        
        <p>
          (Al ganar el DeathEgg Grand Prix)
        </p>

        <p>
          Sage: Lo he conseguido. He ganado, he ganado!<br/>
          Eggman: Siiii! Mi hija pasa a la siguiente clase de la competencia!<br/>
          Blaze: Agggh! En fin, buena carrera, me has ganado limpiamente.<br/>
          Sage: Acepto el cumplido.
        </p>

        <HeaderSage/>
        <Routes>
          <Route path="/Sage" element={<Sage/>}/>
          <Route path="/Sage2" element={<Sage2/>}/>
          <Route path="/Sage3" element={<Sage3/>}/>
        </Routes>
    </div>
  )
}

export default Sage