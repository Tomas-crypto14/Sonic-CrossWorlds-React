import React from 'react'
import HeaderJet from '../../organisms/HeaderJet'
import {Routes, Route} from 'react-router-dom'
import Jet from './Jet'
import Jet3 from './Jet3'
const Jet2 = () => {
  return (
    <div id="container-race">
        <h2>Historia de Jet</h2>
        <h3>Velocidad Sonic</h3>

        <p>
          (Al ganar el Donpa Grand Prix)
        </p>

        <p>
          Jet: Je! Ningún rival está a mi altura<br/>
          Sage: Buenas, Jet!<br/>
          Jet: Agh, eres tú, la hija de doctor, te vas a enfrentar a mí en la siguiente copa, no?<br/>
          Sage: Correcto, después de la carrera, me encantaría hacerte algunas preguntas.<br/>
          Jet: Jum, vale, pero que sea rápido.
        </p>

        <p>
          (Al ganar el Wisp Grand Prix)
        </p>

        <p>
          Sage: Según tus datos, colaboraste con mi padre hace años para derrotar a Sonic, como es posible que ya no quieras
          trabajar para él?<br/>
          Jet: Es porque intentó engañarme con el artefacto que teníamos de nuestra raza, además, organizaba su propio Grand Prix para 
          desentrañar aquel tesoro de los Babylon, y además, si me dijeran trucos para derrotar a Sonic, prefiero ganar limpiamente.<br/>
          Sage: Pues he visto que Wave puso una...<br/>
          Jet: Si, ya lo sé, me di cuenta después de la carrera, le di un sermón para que eso no volviera a ocurrir, y más vale que esta vez
          no lo haga.<br/>
          Sage: Muchas gracias por esa conversación.<br/>
          Jet: Solo quise hacerlo como si fuera una entrevista por mi victoria
        </p>

        <p>
          (Al llegar al Coral Grand Prix)
        </p>

        <p>
          Jet: Tú!!!<br/>
          Rouge: Hola, halcón del señor del viento, que te trae por aquí?<br/>
          Jet: A parte de derrotar a Sonic, tengo un asunto contigo, pagarás por lo que has robado.<br/>
          Rouge: Ah! Te refieres a aquella gema, collares y tesoro de tu raza, los tengo aquí algún problema.<br/>
          Jet: Un reto para esta carrera, el quién gane este Grand Prix, lo gana todo.<br/>
          Rouge: Una carrera para decidir el destino entre tus tesoros y los míos, jejeje, de esta no te escapas.
        </p>

        <p>
          (Al ganar el Coral Grand Prix)
        </p>

        <p>
          Rouge: Vaya, me has ganado.<br/>
          Jet: Ahora devuélvenos los tesoros que robaste, murciélago ladrona<br/>
          Rouge: Vale, aquí los tienes, me rindo.<br/>
          Knuckles: Guau, Rouge tirando la toalla, raro, incluso para ti.<br/>
          Rouge: Que quieres que te diga, un ladrón de joyas como yo tiene que cumplir su parte del trato<br/>
          Jet: Je! Con eso ya estamos en paz.
        </p>

        <p>
          (Al llegar el DeathEgg Grand Prix)
        </p>

        <p>
          Eggman: Buenas, Jet. Te importa si hablamos en privado?
          Jet: No me digas, otra unión para acabar con Sonic? No, gracias, prefiero derrotarlo con mis propios recursos.<br/>
          Dr.Eggman: Ajj! Si es que siempre pasa lo mismo, prepárate para saborear tu rerrota!
        </p>

        <p>
          (al ganar el DeathEgg Grand Prix)
        </p>

        <p>
          Jet: Bieeen! Voy a la siguiente clase! Si llego al final de todo derrotando a Sonic, esta competencia estará más que ganada<br/>
        </p>

        <HeaderJet/>
        <Routes>
            <Route path="/Jet" element={<Jet/>}/>
            <Route path="/Jet2" element={<Jet2/>}/>
            <Route path="/Jet3" element={<Jet3/>}/>
        </Routes>
    </div>
  )
}

export default Jet2