import React from 'react'
import {Link} from 'react-router-dom'
const HeaderEggman = () => {
  return (
    <nav>
        <div>
            <span>
                <Link to="/Eggman">Velocidad alta(rápida)</Link>
            </span>
            /
            <span>
                <Link to="/Eggman2">Velocidad Sonic</Link>
            </span>
            /
            <span>
                <Link to="/Eggman3">Velocidad Super Sonic</Link>
            </span>
        </div>
    </nav>
  )
}

export default HeaderEggman