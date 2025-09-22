import React from 'react'
import {Link} from 'react-router-dom'
const HeaderZazz = () => {
  return (
    <nav>
        <div>
            <span>
                <Link to="/Zazz">Velocidad alta(rápida)</Link>
            </span>
            /
            <span>
                <Link to="/Zazz2">Velocidad Sonic</Link>
            </span>
            /
            <span>
                <Link to="/Zazz3">Velocidad Super Sonic</Link>
            </span>
        </div>
    </nav>
  )
}

export default HeaderZazz