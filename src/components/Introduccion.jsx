import React from 'react'
import {Link} from 'react-router-dom'
const Introduccion = () => {
  return (
    <div id="container-race">
        <div className="image-container">
            <img src="./src/assets/Dodon_Pa.webp" width="200px" height="200px"/>
        </div>
        <p>
        Hola, soy DodonPa, os acordáis de mí, no? Soy el de Team Sonic Racing, el del Reino de Donpa 
        y el lider de DodonPa Motors, como recordaréis en el juego anterior Team Sonic Racing, los corredores
        corrieron para llenar el Motor de Energía Suprema, pero en un despiste, el doctor malvado me secuestró
        y con el motor lleno, lo utilizó en su maquina DeathEgg para derrotar al erizo corredor, pero el equipo Sonic
        lo derrotó y me salvaron la vida. Al terminar las carreras, estaban ansiosos de volver a correr en un Grand Prix
        mejor que este, y gracias al tiempo esperado llegó el momento
        </p>
        <p>
        Así es, amigos míos, 23 corredores de la franquicia de Sonic 
        se reunirán para competir en la competencia más competitiva, vertiginosa, rivalizada y peligrosa,
        el CrossWorlds Grand Prix. El ganador de esta competencia se llevará una pasta gansa de un millón de dolares
        y el tesoro legendario que obtuvimos para animar más la competencia, las 7 Chaos Emeralds.
        </p>
        <p>
        Las reglas de la competencia son las siguientes: En esta competencia hay 7 Grand Prix en total con 3 clases dependiendo de su velocidad
        de cilindrada y los que consigan las 7 copas pasarán a la siguente clase. Cada vez que jugais un Grand Prix se os sorteará un rival
        para que podáis disfrutar de carreras épicas, y por último, 
        el que gane la competencia se llevará el premio en metálico y las 7 Chaos Emeralds en persona
        </p>
        <div className="image-container">
            <img src="./src/assets/Million_dollars.webp" width="200px" height="200px"></img>
            <img src="./src/assets/Chaos_Emeralds.webp" width="200px" height="200px"></img>
        </div>
        <Link to="/Prologo">Prologo</Link>
    </div>
  )
}

export default Introduccion