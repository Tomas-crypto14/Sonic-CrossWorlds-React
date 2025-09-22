import HeaderKnuckles from '../../organisms/HeaderKnuckles'
import {Route, Routes} from 'react-router-dom'
import Knuckles2 from './Knuckles2'
import Knuckles3 from './Knuckles3'
const Knuckles = () => {
  return (
    <div id="container-race">
        <h2>Historia de Knuckles</h2>
        <h3>Velocidad alta(rápida)</h3>

        <HeaderKnuckles/>
        <Routes>
          <Route path="/Knuckles" element={<Knuckles/>}/>
          <Route path="/Knuckles2" element={<Knuckles2/>}/>
          <Route path="/Knuckles3" element={<Knuckles3/>}/>
        </Routes>
    </div>
  )
}

export default Knuckles