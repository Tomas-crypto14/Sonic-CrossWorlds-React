import React from 'react'
import HeaderKnuckles from '../../organisms/HeaderKnuckles'
import {Routes, Route} from 'react-router-dom'
import Knuckles from './Knuckles'
import Knuckles3 from './Knuckles3'
const Knuckles2 = () => {
  return (
    <div id="container-race">
        <h2>Historia de Knuckles</h2>
        <h3>Velocidad Sonic</h3>

        <p>
          (Al llegar el Wisp Grand Prix)
        </p>

        <p>
          Zavok: Mira a quién tenemos aquí, al último Equidna de la antigua civilización.<br/>
          Knuckles: Grrrr! No me puedo creer que tenga que enfrentarme a Zavok ahora.
          Pero bueno, hay que hacerlo, tendré que enfrentarme a él con todas mis fuerzas.<br/>
        </p>

        <p>
          (Al ganar el Wisp Grand Prix)
        </p>

        <p>
          Zavok: Noooo! He perdido? Porqué?<br/>
          Knuckles: Perdiste, cara de Zeti!<br/>
          Sage: Ha mejorado mucho en fuerza y conducción, pero no me esperaba que podría contra alguien como Zavok.
        </p>

        <p>
          (Al ganar el Coral Grand Prix)
        </p>

        <p>
          Sage: Knuckles, te puedo hacer preguntas? Es sobre aquella carrera que hiciste contra Zavok.<br/>
          Knuckles: Claro, chica.<br/>
          Sage: Has demostrado frialdad y no caíste en sus provocaciones, además, oí sobre aquella arma que usaron para destrozar tu mundo.
          Porque no aprovechaste para destrozare después de todo lo que te ha hecho?.<br/>
          Knuckles: Es fácil, Sage! Esaas cosas Sonic lo puede arreglar tranquilo. Adfemññas, debido a que él lo provocó, sé que siempre puede
          corregir sus errores, total, nadie es perfecto.<br/>
          Sage: Una respuesta que se había previsto en mis simulaciones.
        </p>

        <p>
          (Al llegar el DeathEgg Grand Prix)
        </p>

        <p>
          Blaze: Hola, Knuckles. Parece que me voy a enfrentar a ti en la carrera para pasar a la siguiente clase.<br/>
          Knuckles: Sí, ya me esperaba eso. Prepárate para correr esa carrera, de guardián a guardiana.
        </p>

        <p>
          (Al ganar el DeathEgg Grand Prix)
        </p>

        <p>
          Blaze: No, he perdido! Felicidades, Knuckles!<br/>
          Knuckles: Perfecto! Me voy a la siguiente clase!
        </p>

        <HeaderKnuckles/>
        <Routes>
          <Route path="/Knuckles" element={<Knuckles/>}/>
          <Route path="/Knuckles2" element={<Knuckles2/>}/>
          <Route path="/Knuckles3" element={<Knuckles3/>}/>
        </Routes>
    </div>
  )
}

export default Knuckles2