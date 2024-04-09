import { useState } from 'react'
import  NavigationBar  from './components/common/NavigationBar'
import './assets/css/style1.css'

function App() {
  const [count, setCount] = useState(0)
//  Condition ? do this if true : do this if false
  return (
    <>
      <header>
        <NavigationBar />
      </header>
      <main>

      </main>
      <footer>
        {/* <FooterSection/> */}
      </footer>
      {(count < 10) 
        ? null : <div>
        <p>you've exceeded 10 boy</p>
      </div>
      }
      <h1>mp2-ecommerce</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}   

export default App
