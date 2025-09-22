import React from 'react'
import {Link} from 'react-router-dom'
const HeaderCharmy = () => {
  return (
    <nav>
        <div>
            <span>
                <Link to="/Charmy">Velocidad alta(rápida)</Link>
            </span>
            /
            <span>
                <Link to="/Charmy2">Velocidad Sonic</Link>
            </span>
            /
            <span>
                <Link to="/Charmy3">Velocidad Super Sonic</Link>
            </span>
        </div>
    </nav>
  )
}

export default HeaderCharmy