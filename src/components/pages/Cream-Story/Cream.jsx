import React from 'react'
import HeaderCream from '../../organisms/HeaderCream'
import {Routes, Route} from 'react-router-dom'
import Cream2 from './Cream2'
import Cream3 from './Cream3'
const Cream = () => {
  return (
    <div id="container-race">
        <h2>Historia de Cream</h2>
        <h3>Velocidad alta(rápida)</h3>

        <p>
          Cream: Que bien, Cheese! Allí está la pista de carreras, aquí competiran los corredores para ver quien es el mejor. Vamos a ganarlo.<br/>
          Espio: Cream, no te alejes de mí cuando haya tiempo libre. Le dije a tu madre que te acompañaría.<br/>
          Cream: Es verdad, Señor Espio, gracias.<br/>
          Vector: Bueno, si ella está con nosotros, habrá posibilidades de tener el dinero si nos lo comparte, no?<br/>
          (Charmy y Espio le miran)<br/>
          Dodon Pa: Cream y Cheese, acudan a la pista.<br/>
          Cream: Que bien, nos llaman. Vamos!
        </p>

        <p>
          (Al ganar el Dodon Pa, Wisp y Boom Boo Grand Prix)
        </p>

        <p>
          Cream: Qué bien, Cheese! Estamos ganando carreras y además estamos avanzando en la competencia.<br/>
          Cheese: Chao, chao!<br/>
          Vector: Vaya, yo pensaba que era más buena con el Extreme Gear<br/>
          Espio: Parece que ha aprendido mucho de Sonic y los demás.<br/>
          Jet: Sí, sí, que gran espectáculo, gracias, gracias. Pero que os quede claro que Wave está a punto de llegar a la última de las copas
          y ya sabéis, su Extreme Gear es muy avanzada que el que tiene vuestra amiguita.<br/>
          Cream: Eh! Que te lo has creído, Cheese y yo seguiremos ganando y nos enfrentaremos a la Señora Wave!<br/>
          Jet: Jajajajajaja!<br/>
          Espio: Cream, reserva esa ira cuando te enfrentes a ella.<br/>
          Cream: Está bien. Venga, Cheese, vamos.
        </p>

        <p>
          (Al llegar a la DeathEgg Grand Prix)
        </p>

        <p>
          Jet: Apuesto a que le costó las otras pistas y se fue a su casa a llorar, jajajaja!<br/>
          Wave: Siempre así, Jet?<br/>
          Jet: Porqué lo dices?(Wave señala a Cream)<br/>
          Cream: Estoy listo para enfrentarme a ti, señora Wave!<br/>
          Jet: Grrr!! No podemos dejar que esa cría gane, y Wave, ya sabes lo que tienes que hacer.<br/>
          Wave: Yo seré la única que llegará a la siguiente clase, prepárate para ser derrotada!
        </p>

        <p>
          (Al ganar el DeathEgg Grand Prix)
        </p>

        <p>
          Jet: Qué? Wave... ha perdido?<br/>
          Wave: Arrrgh! Qué rabia!<br/>
          Cream: Qué bien, Cheese, ganamos, ganamos! Hemos pasado a la siguiente clase.
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

export default Cream