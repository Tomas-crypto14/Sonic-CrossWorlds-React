import React from 'react'
import HeaderShadow from '../../organisms/HeaderShadow'
import {Routes, Route} from 'react-router-dom'
import Shadow from './Shadow'
import Shadow3 from './Shadow3'

const Shadow2 = () => {
  return (
    <div id="container-race">
        <h2>Historia de Shadow</h2>
        <h3>Velocidad Sonic</h3>

        <p>
          Shadow: Nueva clase, nuevos competidores que dan la talla para derrotarme.<br/>
          Knuckles: Hola, Shadow. Adivina quien ha conseguido el Donpa Grand Prix antes que tú.<br/>
          Shadow: Tú, no?<br/>
          Knuckles: Exacto, ya verás cuando llegue al Coral Grand Prix y te dé una paliza.<br/>
          Shadow: Je, ya lo veremos.
        </p>

        <p>
          (Al llegar el Coral Grand Prix)
        </p>

        <p>
          Knuckles: Vaya, por fin llega "la forms de vida definitiva". Preparado?<br/>
          Shadow: Hum. Aprenderás a aceptar mi superioridad y sobre todo respetar a mis superiores.
        </p>

        <p>
          (Al ganar el Coral Grand Prix)
        </p>

        <p>
          Knuckles: No me lo puedo creer, he perdido.<br/>
          Shadow: Ha sido más difícil de lo que yo pensaba, ha sido una buena carrera después de todo.<br/>
          Knuckles: Sí, ya te digo.
        </p>

        <p>
          (Al llegar al Crystal Grand Prix)
        </p>

        <p>
          Shadow: Me enfrento a la hija del doctor?<br/>
          Sage: Ya que mi padre ha ganado ese Grand Prix y ha llegado a la última para clasificarse,
          debo encargarme de que nadie le gane, además, me encantaría comprobar tus capacidades de velocidad.<br/>
          Shadow: Lo que quieres es correr contra mñi, no? Perfecto, hacía tiempo que quería luchar contra ti,
          muéstrame esa fuerza de inteligencia artifical de la que tanto hablaban Sonic y el doctor.
        </p>

        <p>
          (Al ganar el Crystal Grand Prix)
        </p>

        <p>
          Sage: Las expectativas sobre ti han sido sobrepasadas, eres la froma de vida definitiva 
          después de todo<br/>
          Shadow: Siempre gano y siempre lo consigo. Bueno, me voy a enfrentar al doctor.
        </p>

        <p>
          (Al llegar al DeathEgg Grand Prix)
        </p>


        <p>
          Shadow: Hola, doctor.<br/>
          Eggman: Shadow?! Así que Sage ha perdido, eh? Bueno, hizo lo mejor que pudo, lo hizo bien.<br/>
          Shadow: Qué raro, Eggman regañaría a Sage por haber perdido contra mí, qué le habrá pasado?
        </p>

        <p>
          (Al ganar el DeathEgg Grand Prix)
        </p>

        <p>
          Dodon Pa: Y el erizo oscuro pasa a la siguiente clase.<br/>
          Shadow: Jum! Muy pronto, me enfrentaré a Sonic y ganaré esta competencia.
        </p>

        <HeaderShadow/>
            <Routes>
                <Route path="/Shadow" element={<Shadow/>}/>
                <Route path="/Shadow2" element={<Shadow2/>}/>
                <Route path="/Shadow3" element={<Shadow3/>}/>
            </Routes>
    </div>
  )
}

export default Shadow2