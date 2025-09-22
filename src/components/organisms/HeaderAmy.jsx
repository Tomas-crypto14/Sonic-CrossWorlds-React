import React from 'react'
import {Link} from 'react-router-dom'
const HeaderAmy = () => {
  return (
    <nav>
        <div>
            <span>
                <Link to="/Amy">Velocidad alta(rápida)</Link>
            </span>
            /
            <span>
                <Link to="/Amy2">Velocidad Sonic</Link>
            </span>
            /
            <span>
                <Link to="/Amy3">Velocidad Super Sonic</Link>
            </span>
        </div>
    </nav>
  )
}

export default HeaderAmy