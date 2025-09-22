import React from 'react'
import {Link} from 'react-router-dom'
const HeaderEggPawn = () => {
  return (
    <nav>
        <div>
            <span>
                <Link to="/EggPawn">Velocidad alta(rápida)</Link>
            </span>
            /
            <span>
                <Link to="/EggPawn2">Velocidad Sonic</Link>
            </span>
            /
            <span>
                <Link to="/EggPawn3">Velocidad Super Sonic</Link>
            </span>
        </div>
    </nav>
  )
}

export default HeaderEggPawn