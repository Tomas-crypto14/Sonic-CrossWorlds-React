import React from 'react'
import HeaderZavok from '../../organisms/HeaderZavok'
import {Routes, Route} from 'react-router-dom'
import Zavok from './Zavok'
import Zavok3 from './Zavok3'
const Zavok2 = () => {
  return (
    <div id="container-race">
        <h2>Historia de Zavok</h2>
        <h3>Velocidad Sonic</h3>

        <p>
          (Al llegar el Donpa Grand Prix)
        </p>

        <p>
          Zavok: Así que ahora me enfrento a Zazz, me esperaba un rival digno.
        </p>

        <p>
          (Al ganar el Donpa Grand Prix)
        </p>

        <p>
          Zavok: Menudo desastre, es normal que todo no se puede arreglar si yo no estoy aquí, a este ritmo no derrotaremos a Sonic!<br/>
          Zazz: Si? Y qué?<br/>
          Zavok: Que dejen de hacer el tonto, ahora tendremos que usar la fuerza bruta para que Sonic se enfrente a mí en la siguiente clase.
          Y sé como hcaerlo, chicos, para que eso ocurra, aplastaremos a sus mejores amigos uno por uno, empezando por el equidna ese.<br/>
        </p>

        <p>
          (Al ganar el Wisp Grand Prix)
        </p>

        <p>
          Knuckles: No puede ser! Ten cuidado, Sonic! No es un zeti cualquiera.<br/>
          Zavok: Ja! No me sirves ni como calentamiento. La siguiente es Amy, me enfrentaré a ella seguro que en el Coral Grand Prix
        </p>

        <p>
          (Al ganar el Coral Grand Prix)
        </p>

        <p>
          Amy: Lo siento, Sonic.<br/>
          Zavok: Jajajajaja! Conque cartas de la fortuna? No me hagas reír. Dos menos, solo queda su mejor amigo.
        </p>

        <p>
          (Al llegar al DeathEgg Grand Prix)
        </p>

        <p>
          Zavok: Hola, Tails.<br/>
          Tails: Zavok! Has hecho algo a Knuckles y Amy?<br/>
          Zavok: Si te refieres a tus amigos, estan bien, solo les he derrotado como un camino para derrotar a tu amigo, Sonic.<br/>
          Tails: Oye, como lo provoqueis después de lo que pasó en Héxagon, os juro...<br/>
          Zavok: No te preocupes por lo de la otra vez, esta vez no lo provocaremos, tan solo gritará de rabia cuando te vea aplastado
          por mí, jajajajajaja!<br/>
          Tails: Ya lo veremos!
        </p>

        <p>
          (Al ganar el DeathEgg Grand Prix)
        </p>
        
        <p>
          Tails: Lo siento, Sonic, todo depende de ti.<br/>
          Zavok: Je, por fin sus amigos derrotados. Te toca, Sonic!
        </p>

        <HeaderZavok/>
        <Routes>
            <Route path="/Zavok" element={<Zavok/>}/>
            <Route path="/Zavok2" element={<Zavok2/>}/>
            <Route path="/Zavok3" element={<Zavok3/>}/>
        </Routes>
    </div>
  )
}

export default Zavok2