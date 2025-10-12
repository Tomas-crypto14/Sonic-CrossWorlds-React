import React from 'react'
import HeaderEggman from '../../organisms/HeaderEggman'
import {Routes, Route} from 'react-router-dom'
import Eggman2 from './Eggman2'
import Eggman3 from './Eggman3'
const Eggman = () => {
  return (
    <div id="container-race">
        <h2>Historia de Eggman</h2>
        <h3>Velocidad alta(rápida)</h3>

        <p>
          Eggman: El Crossworlds Grand Prix, aquí se decidirá quién es el mejor corredor del espacio-tiempo. Ganaremos esta competencia
          en nombre de la familia Eggman. Sage, qué dicen tus simulaciones?<br/>
          Sage: He corrido un millón de simulaciones en las que puedes derrotar a Sonic y los demás sin ningún problema.<br/>
          Eggman: Perfecto, solo voy a decir una cosa. A disfrutar de la competencia.
        </p>

        <p>
          (Al llegar al Boom Boo Grand Prix)
        </p>

        <p>
          Eggman: Vaya, vaya, vaya. Pero si es el halcón de las carreras, Jet. No te veía desde el Grand Prix mundial.<br/>
          Jet: Yo de ti igual. He escuchado que formaste una familia, es eso cierto?<br/>
          Eggman: Sí, obviamente, con mis mejores creaciones.<br/>
          Jet: Bueno, bueno, que tenemos una carrera que disputar, más te vale no confiarte ni bajar la guardia.
        </p>

        <p>
          (Al ganar el Boom Boo Grand Prix)
        </p>

        <p>
          Jet: Ha sido suerte y potra, nada más.<br/>
          Eggman: Excusas, excusas, Jet. Pero ya sabes que esta vez he ganado, así que toca aguantarse.<br/>
        </p>

        <p>
          (Al llegar al DeathEgg Grand Prix)
        </p>

        <p>
          Eggman: Así que me enfrento a Tails para jugarme el acceso a la siguiente clase? Esto va a ser fácil.<br/>
          Tails: Tú dirás, Eggman. Pero yo no pienso quedarme atrás.
        </p>

        <p>
          (Al ganar el DeathEgg Grand Prix)
        </p>

        <p>
          Tails: Tu habilidad de conducción ha mejorado mucho, Eggman.<br/>
          Eggman: Vaya, mira quién es el envidioso ahora?<br/>
          Tails: Tendré que mejorar más si quiero pasar a la siguiente clase.<br/>
          Eggman: Así es, zorrillo. Ahorqa déjame celebrar mi victoria. Juajajajaja!
        </p>

        <HeaderEggman/>
        <Routes>
          <Route path="/Eggman" element={<Eggman/>}/>
          <Route path="/Eggman2" element={<Eggman2/>}/>
          <Route path="/Eggman3" element={<Eggman3/>}/>
        </Routes>
    </div>
  )
}

export default Eggman