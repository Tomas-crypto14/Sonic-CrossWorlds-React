import React from 'react'
import {Link} from 'react-router-dom'
const HeaderRouge = () => {
  return (
    <nav>
        <div>
            <span>
                <Link to="/Rouge">Velocidad alta(rápida)</Link>
            </span>
            /
            <span>
                <Link to="/Rouge2">Velocidad Sonic</Link>
            </span>
            /
            <span>
                <Link to="/Rouge3">Velocidad Super Sonic</Link>
            </span>
        </div>
    </nav>
  )
}

export default HeaderRouge