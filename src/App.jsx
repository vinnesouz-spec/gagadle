import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Musica from './pages/Musica'
import Clipe from './pages/Clipe'

function App() {
  return (
    <Routes>

      <Route path="/" element={<Home />} />

      <Route path="/music" element={<Musica />} />

      <Route path="/clipe" element={<Clipe />} />

    </Routes>
  )
}

export default App