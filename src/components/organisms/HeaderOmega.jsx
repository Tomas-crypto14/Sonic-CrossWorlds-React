import React from 'react'
import {Link} from 'react-router-dom'
const HeaderOmega = () => {
  return (
    <nav>
        <div>
            <span>
                <Link to="/Omega">Velocidad alta(rápida)</Link>
            </span>
            /
            <span>
                <Link to="/Omega2">Velocidad Sonic</Link>
            </span>
            /
            <span>
                <Link to="/Omega3">Velocidad Super Sonic</Link>
            </span>
        </div>
    </nav>
  )
}

export default HeaderOmega