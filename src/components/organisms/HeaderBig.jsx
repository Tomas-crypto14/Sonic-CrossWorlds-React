import React from 'react'
import {Link} from 'react-router-dom'
const HeaderBig = () => {
  return (
    <nav>
        <div>
            <span>
                <Link to="/Big">Velocidad alta(rápida)</Link>
            </span>
            /
            <span>
                <Link to="/Big2">Velocidad Sonic</Link>
            </span>
            /
            <span>
                <Link to="/Big3">Velocidad Super Sonic</Link>
            </span>
        </div>
    </nav>
  )
}

export default HeaderBig