import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Cuaca from './pages/cuaca'
import Portofolio from './pages/Portofolio'


function App() {
  // const [count, setCount] = useState(0)

  return (
    <BrowserRouter><Routes>
      <Route path="/React-Pertamaku/" element={<Home/>} />
      <Route path="/React-Pertamaku/about/" element={<About />} />
      <Route path="/React-Pertamaku/cuaca/" element={<Cuaca />} />
      <Route path="/React-Pertamaku/portofolio/" element={<Portofolio />} />

      
    </Routes>
    </BrowserRouter>
  )
}

export default App
