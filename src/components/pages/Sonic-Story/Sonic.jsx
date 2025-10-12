import HeaderSonic from '../../organisms/HeaderSonic'
import {Route, Routes} from 'react-router-dom'
import Sonic2 from './Sonic2'
import Sonic3 from './Sonic3'
const Sonic = () => {
  return (
    <div id="container-race">
      <h2>Historia de Sonic</h2>
      <h3>Velocidad alta(rápida)</h3>
      <p>Dodon Pa: Por fin llegó el día que todos esperaban, el CrossWorlds Grand Prix está a punto de comenzar y los corredores han descansado
         lo suficiente para poder empezar su aventura de carrera ahora mismo. Vamos a ver como se prepara Sonic The Hedgehog para la carrera.<br/>
         (Sonic prepara su coche y Extreme Gear)<br/>
         Dodon Pa: Como te sientes, Sonic? Listo para empezar?<br/>
         Sonic: Pues claro. Ardo en sueños de ganar esa competencia y llevarme el premio a casa.<br/>
         Tails: Tan solo revisa tu Extreme Gear, vale Sonic? Siempre dejas la parte técnica a mí.<br/>
         Sonic: No te preocupes, ganaré esa competencia con los ojos cerrados.<br/>
         Knuckles: Venga, podemos empezar ya? Mi cuerpo rebosa de fuerza listo para correr. Venga, empecemos ya!<br/>
         Dodon Pa: Ya veo que estás animado. Prepárate, porque tu primer Grand Prix será contra Shadow.<br/>
      </p>
      <p>
        Shadow: No me esperaba que nos enfrentaramos a la primera de cambio, me servirás como calentamiento. Pero recuerda que yo, la forma
        de vida definitiva ganará esta competencia.<br/>
        Sonic: Je, eso ya lo veremos, Shadow<br/>
        Tails: Shadow y su Dark Reaper tiene velocidad mejorada que la última vez, te recomendaría que fueras a la personalización antes de empezar
        la carrera. También recuerda que necesitas equiparte un set de artilugios que te pueden ayudar a dar la vuelta a la tortilla<br/>
        Sonic: Perfecto! Me prepararé y le daré una buena a Shadow!<br/>
        Dodon Pa: Muy bien, todos a sus puestos. El Crossworlds Grand Prix comienza ya!
      </p>

      <p>
        (Al ganar el Gran Premio Donpa)
      </p>

      <p>
        DodonPa: Enhorabuena por ganar el Gran Premio Donpa, Sonic. Dinos, cómo se siente ganar al empezar la competencia?<br/>
        Sonic: Pues muy bien, en la parte final Shadow casi me adelanta.<br/>
        Shadow: Parece que has mejorado mucho, Sonic. Pero ni se te ocurra perder, quiero tomarme la revancha contigo al final de la competencia<br/>
        Sonic: Tú tampoco, Shadow. Espero que te esfuerces mucho.<br/>
        Shadow: Hum!<br/>
        DodonPa: Vaya, parece que los dos rivales esperan competir al final de la competencia. Bueno, el Crossworlds Grand Prix debe continuar, suerte con las carreras.
      </p>

      <p>
        (Al ganar los Gran Premio Wisp, Boo Boom y Calabaza)
      </p>

      <p>
        Sonic: Bien, gané 4 Grand Prix, si gano las otras tres pasaré a la siguiente clase.(Jet lo ve de una distancia)<br/>
        Jet: Ya veremos quien ríe el último, gané más que tú y estoy cerca de dirigirme a la última copa para derrotarte, Sonic The Hedgehog!
      </p>

      <p>
        (Al ganar la copa Coral)
      </p>

      <p>
        Sonic: Vaya, así que me enfrentaré a tí en la copa Crystal, eh, Knuckles?<br/>
        Knuckles: Preparate, Sonic! Esta vez yo te voy a ganar, vamos a resolver aquel encuentro en Angel Island!<br/>
        Sonic: Perfecto. Listo cuando tú lo estés.
      </p>

      <p>
        (Al ganar la Copa Crystal)
      </p>

      <p>
        Dodon Pa: Señoras y señores, Sonic ha ganado las seis copas y va a la DeathEgg Grand Prix para enfrentarse a su siguiente rival.<br/>
        Knuckles: Maldita sea, estaba a punto de ganarle. En fin, buena carrera, Sonic.<br/>
        Sonic: Igualmente, Knuckles!(Los dos se dan la mano)<br/>
        Wave: Vaya, así que encima esos dos siempre siguen siendo amigos después de una carrera tan bruta<br/>
        Jet: Da igual, ese Grand Prix es mío, Sonic The Hedgehog!<br/>
        Knuckles: Mejor dejaos de tonterías. Si queréis es una pelea, una pelea tendréis.<br/>
        Sonic: Jet! No me esperaba verte como rival en la DeathEgg Grand Prix.<br/>
        Jet: Pues aquí me tienes. Tú y yo vamos a solucionar esto.
      </p>

      <p>
        (Inicia la Death Egg Grand Prix en la velocidad alta(rápida))
      </p>

      <p>
        Dodon Pa: Por fin llega la Death Egg Grand Prix. Sonic y Jet se verán las caras en una rivalidad fuerte como el viento. El que gane
        esta pasará a la siguiente clase.
      </p>

      <p>
        (Sonic y Jet se preparan para correr)
      </p>

      <p>
        Jet: Estás listo, Sonic?<br/>
        Sonic: Preparado para que el halcón muerda el polvo. Vamos allá!
      </p>

      <p>
        (Al acabar el DeathEgg Grand Prix)
      </p>

      <p>
        Jet: No me lo puedo creer, he perdido contra Sonic??<br/>
        Sonic: Puede que tú tuviste suerte, pero yo he ganado.<br/>
        Jet: La próxima vez no perderé. Volveremos a encontrarnos en la clase definitiva, ya lo verás!<br/>
        Dodon Pa: Parece que el erizo azul ha pasado a la siguiente clase. La gente se pregunta contra qué corredores se va a enfrentar.
      </p>

       
        <HeaderSonic/>
          <Routes>
            <Route path="/Sonic" element={<Sonic/>}/>
            <Route path="/Sonic2" element={<Sonic2/>}/>
            <Route path="/Sonic3" element={<Sonic3/>}/>
          </Routes>
    </div>
  )
}

export default Sonic