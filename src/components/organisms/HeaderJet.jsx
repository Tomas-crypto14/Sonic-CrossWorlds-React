import React from 'react'
import {Link} from 'react-router-dom'
const HeaderJet = () => {
  return (
    <nav>
        <div>
            <span>
                <Link to="/Jet">Velocidad alta(rápida)</Link>
            </span>
            /
            <span>
                <Link to="/Jet2">Velocidad Sonic</Link>
            </span>
            /
            <span>
                <Link to="/Jet3">Velocidad Super Sonic</Link>
            </span>
        </div>
    </nav>
  )
}

export default HeaderJet