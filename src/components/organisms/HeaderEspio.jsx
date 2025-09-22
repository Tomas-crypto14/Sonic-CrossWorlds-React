import React from 'react'
import {Link} from 'react-router-dom'
const HeaderEspio = () => {
  return (
    <nav>
        <div>
            <span>
                <Link to="/Espio">Velocidad alta(rápida)</Link>
            </span>
            /
            <span>
                <Link to="/Espio2">Velocidad Sonic</Link>
            </span>
            /
            <span>
                <Link to="/Espio3">Velocidad Super Sonic</Link>
            </span>
        </div>
    </nav>
  )
}

export default HeaderEspio