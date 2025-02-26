import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ParentComponent from './ParentComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="text-3xl font-bold underline mb-3">
      Hello world!
    </h1>
    < ParentComponent />
    </>
  )
}

export default App
