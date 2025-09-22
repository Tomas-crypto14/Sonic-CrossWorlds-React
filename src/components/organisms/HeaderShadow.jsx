import React from 'react'
import {Link} from 'react-router-dom'
const HeaderShadow = () => {
  return (
    <nav>
        <div>
            <span>
                <Link to="/Shadow">Velocidad alta(rápida)</Link>
            </span>
            /
            <span>
                <Link to="/Shadow2">Velocidad Sonic</Link>
            </span>
            /
            <span>
                <Link to="/Shadow3">Velocidad Super Sonic</Link>
            </span>
        </div>
    </nav>
  )
}

export default HeaderShadow