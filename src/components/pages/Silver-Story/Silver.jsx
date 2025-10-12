import React from 'react'
import HeaderSilver from '../../organisms/HeaderSilver'
import {Routes, Route} from 'react-router-dom'
import Silver2 from './Silver2'
import Silver3 from './Silver3'

const Silver = () => {
  return (
    <div id="container-race">
        <h2>Historia de Silver</h2>
        <h3>Velocidad alta(rápida)</h3>

        <p>
          Silver: De vuelta a un Grand Prix, y encima mejor que la anterior. Es todos contra todos, lo que significa que tengo que ponerme
          las pilas y preparar mi vehículo si quiero ganar la competencia.
        </p>

        <p>
          (Al ganar el Grand Prix Crystal)
        </p>

        <p>
          Silver: Fiuu, estaba chupado. Ahora tengo que ganar la Death Egg Grand Prix y pasaré a la siguiente clase. 
          Contra quién me voy a enfrentar ahora?
        </p>

        <p>
          (Al llegar a la Death Egg Grand Prix)
        </p>

        <p>
          Espio: Nos volvemos a ver, Silver!<br/>
          Silver: Espio! Te vas a enfrentar a mí?<br/>
          Espio: Pues claro! Recuerdas cuando nos conocimos, en la Blue Coast Zone?<br/>
          Silver: Así es, si no fuera por ti, Eggman Nega se habría salido con la suya.<br/>
          Espio: Ahora mismo, corramos y demos lo mejor de nosotros.<br/>
          Silver: Eso es lo que quería oír. Ahora, a correr!
        </p>

        <p>
          (Al ganar el DeathEgg Grand Prix)
        </p>

        <p>
          Silver: Toma, he ganado, he ganado!<br/>
          Espio: Me has sorprendido, Silver! Suerte en la siguiente clase.<br/>
          Silver: Tú también suerte para ganar la copa, te estaré esperando si quieres la revancha.<br/>
          Espio: Je! Dalo por hecho.<br/>
          Dodon Pa: Vaya, vaya. Una buena lección de amistad. El erizo de la telequinesia pasa a la siguiente clase.
        </p>

        <HeaderSilver/>
        <Routes>
          <Route path="/Silver" element={<Silver/>}/>
          <Route path="/Silver2" element={<Silver2/>}/>
          <Route path="/Silver3" element={<Silver3/>}/>
        </Routes>
    </div>
  )
}

export default Silver