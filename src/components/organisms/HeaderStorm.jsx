import React from 'react'
import {Link} from 'react-router-dom'
const HeaderStorm = () => {
  return (
    <nav>
        <div>
            <span>
                <Link to="/Storm">Velocidad alta(rápida)</Link>
            </span>
            /
            <span>
                <Link to="/Storm2">Velocidad Sonic</Link>
            </span>
            /
            <span>
                <Link to="/Storm3">Velocidad Super Sonic</Link>
            </span>
        </div>
    </nav>
  )
}

export default HeaderStorm