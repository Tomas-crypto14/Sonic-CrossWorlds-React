import React from 'react'
import HeaderEggman from '../../organisms/HeaderEggman'
import {Routes, Route} from 'react-router-dom'
import Eggman from './Eggman'
import Eggman3 from './Eggman3'
const Eggman2 = () => {
  return (
    <div id="container-race">
        <h2>Historia de Eggman</h2>
        <h3>Velocidad Sonic</h3>

        <p>
          (Al ganar el Boom Boo Grand Prix)
        </p>

        <p>
          Eggman: No me puedo creer, estoy ganando todas las copas hasta ahora? Y sin ningún truco sucio.<br/>
          Sage: Los datos indican que tu vehiculo puede con cualquier tipo de obstáculo que tengas en las carreras.<br/>
          Eggman: Je! Como no ganar sin tener a mi hija a mi lado, además derrotar a Vector en el Coral Grand Prix será pan comido.
          Por cierto, sabes que traman esos retorcidos zeti?<br/>
          Sage: Por desgracia, no. Parece que están planeando algo en secreto, pero es como si camuflaran su energía.<br/>
          Eggman: Grrr! Maldito Zavok, ya se dio cuenta de que eres inmune a su control de campo magnético.<br/>
          Sage: No importa. En fin, seguimos con la competencia?<br/>
          Eggman: Así es, cuando lleguemos a la última clase y derrotemos a Sonic, nosotros seremos los últimos en reír.<br/>
          Sage: Y saldrá tal como estaba previsto, padre.
        </p>

        <p>
          (Al ganar el Coral Grand Prix)
        </p>

        <p>
          Vector: Bueno, se siente la derrota, pero me debes dinero, sabes?<br/>
          Eggman: Vale, te la daré más tarde, joé.
        </p>

        <p>
          (Al ganar el Crystal Grand Prix)
        </p>

        <p>
          Eggman: Como? Me tengo que enfrentar a Omega para pasar a la sigueinte clase? Venga ya, hombre.<br/>
          Omega: Objetivo localizado, Eggman! Destruir!!! Destruir!!!
        </p>

        <p>
          (Al ganar el DeathEgg Grand Prix)
        </p>

        <p>
          Eggman: Toma ya, victoria, victoria! Me voy a la siguiente clase, si sigo así, serñe el campeón, toma, toma, toma!
        </p>
        <HeaderEggman/>
        <Routes>
            <Route path="/Eggman" element={<Eggman/>}/>
            <Route path="/Eggman2" element={<Eggman2/>}/>
            <Route path="/Eggman3" element={<Eggman3/>}/>
        </Routes>
    </div>
  )
}

export default Eggman2