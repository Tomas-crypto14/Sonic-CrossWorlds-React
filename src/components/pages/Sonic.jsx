import HeaderSonic from '../organisms/HeaderSonic'
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
        Dodon Pa: Muy bien, todos a sus puestos. eL Crossworlds Grand Prix comienza ya!
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