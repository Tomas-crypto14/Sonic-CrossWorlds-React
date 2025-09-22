import React from 'react'
import {Link} from 'react-router-dom'
const HeaderBlaze = () => {
  return (
    <nav>
        <div>
            <span>
                <Link to="/Blaze">Velocidad alta(rápida)</Link>
            </span>
            /
            <span>
                <Link to="/Blaze2">Velocidad Sonic</Link>
            </span>
            /
            <span>
                <Link to="/Blaze3">Velocidad Super Sonic</Link>
            </span>
        </div>
    </nav>
  )
}

export default HeaderBlaze