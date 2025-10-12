import HeaderKnuckles from '../../organisms/HeaderKnuckles'
import {Route, Routes} from 'react-router-dom'
import Knuckles2 from './Knuckles2'
import Knuckles3 from './Knuckles3'
const Knuckles = () => {
  return (
    <div id="container-race">
        <h2>Historia de Knuckles</h2>
        <h3>Velocidad alta(rápida)</h3>
        <p>
          Dodon Pa: El Crossworlds Grand Prix está a punto de comenzar. Corredores, a vuestros puestos<br/>
          Knuckles: Así que el ganador también se llevará las 7 Chaos Emeralds aparte del dinero? Mola!<br/>
          Rouge: Cuidadito, equidna rojo, este dinero pronto será mío.<br/>
          Knuckles: Murcielagita, tú te apuntaste a esta competencia por las Emeralds así que no te hagas la chulita. Debo prepararme para lo que se viene.
        </p>

        <p>
          (Al ganar el Boom Boo Grand Prix contra Rouge)
        </p>

        <p>
          Rouge: Vaya, no me puedo creer que haya perdido.<br/>
          Knuckles: Cuando quieras la revancha, ya nos encontraremos.
        </p>

        <p>
          (Al llegar al Grand Prix Crystal)
        </p>

        <p>
          Knuckles: Me pregunto contra quién me enfrentaré ahora<br/>
          Sonic: Sorpresa, Knuckles!<br/>
          Knuckles: Sonic? Qué haces tú aquí?<br/>
          Sonic: Pues muy fácil, me enfrentaré a ti en la siguiente copa, no te lo pondré fácil.<br/>
          Knuckles: Por fin quería solucionar eso contigo. Venga, vamos allá.
        </p>

        <p>
          (Al ganar el Grand Prix Crystal)
        </p>

        <p>
          Sonic: En serio? He perdido?
          Knuckles: Jajaja! Te lo dije, Sonic, has mordido el polvo.
          Dodon Pa: Veo que estás muy emocionado cuando te enfrentas a rivales fuertes.<br/>
          Knuckles: Así es, Dodon Pa. Contra quién me enfrentaré en la Death Egg Grand Prix para pasar a la siguiente clase?<br/>
          Dodon Pa: Jojojo, pues contra el cocodrilo, ganó esa copa antes que tú.<br/>
          Knuckles: Vector?<br/>
          Vector: Así es, compadre, me enfrentaré a ti. A ver cual es el más fuerte y potente.<br/>
          Knuckles: Jeje, ya lo veremos.<br/>
        </p>

        <p>
          (Al ganar el DeathEgg Grand Prix)
        </p>

        <p>
          Knuckles: Toma ya, a la siguiente clase.<br/>
          Vector: Esto ha sido un escándalo.<br/>
          Dodon Pa: El equidna rojo pasa a la siguiente clase. Eso nadie se lo podría haber esperado.
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

export default Knuckles