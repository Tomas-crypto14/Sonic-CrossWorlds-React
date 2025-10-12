import React from 'react'
import HeaderOmega from '../../organisms/HeaderOmega'
import {Routes, Route} from 'react-router-dom'
import Omega2 from './Omega2'
import Omega3 from './Omega3'
const Omega = () => {
  return (
    <div id="container-race">
        <h2>Historia de Omega</h2>
        <h3>Velocidad alta(rápida)</h3>

        <p>
          Omega: Preparado para competir en el Crossworlds Grand Prix. Objetivo: Ganar las 7 copas en las 3 clases y llevarnos el premio a casa<br/>
          Rouge: Recuerda, Omega. Tu arsenal de armas está prohibida en la competencia, no queremos que te metas en problemas, de acuerdo?<br/>
          Omega: Afirmativo<br/>
          Shadow: Crees que Omega seguirá las reglas? Si sale el EggPawn en la lista de Rival, tendremos un problema<br/>
          Rouge: Tranquilo, Shadow. Es el inicio de la competencia, que podría pasar?
        </p>

        <p>
          (Unos segundos después)
        </p>

        <p>
          Omega: Establecido EggPawn como rival. Eliminarlo inmediatamente!<br/>
          Shadow: Que te había dicho?<br/>
          Rouge: Eso es lo que te pasa por abrir esa bocaza.
        </p>

        <p>
          (Al ganar el Donpa Grand Prix)
        </p>

        <p>
          Omega: EggPawn eliminado!<br/>
          Shadow: Parece que la cosa ha salido bien.<br/>
          Knuckles: Si. Estaba a eso de freir a la competencia por un simple EggPawn.<br/>
          Tails: Es normal que Omega esté así, siempre le encanta eliminar a esas cosas.<br/>
          Omega: Tails y Knuckles, espero que estéis listos, siendo amigos de Shadow y Rouge, pienso derrotaros en esa competencia.<br/>
          Tails: Tranquilo, Omega, después de todas las veces que te he reparado.<br/>
          Rouge: Puede que Tails tenga algo de razón, venga Omega, hay que seguir con la competencia.<br/>
          Omega: Afirmativo.
        </p>

        <p>
          (Al llegar a la DeathEgg Grand Prix)
        </p>

        <p>
          Omega: Rival localizado: Tails Miles Prower!<br/>
          Tails: Preparate, Omega, no te lo pondré fácil.
        </p>

        <p>
          (Al ganar la DeathEgg Grand Prix)
        </p>

        <p>
          DodonPa: Parece que el robot ese del equipo Oscuro pasa a la siguiente clase.<br/>
          Omega: Ascenso a la velocidad Sonic, se recomienda parámetros de entrenamiento para preparación de siguientes carreras.
        </p>

        <HeaderOmega/>
        <Routes>
          <Route path="/Omega" element={<Omega/>}/>
          <Route path="/Omega2" element={<Omega2/>}/>
          <Route path="/Omega3" element={<Omega3/>}/>
        </Routes>
    </div>
  )
}

export default Omega