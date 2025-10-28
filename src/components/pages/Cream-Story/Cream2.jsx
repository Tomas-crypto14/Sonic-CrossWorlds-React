import React from 'react'
import HeaderCream from '../../organisms/HeaderCream'
import {Routes, Route} from 'react-router-dom'
import Cream from './Cream'
import Cream3 from './Cream3'

const Cream2 = () => {
  return (
    <div id="container-race">
        <h2>Historia de Cream</h2>
        <h3>Velocidad Sonic</h3>

        <p>
          Cream: A partir de aquí, la carrera se complica mucho, Cheese, tenemos que esfozarnos
          y preparar nuestro vehículo para ganar.<br/>
          Jet: Y encima me tendré que enfrentarte a tí luego, conejita.<br/>
          Cream: Oh, no, es el Sr.Jet!<br/>
          Storm: Jefe! Deje que me encarge de ella primero.<br/>
          Jet: Je, si tu quieres.<br/>
          Cream: Me puedo enfrentar a dos de vosotros por igual, vamos a competir.
        </p>

        <p>
          (Al ganar el Donpa Grand Prix)
        </p>

        <p>
          Storm: No! He perdido contra ella, no me lo puedo creer!<br/>
          Jet: Aggghh! Como siempre. Ya me encargaré de derrotarla, ya.
        </p>

        <p>
          (Al llegar al Wisp Grand Prix)
        </p>

        <p>
          Jet: Preparate, conejita, voy a a`lastarte par que vuelvas a tu casa a llorar a tu mamá.<br/>
          Cream: Mi mamá sabe que estoy aquí y está muy orgullosa, pienso ganar para que lo esté todavía más.
        </p>

        <p>
          (Al ganar el Wisp Grand Prix)
        </p>

        <p>
          Jet: No! He perdido? Nooo!<br/>
          Cream: Haber sido respetuoso con la derrota!<br/>
          Jet: Ayyyy! Noooo!
        </p>

        <p>
          (Al ganar el Crystal Grand Prix)
        </p>

        <p>
          Cream: Si gano la DeathEgg Grand Prix, pasaré a la clase más alta y peligrosa.<br/>
          Vector: Primero tendrás que derrotarme primero, Cream!<br/>
          Cream: Ahhh, el Sr.Vector! Como te va?<br/>
          Vector: Aunque seamos amigos, no me contendré contigo, preparate para perder!<br/>
          Cream: Ya veremos quién gana, seguro que mamá nos está viendo.<br/>
          Vector: Vanilla?! Ay, no! Qué hago ahora?
        </p>

        <p>
          (Al ganar el DeathEgg Grand Prix)
        </p>

        <p>
          Cream: Bieeeen! Rumbo a la siguiente clase, un paso más de ser campeona.<br/>
          Vector: Jejeje, Vanilla, tu hija ha crecido mucho.
        </p>

        <HeaderCream/>
        <Routes>
            <Route path="/Cream" element={<Cream/>}/>
            <Route path="/Cream2" element={<Cream2/>}/>
            <Route path="/Cream3" element={<Cream3/>}/>
        </Routes>
    </div>
  )
}

export default Cream2