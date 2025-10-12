import React from 'react'
import HeaderVector from '../../organisms/HeaderVector'
import {Routes, Route} from 'react-router-dom'
import Vector2 from './Vector2'
import Vector3 from './Vector3'
const Vector = () => {
  return (
    <div id="container-race">
        <h2>Historia de Vector</h2>
        <h3>Velocidad alta(rápida)</h3>

        <p>
          Vector: Por fin estamos aquí, en el Crossworlds Grand Prix, aquí es donde conseguiremos pasta de una vez por todas<br/>
          Espio: Vector, recuerda que lo estás haciendo para promocionar la agencia.<br/>
          Charmy: Además, con esa pasta, conseguiremos mejorar nuestra agencia de Detectives, seremos los reyes.<br/>
          Vector: Sí, eso sí. Ahora, a correr, recordad que es un todos contra todos, así que, todos a por el primer puesto.
        </p>

        <p>
          (Al ganar el Wisp Grand Prix)
        </p>

        <p>
          Vector: Eh, Silver, Blaze! Como os va por aquí?<br/>
          Silver: En esta competencia muy bien, estoy aquí para ganarme el dinero, y Blaze supongo que por lo mismo.<br/>
          Blaze: Yo estoy aquí para entretenerme durante las vacaciones.<br/>
          Además, ganar las Chaos Emeralds sería igual que ganar con las Sol Emeralds<br/>
          Vector: Yo por la pasta. Oh, que recuerdos del equipo que hicimos en el Grand Prix anterior.<br/>
          Silver: Ya, pero aquí todos competimos por la victoria. Así que ánimo y buena suerte!<br/>
          Vector: Igualmente a vosotros.
        </p>

        <p>
          (Al llegar al DeathEgg Grand Prix)
        </p>

        <p>
          Vector: Perfecto, ya llegué a la copa final, si gano esa, paso a la siguiente clase.<br/>
          Rouge: Ya lo veremos, cocodrilo.<br/>
          Vector: Ah, la murciélago. Apuesto a que tú viniste a la competencia por el dinero y a parte de tu cuenta, las Chaos Emeralds.<br/>
          Rouge: Pues si que lo sabes todo al dedillo.<br/>
          Vector: Forma parte de ser un buen detective. Te veo en la línea de meta.
        </p>

        <p>
          Vector: Bien, vamos! Rumbo a la siguiente clase!<br/>
          Rouge: Agh, imposible. Ya te derrotaré la próxima vez.<br/>
          Charmy: Qué bien, Vector. Has demostrado a esos quién manda aquí!<br/>
          Espio: Je, buen trabajo, jefe.
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

export default Vector