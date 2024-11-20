import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Components/Counter'
import Three from './Components/Three'

function App() {
  const [count, setCount] = useState(0)

  return (
  <>
  <h1 className='text-4xl text-center justify-center '>Counter</h1>
  <h1 className='text-4xl text-center justify-center '>User Input</h1>
  <h1 className='text-4xl text-center justify-center '>List Component</h1>
  {/* <Counter /> */}
  {/* <Three /> */}
  
  </>
  )
}

export default App
