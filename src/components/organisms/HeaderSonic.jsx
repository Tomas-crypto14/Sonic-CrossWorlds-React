import React from 'react'
import {Link} from 'react-router-dom'
const HeaderSonic = () => {
  return (
    <nav>
        <div>
            <span>
                <Link to="/Sonic">Velocidad alta(rápida)</Link>
            </span>
            /
            <span>
                <Link to="/Sonic2">Velocidad Sonic</Link>
            </span>
            /
            <span>
                <Link to="/Sonic3">Velocidad Super Sonic</Link>
            </span>
        </div>
    </nav>
  )
}

export default HeaderSonic