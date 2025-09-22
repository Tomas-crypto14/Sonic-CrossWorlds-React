import React from 'react'
import {Link} from 'react-router-dom'
const HeaderZavok = () => {
  return (
    <nav>
        <div>
            <span>
                <Link to="/Zavok">Velocidad alta(rápida)</Link>
            </span>
            /
            <span>
                <Link to="/Zavok2">Velocidad Sonic</Link>
            </span>
            /
            <span>
                <Link to="/Zavok3">Velocidad Super Sonic</Link>
            </span>
        </div>
    </nav>
  )
}

export default HeaderZavok