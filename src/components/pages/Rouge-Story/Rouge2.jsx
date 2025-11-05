import React from 'react'
import HeaderRouge from '../../organisms/HeaderRouge'
import {Routes, Route} from 'react-router-dom'
import Rouge from './Rouge'
import Rouge3 from './Rouge3'
const Rouge2 = () => {
  return (
    <div id="container-race">
        <h2>Historia de Rouge</h2>
        <h3>Velocidad Sonic</h3>

        <p>
          Cream: Hola, Sra.Rouge. Vas a competir en el Wisp Grand Prix después de esta carrera?<br/>
          Rouge: Vaya, vaya, lindos mis ojos, es que vas a correr luwgo contra mí?<br/>
          Cream: Pues claro, además, en el Colorful Mall hay artículos lujosos que seguro que competiremos por ellos.<br/>
          Rouge: Entiendo, el que pierda, paga, eh? Vale, acepto el reto.
        </p>

        <p>
          (Al ganar el Wisp Grand prix)
        </p>

        <p>
          Rouge: Jejejeje! He ganado!<br/>
          Cream: Oh, no! Perdí!<br/>
          Rouge: Tranquila, ya pagaré luego todo, no te preocupes.<br/>
          Cream: No es por eso, Rouge. Tan solo me lo he pasado bien corriendo contra ti.<br/>
          Rouge: Ayyy, niñas de hoy en día.
        </p>

        <p>
          (Al llegar al DeathEgg Grand Prix)
        </p>

        <p>
          Rouge: Me pregunto contra quién me enfrentaré ahora.<br/>
          Jet: Te encontré, maldita ladrona murciélago!<br/>
          Rouge: Anda, si eres el jefe de aquella banda de ladrones, los Babylon Rogues.<br/>
          Jet: Vas a pagarme de todo lo que has robado, maldita ladrona, robaste la joya de Soleanna,
          el zafiro de Adabat y nuestra relliquia, te vas a enterar!<br/>
          Rouge: Ah, era tuyo? Cuánto lo siento, bueno, vamos a correr, no?
        </p>

        <p>
          (Al ganar el DeathEgg Grand Prix)
        </p>

        <p>
          Jet: Maldita mocosa! No me puedo creer que haya perdido contra esa murcielago!<br/>
          Wave: Dejalo, Jet. Ya tendremos posibilidades de ganarla.<br/>
          Rouge: Uff, cada vez que robo algo que querían ellos anteriormente, me encuentro en problemas.
        </p>
        
        <HeaderRouge/>
        <Routes>
            <Route path="Rouge" element={<Rouge/>}/>
            <Route path="Rouge2" element={<Rouge2/>}/>
            <Route path="Rouge3" element={<Rouge3/>}/>
        </Routes>
    </div>
  )
}

export default Rouge2