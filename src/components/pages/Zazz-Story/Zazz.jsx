import React from 'react'
import HeaderZazz from '../../organisms/HeaderZazz'
import {Routes, Route} from 'react-router-dom'
import Zazz2 from './Zazz2'
import Zazz3 from './Zazz3'
const Zazz = () => {
  return (
    <div id="container-race">
        <h2>Historia de Zazz</h2>
        <h3>Velocidad alta(rápida)</h3>

        <p>
          Zazz: Estoy listo para destrozar cosas, ganar la competencia, ganar el premio y sobretodo destrozar el premio. Jajajajaja!<br/>
          Zavok: Recuerda, Zazz. Estamos aquí para ganar el premio y también para derrotar a Sonic y a sus amigos. Además, recuerda que tienes
          oportunidades para recuperar el puesto si pierdes.<br/>
          Zazz: Eh! No puedes decirme eso!<br/>
          Zavok: Quieres derrotar a Sonic o no?<br/>
          Zazz: Ayyy! Vale! Pero aprovecharé esa competencia para destrozar a todos! Muajajajaja!
        </p>

        <p>
          (Al llegar al DeathEgg Grand Prix)
        </p>

        <p>
          Zazz: Así que si gano al rival en esta copa, paso a la siguiente clase, no?<br/>
          Zavok: Así es, pero tienes que estar muy concentrado si quieres ganar la carrera. Aunque te enfrentes al EggPawn, 
          no puedes bajar la guardia.<br/>
          Zazz: Perfecto, a destrozar, muajajaja!
        </p>

        <p>
          (Al ganar el DeathEgg Grand Prix)
        </p>

        <p>
          Zazz: Tómala! He ganado! Tómala!
          Zavok: Buen principio.
          Dodon Pa: El loco morado pasa a la siguiente clase.
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

export default Zazz