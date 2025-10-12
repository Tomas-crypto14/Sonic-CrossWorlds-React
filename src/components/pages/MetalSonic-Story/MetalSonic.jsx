import React from 'react'
import HeaderMetalSonic from '../../organisms/HeaderMetalSonic'
import {Routes, Route} from 'react-router-dom'
import MetalSonic2 from './MetalSonic2'
import MetalSonic3 from './MetalSonic3'
const MetalSonic = () => {
  return (
    <div id="container-race">
        <h2>Historia de Metal Sonic</h2>
        <h3>Velocidad alta(rápida)</h3>

        <p>
          Metal Sonic: ...<br/>
          Sage: Tal y como ves, Metal Sonic, estamos en el Crossworlds Grand Prix, aquí nuestro objetivo es ganar la competencia
          y ganar el dinero, de acuerdo?<br/>
          Metal Sonic: ...!<br/>
          Dr.Eggman: Vosotros disfrutad de la competencia, es una oportunidad para conocer mejor a vuestros oponentes y además, podréis
          disfrutar mucho de la experiencia.<br/>
          Sage: Entendido.
        </p>

        <p>
          (Al ganar el Donpa, Wisp, Boom Boo, Calabaza y Coral Grand Prix)
        </p>

        <p>
          Sage: Detecto sospechas de que los Mortíferos Seis no están aquí solo para disfrutar de la competencia.<br/>
          Metal Sonic: ...!<br/>
          Sage: Crees que será solo por las Chaos Emeralds, Metal?<br/>
          Metal Sonic: ...<br/>
          Sage: Por si acaso, intentaré investigarlo. Mientras tanto, concéntrate en la carrera.
        </p>

        <p>
          (Al llegar al DeathEgg Grand Prix)
        </p>

        <p>
          Sage: Tu adversario esta vez será Amy Rose, la amiga de Sonic. Según los datos de la EggNet, la secuestraste hace años.<br/>
          Metal Sonic: ...!<br/>
          Sage: Mi recomendación es que no uses fuerza bruta contra ella, solo utiliza los objetos que hay en la pista y domina la carrera<br/>
          Amy: Guau, Sage dando consejos a Metal Sonic? Esto sí que no me lo esperaba.
        </p>

        <p>
          (Al ganar el DeathEgg Grand Prix)
        </p>

        <p>
          Metal Sonic: ...!<br/>
          Amy: Porras, se ha vuelto más rápido que antes.<br/>
          Sage: Mi hermano Metal Sonic pasa a la siguiente clase. No es la primera vez que me siento feliz por él.
        </p>

        <HeaderMetalSonic/>
        <Routes>
          <Route path="/MetalSonic" element={<MetalSonic/>}/>
          <Route path="/MetalSonic2" element={<MetalSonic2/>}/>
          <Route path="/MetalSonic3" element={<MetalSonic3/>}/>
        </Routes>
    </div>
  )
}

export default MetalSonic