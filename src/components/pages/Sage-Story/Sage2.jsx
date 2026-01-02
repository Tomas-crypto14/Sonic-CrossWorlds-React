import React from 'react'
import HeaderSage from '../../organisms/HeaderSage'
import {Routes, Route} from 'react-router-dom'
import Sage from './Sage'
import Sage3 from './Sage3'
const Sage2 = () => {
  return (
    <div id="container-race">
        <h2>Historia de Sage</h2>
        <h3>Velocidad Sonic</h3>

        <p>
          (Al llegar al Wisp Grand Prix)
        </p>

        <p>
          Knuckles: Eh, Sage, me voy a enfrentar a ti, asi que más te vale estar preparada.<br/>
          Sage: El equidna rojo, según mis investigaciones, eras el último de la especie equidna.
        </p>

        <p>
          (Al ganar el Wisp Grand Prix)
        </p>

        <p>
          Sage: Puedes decirme que acto hizo tu raza para que se extinga de esa manera?<br/>
          Knuckles: Querían deshacerse de los Chao, cosa que desencadenó a la criatura Chaos, el líder Pachacamac los trató como una mala
          influencia.<br/>
          Sage: Pero Sonic demostró que no era necesario acabar con la bestia, no?<br/>
          Knuckles: Pues claro, demostrándole a Pachacamac que estaba equivocado. No te preocupes, tengo a mis amigos de mi lado.<br/>
          Sage: Incluidos los míos, no?<br/>
          Knuckles: Hombre, tienes a Orbot a Cubot, a Metal Sonic. Tienes de todo.<br/>
          Sage: Creo que después de la competencia me encantaría divertirme con mis compañeros robot.
        </p>

        <p>
          (Al ganar el Coral Grand Prix)
        </p>

        <p>
          Cream: Hola, tú eres la hija artificial de Eggman, no? Encantada, me llamo Cream.<br/>
          Sage: Sí, Amy me habló de ti. Espero que tengamos una carrera limpia.
        </p>

        <p>
          (Al ganar el Crystal Grand Prix)
        </p>

        <p>
          Cream: Menuda carrera, felicidades. Gracias a ti, me he divertido mucho en el Chao Park.<br/>
          Sage: Así que esa es la amistad que aumenta cuando te lo pasas bien con alguien de confianza. Interesante.<br/>
          Shadow: Bueno, creo que me tocará a mí ahora.
        </p>

        <p>
          (Al llegar al DeathEgg Grand Prix)
        </p>

        <p>
          Sage: La forma de vida definitiva, no me esperaba verte por aquí.<br/>
          Shadow: La hija del doctor, eh? Prepárate.
        </p>

        <p>
          (Al ganar el DeathEgg Grand Prix)
        </p>

        <p>
          Shadow: Menuda derrota, increíble.<br/>
          Sage: Paso a la siguiente clase, esto no me lo esperaba.
        </p>

        <HeaderSage/>
        <Routes>
            <Route path="/Sage" element={<Sage/>}/>
            <Route path="/Sage2" element={<Sage2/>}/>
            <Route path="/Sage3" element={<Sage3/>}/>
        </Routes>
    </div>
  )
}

export default Sage2