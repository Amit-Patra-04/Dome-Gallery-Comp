import { useState } from 'react'
import './App.css'
import DomeGallery from './DomeGallery';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div style={{ width: '100vw', height: '100vh' }}>
      <DomeGallery />
    </div>
    </>
  )
}

export default App
