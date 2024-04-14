import { useState, useEffect, createContext, useContext } from 'react'
import Home from './components/Home'
import BrowsePage from './components/BrowsePage'
import AboutUs from './components/AboutUs'
import NavigationBar from './components/NavigationBar'
import Cart from './components/Cart'
import { CartContext } from './contexts/CartContext'
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom'
import './assets/css/style1.css'

function App() {
  const [cartContents, setCartContents] = useState([])

  // <BrowserRouter/> hiding in main.jsx.. encases app.jsx Remember that.
  // <NavigationBar/> has <CartPanel/> in it.
  return (
    <CartContext.Provider value={[cartContents, setCartContents]}>
      
      
        <header>
            <NavigationBar/>
        </header>
            <Routes>
                <Route path='/' element={<Home/>} /> 
                <Route path='/products' element={<BrowsePage/>} />
                <Route path='/best-sellers' element={<div>may or may not use best seller. there is no component here yet. Sincerely, app.jsx /best-sellers Route</div>} />
                <Route path='/about-us' element={<AboutUs/>} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/admin' element={<div>Admin Page... no component for page yet..</div>} />
            </Routes>
        
      
      <main>

      </main>
      <footer>
      
      </footer>
      
    </CartContext.Provider>
  )
}   

export default App
