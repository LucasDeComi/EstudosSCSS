import { useState } from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Artigo1 from './pages/Artigo1'
import Artigo2 from './pages/Artigo2'
import Artigo3 from './pages/Artigo3'
import Artigo4 from './pages/Artigo4'
import Artigo5 from './pages/Artigo5'

function App() {

  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/artigo1" element={<Artigo1/>}/>
          <Route path="/artigo2" element={<Artigo2/>}/>
          <Route path="/artigo3" element={<Artigo3/>}/>
          <Route path="/artigo4" element={<Artigo4/>}/>
          <Route path="/artigo5" element={<Artigo5/>}/>
        </Routes>
      </HashRouter>
    </>
  )
}

export default App