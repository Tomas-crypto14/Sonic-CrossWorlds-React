import React from 'react'
import HeaderBlaze from '../../organisms/HeaderBlaze'
import {Routes, Route} from 'react-router-dom'
import Blaze2 from './Blaze2'
import Blaze3 from './Blaze3'
const Blaze = () => {
  return (
    <div id="container-race">
        <h2>Historia de Blaze</h2>
        <h3>Velocidad alta(rápida)</h3>

        <p>
          Blaze: Perfecto, estoy aquí para ganar esa competencia y llevarme las Chaos Emeralds. Quién sabe, quizás me las lleve
          a mi dimensión y así dárselas a Sonic y a los demás en un futuro en caso de que eso pase. Nah, solo bromeaba.<br/>
          Cream: Hola, Blaze.<br/>
          Blaze: Cream! Como te encuentras?<br/>
          Cream: Muy bien! Espio me está cuidando mientras estoy en la competencia, así qué no tienes de que preocuparte, yo me defiendo bien
          en las carreras.<br/>
          Blaze: Perfecto entonces, gracias Cream! Bien, a correr.
        </p>

        <p>
          (Al ganar el Coral Grand Prix)
        </p>

        <p>
          Blaze: No me esperaba que en un circuito como este estuviera parte de mi hogar. Dodon Pa se ha currado con las simulaciones antes
          de la competencia.<br/>
          Amy: Hola, Blaze!<br/>
          Blaze: Amy! Te vas a enfrentar conmigo en el siguiente Gran Premio?<br/>
          Amy: Pues claro! He mejorado mi conducción desde el otro Grand Prix, prepárate!<br/>
          Blaze: Jeje! Como quieras.
        </p>

        <p>
          (Al ganar el Crystal Grand Prix)
        </p>

        <p>
          Amy: Yipeee! Ha sido divertido, espero que nos enfrentemos la próxima vez, te pienso ganar.<br/>
          Blaze: Jejeje, ya lo veremos.<br/>
          Zavok: No me fastidies. No crees que deberías prepararte a conciencia? Te vas a enfrentar a mí ahora, princesita<br/>
          Amy: Contra Zavok? No fastidies.<br/>
          Zavok: Ha sido algo de mala suerte que nos topáramos aquí y ahora. Prepárate, a diferencia de Eggman no seré blando contigo. Jajajaja!<br/>
          Knuckles: Blaze, ten cuidado con Zavok, aunque su habilidad sea similar a la tuya, ha mejorado su conducción que la última vez.
          Blaze: Descuidad, yo también mejoré mis habilidades de conducción al volver a casa y al estar de vacaciones.
        </p>

        <p>
          (Al llegar al DeathEgg Grand Prix)
        </p>

        <p>
          Zavok: Listo para ser derrotada? Ahora verás todo mi poder!<br/>
          Blaze: Inténtalo si te atreves.
        </p>

        <p>
          (Al ganar el DeathEgg Grand Prix)
        </p>

        <p>
          Zavok: No puede ser, he perdido contra una princesa y encima de otra dimensión?<br/>
          Blaze: Se siente, el dicho es no jugar el fuego con el fuego, o es jugar el fuego con el fuego?<br/>
          Zavok: Grrr! Pagarás por esto!
          Amy: Lo has conseguido, Blaze! Has pasado a la siguiente clase!
          Blaze: Sí, espero seguir con la competencia.
        </p>
        <HeaderBlaze/>
        <Routes>
          <Route path="/Blaze" element={<Blaze/>}/>
          <Route path="/Blaze2" element={<Blaze2/>}/>
          <Route path="/Blaze3" element={<Blaze3/>}/>
        </Routes>
    </div>
  )
}

export default Blaze