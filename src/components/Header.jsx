import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <nav>
        <div>
            <span>
                <Link to="/">Home</Link>
            </span>
            /
            <span>
                <Link to="/Introduccion">Introduccion</Link>
            </span>
            /
            <span>
                <Link to="/Sonic"><img src="./src/assets/Sonic.webp" width="100px" height="100px"/></Link>
            </span>
        </div>
    </nav>
  )
}

export default Header