import React from 'react'
import HeaderVector from '../../organisms/HeaderVector'
import {Routes, Route} from 'react-router-dom'
import Vector from './Vector'
import Vector3 from './Vector2'
const Vector2 = () => {
  return (
    <div id="container-race">
        <h2>Historia de Vector</h2>
        <h3>Velocidad Sonic</h3>

        <p>
          Vector: La velocidad Sonic es un poco difícil que la clase anterior, tendré que mejorar
          mi vehículo a tope.<br/>
          Tails: Antes tendrás que derrotarme en el Wisp Grand Pri si quieres avanzar, Vector.<br/>
          Vector: Anda, hola, Tails. Listo para competir fuerte en esta clase?<br/>
          Tails: Exacto, no me andaré con miramientos.
        </p>

        <p>
          (Al ganar el Wisp Grand Prix)
        </p>

        <p>
          Tails: Buena carrera, Vector! Me has impresionado.<br/>
          Vector: Je! Era coser y cantar.
        </p>

        <p>
          (Al ganar el Coral Grand Prix)
        </p>

        <p>
          Cream: Hola, Sr.Vector. Adivina que.<br/>
          Vector: Has conseguido el acceso a la siguiente clase?<br/>
          Cream: Aún no, he llegado a la DeathEgg Grand Prix, estaré esperándote para que mi
          madre lo disfrute, jejeje<br/>
          Vector: Ay, no! Qué hago ahora?
        </p>

        <p>
          (Al llegar al DeathEgg Grand Prix)
        </p>

        <p>
          Cream; Me alegro de verte, Sr.Vector, preparado?<br/>
          Vector: Espero que Vanilla no se enfade conmigo si gano a su hija de manera aplastante.
        </p>

        <p>
          (Al ganar el DeathEgg Grand Prix)
        </p>

        <p>
          Cream: Ha sido...<br/>
          Vector: Ay, no... Estoy perdido.<br/>
          Cream: La carrera más peligrosa y divertida que he hecho en mi vida.<br/>
          Vector: Uff, pensé que estaba acabado, bueno, a la siguiente clase
        </p>

        <HeaderVector/>
        <Routes>
            <Route path="/Vector" element={<Vector/>}/>
            <Route path="/Vector2" element={<Vector2/>}/>
            <Route path="/Vector3" element={<Vector3/>}/>
        </Routes>
    </div>
  )
}

export default Vector2