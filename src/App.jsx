import { useState, useEffect } from 'react'
import Home from './components/Home'
import BrowsePage from './components/BrowsePage'
import AboutUs from './components/AboutUs'
import NavigationBar from './components/NavigationBar'
import Cart from './components/Cart'
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom'
import './assets/css/style1.css'

function App() {
  const [count, setCount] = useState(0)
  const [cartPanelActive, setCartPanelActive] = useState(false)
  //BrowserRouter/ hiding in main.jsx.. encases app.jsx
  return (
    <>
      
      
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
        
        {cartPanelActive ? <CartPanel /> : null}
      
      <main>

      </main>
      <footer>
        <button onClick={() => setCount((count) => count + 1)}>Don't click this... {count}</button>
        {(count < 10) 
        ? null : <div>
        <p>you've exceeded 10 boy</p>
      </div>}
      </footer>
      
    </>
  )
}   

export default App
