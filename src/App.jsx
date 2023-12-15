import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { createContext, useContext, useState } from 'react'
import AddArticle from './pages/AddArticle.jsx'
import Home from './pages/Home.jsx'
import { CartContext } from './context/CartContext.jsx'
import Dashboard from './pages/Dashboard.jsx'

function App() {
  const [cart, setCart] = useState([])
  return (

    <CartContext.Provider value={{ cart, setCart }}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/add' element={<AddArticle />} />
          <Route path='/dash' element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </CartContext.Provider>
  )
}

export default App
