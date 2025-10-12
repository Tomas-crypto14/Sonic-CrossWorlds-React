import React from 'react'
import HeaderWave from '../../organisms/HeaderWave'
import {Routes, Route} from 'react-router-dom'
import Wave2 from './Wave2'
import Wave3 from './Wave3'
const Wave = () => {
  return (
    <div id="container-race">
        <h2>Historia de Wave</h2>
        <h3>Velocidad alta(rápida)</h3>

        <p>
          Wave: Por fin llegamos a la competencia, donde tendremos un premio a lo grande y además las gemas de los amigos de Sonic<br/>
          Storm: El jefe estará listo para correr y llevarse la pasta a casa.<br/>
          Jet: Yo estoy para acabar de una vez por todas con Sonic the Hedgehog.<br/>
          Wave: Ya, ya. Tú con lo mismo de siempre, pero recuerda preocuparte por nosotros de vez en cuando. Bueno, voy a preparar mi
          Extreme Gear, suerte en la competencia.
        </p>

        <p>
          (Al ganar el Wisp Grand Prix)
        </p>

        <p>
          Wave: La tecnología de Donpa Motors es una pasada, gracias a mi Extreme Gear mejorado, puedo ganar a cualquier corredor.<br/>
          Shadow: Primero tendrías que enfrentarte a mí, no?<br/>
          Wave: Agggh! El rival oscuro de Sonic, qué quieres?<br/>
          Shadow: Solo decirte que voy a jugar al Boom Boo Grand Prix y esta vez no tendrás ninguna posibilidad de derrotarme.<br/>
          Wave: Ah, sí. Eso habrá que verlo.
        </p>

        <p>
          (Al ganar el Boom Boo Grand Prix)
        </p>

        <p>
          Shadow: En serio? He perdido contra esa escoria?<br/>
          Wave: Bueno, se siente.<br/>
          Jet: Je, no puedes con la mecánica de nuestro equipo, puede cuidarse de sí misma.<br/>
          Shadow: Pues ya verás cuando te enfrentes a Omega.<br/>
          Jet: Te refieres al robot ese de tu grupo de amigos? Wave puede contra cosas que tenga que ver con la tecnología.<br/>
          Tails: Yo no diría eso, Omega es un robot de élite y ha tenido aventuras con Shadow y Rouge, así que hay que ponerse serios.<br/>
          Wave: Guau, y encima el zorro me da consejos.<br/>
          Storm: No te preocupes, Wave. Te apoyaré para que le des una tunda a ese robot, por el jefe.<br/>
          Wave: Bueno, a seguir ganando copas.
        </p>

        <p>
          (Al ganar el Crystal Grand Prix)
        </p>

        <p>
          Omega: Errores calculados. Derrota inminente contra Wave the Swallow.<br/>
          Wave: Lo he dicho, pan comido.<br/>
          Jet: Pues mira tú que bien, las buenas noticias son que has llegado a la última copa para que la ganes y pases
          a la siguiente clase. La mala es que en esa tienes que enfrentarte a Storm.<br/>
          Wave: Qué?!<br/>
          Jet: Tendrás que derrotarle si quieres pasar.<br/>
          Wave: Como sea por los sermones que le he dado yo le... le...
        </p>

        <p>
          (Al ganar el DeathEgg Grand Prix)
        </p>

        <p>
          Storm: Noo! Perdí contra Wave, no me lo puedo creer!<br/>
          Wave: Lo que te mereces por devolvérmela por los sermones, listillo.<br/>
          Dodon Pa: Vaya, vaya, la golondrina pasa a la siguiente clase.
        </p>
        <HeaderWave/>
        <Routes>
          <Route path="/Wave" element={<Wave/>}/>
          <Route path="/Wave2" element={<Wave2/>}/>
          <Route path="/Wave3" element={<Wave3/>}/>
        </Routes>
    </div>
  )
}

export default Wave