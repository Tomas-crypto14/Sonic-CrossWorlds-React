import React from 'react'
import {Link} from 'react-router-dom'
const HeaderCream = () => {
  return (
    <nav>
        <div>
            <span>
                <Link to="/Cream">Velocidad alta(rápida)</Link>
            </span>
            /
            <span>
                <Link to="/Cream2">Velocidad Sonic</Link>
            </span>
            /
            <span>
                <Link to="/Cream3">Velocidad Super Sonic</Link>
            </span>
        </div>
    </nav>
  )
}

export default HeaderCream