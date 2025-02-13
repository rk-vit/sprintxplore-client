import { useState } from 'react'
import './App.css'
import { Header } from './components/header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='app-main'>
      <div className='app-header'>
        <Header/>
      </div>
      <div>
        <h1>Hero Section</h1>
      </div>
    </div>
    
  )
}

export default App
