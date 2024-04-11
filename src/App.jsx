import { useState, useEffect } from 'react'
import Home from './components/Home'
import Browse from './components/Browse'
import AboutUs from './components/AboutUs'
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom'
import './assets/css/style1.css'
import './assets/css/navigationbar.css'

function App() {
  const [count, setCount] = useState(0)
  const [cartPanelActive, setCartPanelActive] = useState(false)
  return (
    <>
      
      
        <header>
          <nav className='navbar'>
              <ul className='nav-links'>
                  <li>
                      <Link to='/'>HOME</Link>
                  </li>
                  <li>
                      <Link to='/browse'>BROWSE</Link>
                  </li>
                  <li>
                      <Link to='/best-sellers'>BEST SELLERS</Link>
                  </li>
                  <li>
                      <Link to='/about-us'>ABOUT US</Link>
                  </li>
                  <li>
                      <Link to='/cart'>CART🛒</Link>
                  </li>
              </ul> 
            </nav>
          </header>
            <Routes>
                <Route path='/' element={<Home/>} /> 
                <Route path='/browse' element={<Browse/>} />
                <Route path='/best-sellers' element={<div>may or may not use best seller. there is no component here yet. Sincerely, app.jsx /best-sellers Route</div>} />
                <Route path='/about-us' element={<AboutUs/>} />
                <Route path='/cart' element={<div>Cart.. no component for page yet</div>} />
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
