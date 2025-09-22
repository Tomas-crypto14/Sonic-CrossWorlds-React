import React from 'react'
import {Link} from 'react-router-dom'
const HeaderSilver = () => {
  return (
    <nav>
        <div>
            <span>
                <Link to="/Silver">Velocidad alta(rápida)</Link>
            </span>
            /
            <span>
                <Link to="/Silver2">Velocidad Sonic</Link>
            </span>
            /
            <span>
                <Link to="/Silver3">Velocidad Super Sonic</Link>
            </span>
        </div>
    </nav>
  )
}

export default HeaderSilver