import React from 'react'
import {Link} from 'react-router-dom'
const HeaderSage = () => {
  return (
    <nav>
        <div>
            <span>
                <Link to="/Sage">Velocidad alta(rápida)</Link>
            </span>
            /
            <span>
                <Link to="/Sage2">Velocidad Sonic</Link>
            </span>
            /
            <span>
                <Link to="/Sage3">Velocidad Super Sonic</Link>
            </span>
        </div>
    </nav>
  )
}

export default HeaderSage