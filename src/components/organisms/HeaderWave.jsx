import React from 'react'
import {Link} from 'react-router-dom'
const HeaderWave = () => {
  return (
    <nav>
        <div>
            <span>
                <Link to="/Wave">Velocidad alta(rápida)</Link>
            </span>
            /
            <span>
                <Link to="/Wave2">Velocidad Sonic</Link>
            </span>
            /
            <span>
                <Link to="/Wave3">Velocidad Super Sonic</Link>
            </span>
        </div>
    </nav>
  )
}

export default HeaderWave