import React from 'react'
import HeaderBig from '../../organisms/HeaderBig'
import {Routes, Route} from 'react-router-dom'
import Big2 from './Big2'
import Big3 from './Big3'
const Big = () => {
  return (
    <div id="container-race">
        <h2>Historia de Big</h2>
        <h3>Velocidad alta(rápida)</h3>

        <p>
          Big: Eh, de vuelta Dodon Pa, extrañaba a ese tío.<br/>
          Dodon Pa: Hola, muchacho. Listo para volver a correr<br/>
          Big: Pues claro!<br/>
          Dodon Pa: Y tu rana?<br/>
          Big: Ah, Froggy, se marea cuando acelero mucho, así que se ha quedado en casa, por lo menos le di la comida necesaria
          hasta que vuelva. En fin, a competir.
        </p>

        <p>
          (Al ganar los 6 Grand Prix)
        </p>

        <p>
          Dodon Pa: Perfecto, parece que Big The Cat está a un paso de llegar a la siguiente clase. Como te sientes?<br/>
          Big: Fenomenal, estoy superfeliz. Contra quien me enfrentaré ahora?<br/>
          Dodon Pa: Contra el equidna rojo.<br/>
          Big: Ah, debe ser el amigo ese de Amy. Knuckles, no?<br/>
          Knuckles: Acertaste, chaval. Espero que estés listo.
        </p>

        <p>
          (Al ganar el DeathEgg Grand Prix)
        </p>
        
        <p>
          Knuckles: Imposible, he perdido contra Big?<br/>
          Amy: Jajajaja, no me puedo creer que no hayas podido contra él.<br/>
          Knuckles: Uy, ya verás, ya!<br/>
          Dodon Pa: Felicidades, Big! Pasas a la siguiente clase.<br/>
          Big: Bieeeen!
        </p>
        <HeaderBig/>
        <Routes>
          <Route path="/Big" element={<Big/>}/>
          <Route path="/Big2" element={<Big2/>}/>
          <Route path="/Big3" element={<Big3/>}/>
        </Routes>
    </div>
  )
}

export default Big