import React from 'react'
import {Link} from 'react-router-dom'
const HeaderVector = () => {
  return (
    <nav>
        <div>
            <span>
                <Link to="/Vector">Velocidad alta(rápida)</Link>
            </span>
            /
            <span>
                <Link to="/Vector2">Velocidad Sonic</Link>
            </span>
            /
            <span>
                <Link to="/Vector3">Velocidad Super Sonic</Link>
            </span>
        </div>
    </nav>
  )
}

export default HeaderVector