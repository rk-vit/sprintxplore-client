import { useState } from 'react'
import './App.css'
import { HeroSection } from './pages/HeroSection'
import { AboutUs } from './pages/AboutUs'
import { Header } from './components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='app-main'>
      <div className='app-header'>
        <Header/>
      </div>
      <div className='app-hero'>
        <HeroSection/>
      </div>
     
    </div>
    
  )
}

export default App
