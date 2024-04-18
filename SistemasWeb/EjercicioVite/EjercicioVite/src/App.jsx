import { useState, useEffect } from 'react'
import Router from './components/router'
import './App.css'

function App() {
  const [rutaActual, setRutaActual] = useState("home")


  useEffect(() => {
    setRutaActual("/home")
  }, [])

  return (
    <div className='sitio-web'>
      <div className='header'>
        <button onClick={() => { setRutaActual("/home") }}>Home</button>
        <button onClick={() => { setRutaActual("/login") }}>Login</button>
      </div>
      <div className='paginas'>
          <Router ruta={rutaActual}></Router> 
      </div>
    </div>
  )
}

export default App
