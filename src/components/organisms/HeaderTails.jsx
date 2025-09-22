import React from 'react'
import {Link} from 'react-router-dom'
const HeaderTails = () => {
  return (
    <nav>
        <div>
            <span>
                <Link to="/Tails">Velocidad alta(rápida)</Link>
            </span>
            /
            <span>
                <Link to="/Tails2">Velocidad Sonic</Link>
            </span>
            /
            <span>
                <Link to="/Tails3">Velocidad Super Sonic</Link>
            </span>
        </div>
    </nav>
  )
}

export default HeaderTails