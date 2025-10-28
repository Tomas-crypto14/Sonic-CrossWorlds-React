import React from 'react'
import HeaderTails from '../../organisms/HeaderTails'
import {Route, Routes} from 'react-router-dom'
import Tails from './Tails'
import Tails3 from './Tails3'
const Tails2 = () => {
  return (
    <div id="container-race">
        <h2>Historia de Tails</h2>
        <h3>Velocidad Sonic</h3>

        <p>
          (Al ganar el Donpa Grand Prix)
        </p>

        <p>
          Tails: Estas simulaciones de circuitos son muy interesantes. Es como si sacara los datos de todos los que hemos visitado hasta ahora, 
          aún así, ayuda a los corredores a superar sus problemas.<br/>
          Storm: Toma ya, voy al Wisp Grand Prix y mira tú qué bien, me enfrento al zorro amigo de Knuckles.<br/>
          Jet: Tú tan solo no bajes la guardia.<br/>
          Storm: Sí, jefe!<br/>
          Tails: Contra Storm va a ser un problema, tendré que preparar mi vehículo.<br/>
        </p>

        <p>
          (Al ganar el Wisp Grand Prix)
        </p>

        <p>
          Storm: Estaba a punto de ganar la carrera. Joooo!<br/>
          Tails: Veo que hay cosas que nunca cambian en los Babylon Rogues.
        </p>

        <p>
          (Al llegar al Coral Grand Prix)
        </p>

        <p>
          Tails: Me enfrento al Dr.Eggman en la siguiente ronda? No me sorprende.<br/>
          Dr.Eggman: Es hora de demostrar quien de los dos en tecnología corre más, preparate, zorro<br/>
          Tails: Ya veremos quién ríe mejor. Venga, que siga la carrera.
        </p>

        <p>
          (Al ganar el Coral Grand Prix)
        </p>

        <p>
          Dr.Eggman: Noooo! He perdido! Hija mía, véngameeeee!<br/>
          Sage: Estás bien, padre. Solo has perdido, nada más.<br/>
          Tails: No me digas, has llegado a la Death Egg.<br/>
          Sage: Sí, y estoy lista para derrotarte, he oído que eres bueno con el hackeo de tecnología de mi padre,
          pero ahora veamos quién es de nosotos es mejor.<br/>
          Tails: Dalo por hecho.
        </p>

        <p>
          (Al ganar el DeathEgg Grand Prix)
        </p>

        <p>
          Sage: No puede ser, he fracasado.<br/>
          Tails: Toma ya, victoria!<br/>
          Dr.Eggman: Lo hiciste bien, hija mía.<br/>
          Sage: Gracias por el cumplido, padre.<br/>
          Tails: Me voy a la siguiente clase, a prepararme aún más.
        </p>
        <HeaderTails/>
          <Routes>
            <Route path="/Tails" element={<Tails/>}/>
            <Route path="/Tails2" element={<Tails2/>}/>
            <Route path="/Tails3" element={<Tails3/>}/>
          </Routes>
    </div>
  )
}

export default Tails2