import { useState } from 'react'
import './App.css'
import { Header } from './components/header'
import { HeroSection } from './pages/HeroSection'
import { AboutUs } from './pages/AboutUs'

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
