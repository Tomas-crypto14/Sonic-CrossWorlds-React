import HeaderTails from '../../organisms/HeaderTails'
import {Route, Routes} from 'react-router-dom'
import Tails2 from './Tails2'
import Tails3 from './Tails3'
const Tails = () => {
  return (
    <div id="container-race">
        <h2>Historia de Tails</h2>
        <h3>Velocidad alta(rápida)</h3>

        <p>Dodon Pa: El CrossWorlds Grand Prix ha comenzado y los corredores se han acostumbrado a las pistas de esta competencia.<br/>
         (Tails prepara su vehículo)<br/>
         Tails: Con las modificaciones que he puesto a mi vehículo, no tendré nada de que preocuparme.<br/>
         Wave: Ya veremos, listillo.<br/>
         Tails: Wave!<br/>
         Wave: Los rivales a los que te enfrentas son más veloces y muy astutos que nosotros, sobretodo yo, he ganado el Donpa Grand Prix 
         y estoy a eso de llevarme la segunda. Jajajaja!<br/>
         Tails: El Tails que conocéis es muy diferente al que habeis visto hace mucho tiempo. Os demostraré mi inteligencia y estrategia!
        </p>

        <p>
          (Al ganar los Donpa y Wisp Grand Prix)
        </p>

        <p>
          Dodon Pa: El zorro ha mejorado mucho, puedo ver su astucia.<br/>
          Dr.Eggman: Bueno es saberlo, Tails. Has cambiado mucho desde Starfall Islands.<br/>
          Tails: Que estás tramando, Eggman?<br/>
          Eggman: Si es por lo que hice con el motor de energía suprema, olvídalo. Por culpa de ese cacharro, mi fortaleza quedó destrozada.
          Pero prepárate porque en el siguiente Grand Prix te enfrentarás a mi creación, Metal Sonic!
        </p>

        <p>
          (Aparece Metal Sonic)
        </p>

        <p>
          Sage: Dice que esto será pan comido ya que es solo el ayudante de Sonic<br/>
          Tails: Ya veréis, en la carrera no os lo pondré nada fácil. (El Team Eggman se aleja) Tendré que personalizar mi vehículo
          debido a que mi velocidad es inferior al vehiculo de Metal
        </p>

        <p>
          (Al ganar el Boom Boo Grand Prix)
        </p>

        <p>
          Eggman: Qué? Han derrotado a Metal Sonic?<br/>
          Tails: Te dije que no me subestimaras, Eggman!<br/>
          Metal Sonic: ...!<br/>
          Sage: "Acepto la derrota, pero esto no se va a quedar así. Para seguir compitiendo, debo seguir las reglas".<br/>
          Tails: Bueno, rumbo a la cima! 
        </p>

        <p>
          (Al ganar los otros 3 Grand Prix(Calabaza, Coral y Crystal))
        </p>

        <p>
          Tails: Toma ya! Esos rivales no eran para nada fácil.<br/>
          Knuckles: Mira quien habla.<br/>
          Tails: Knuckles, que haces tú aquí?<br/>
          Knuckles: Me enfrentaré a ti en la DeathEgg Grand Prix. Prepárate, porque no seré tan blando como Sonic!<br/>
          Tails: Ya me esperaba que me enfrentaría a alguien bueno para pasar a la siguiente clase. Pero da igual, porque yo voy a ganar esta. 
        </p>

        <p>
          (Al ganar la DeathEgg Grand Prix)
        </p>

        <p>
          Tails: Bien, he pasado a la siguiente clase<br/>
          Knuckles: Grrr! Fue buena carrera, pero la próxima vez te derrotaré!<br/>
          Tails: Sigue soñando, Knuckles. Ahora, a prepararme para la siguiente clase.
        </p>

        <HeaderTails/>
          <Routes>
            <Route path="/Tails" element={<Tails/>}/>
            <Route path="/Tails2" element={<Tails2/>}/>
            <Route path="/Tails3" element={<Tails3/>}/>
          </Routes>
    </div>
  )
}

export default Tails