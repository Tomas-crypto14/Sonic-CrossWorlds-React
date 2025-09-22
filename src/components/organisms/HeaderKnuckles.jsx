import React from 'react'
import {Link} from 'react-router-dom'
const HeaderKnuckles = () => {
  return (
    <nav>
        <div>
            <span>
                <Link to="/Knuckles">Velocidad alta(rápida)</Link>
            </span>
            /
            <span>
                <Link to="/Knuckles2">Velocidad Sonic</Link>
            </span>
            /
            <span>
                <Link to="/Knuckles3">Velocidad Super Sonic</Link>
            </span>
        </div>
    </nav>
  )
}

export default HeaderKnuckles