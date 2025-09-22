import React from 'react'
import {Link} from 'react-router-dom'
const HeaderKnuckles = () => {
  return (
    <nav>
        <div>
            <span>
                <Link to="/Kncukles">Velocidad alta(rápida)</Link>
            </span>
            /
            <span>
                <Link to="/Knuckles2">Velocidad Sonic</Link>
            </span>
            /
            <span>
                <Link to="/Kncukles3">Velocidad Super Sonic</Link>
            </span>
        </div>
    </nav>
  )
}

export default HeaderKnuckles