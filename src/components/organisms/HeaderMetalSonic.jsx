import React from 'react'
import {Link} from 'react-router-dom'
const HeaderMetalSonic = () => {
  return (
    <nav>
        <div>
            <span>
                <Link to="/MetalSonic">Velocidad alta(rápida)</Link>
            </span>
            /
            <span>
                <Link to="/MetalSonic2">Velocidad Sonic</Link>
            </span>
            /
            <span>
                <Link to="/MetalSonic3">Velocidad Super Sonic</Link>
            </span>
        </div>
    </nav>
  )
}

export default HeaderMetalSonic