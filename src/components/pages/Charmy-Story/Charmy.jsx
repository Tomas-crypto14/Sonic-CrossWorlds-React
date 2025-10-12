import React from 'react'
import HeaderCharmy from '../../organisms/HeaderCharmy'
import {Routes, Route} from 'react-router-dom'
import Charmy2 from './Charmy2'
import Charmy3 from './Charmy3'
const Charmy = () => {
  return (
    <div id="container-race">
        <h2>Historia de Charmy</h2>
        <h3>Velocidad alta(rápida)</h3>

        <p>
          Charmy: Bien! Va a empezar la competencia! Voy a ganar el millón! Bien, bien!<br/>
          Vector: Charmy, relax! Si quieres ganar el dinero, tendrás que conseguirlo ganando las siete copas.<br/>
          Charmy: Ah, vale. Esto será fácil.
          Sage: Yo no diría eso.<br/>
          Charmy: Ahhh! Fantasma!<br/>
          Vector: No es un fantasma, Charmy. Es la hija inteligencia artifical de Eggman. Sage, no?<br/>
          Sage: Sí, es un placer. Muy pronto nos enfrentaremos en la competencia, así que prepárate a fondo<br/>
        </p>

        <p>
          (Al llegar al Death Egg GrandPrix)
        </p>

        <p>
          Charmy: Bien! Si gano esa, a la siguiente clase!<br/>
          Dr.Eggman: No tan rápido, abeja de hojalata! Primero tendrás que enfrentarme a mí.<br/>
          Charmy: Ayy, Eggman! Tú nos debes el dinero de la última vez!<br/>
          Dr.Eggman: Ya veremos quien ríe. Por haber derrotado a mi niña en el Crystal Grand Prix te daré el doble de fuerza!
        </p>

        <p>
          (Al ganar el DeathEgg Grand Prix)
        </p>

        <p>
          Dr.Eggman: No, he perdido! Lo siento, hija mía!<br/>
          Charmy: Bien! Bien! Paso a la siguiente clase! Vamos! Vamos!<br/>
          Dodon Pa: La abeja energética pasa a la siguiente clase, la competencia está que arde por momentos.
        </p>
        <HeaderCharmy/>
        <Routes>
          <Route path="/Charmy" element={<Charmy/>}/>
          <Route path="/Charmy2" element={<Charmy2/>}/>
          <Route path="/Charmy3" element={<Charmy3/>}/>
        </Routes>
    </div>
  )
}

export default Charmy