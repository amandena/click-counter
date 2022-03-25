import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [error, setError] = useState('')

  return (
    <div data-test='component-app'>
      <h1 data-test='counter-display'>
        The counter display is currently <span data-test='count'>{count}</span>
      </h1>
      <div data-test='error-message' className={`${error === '' ? 'hidden' : ''}`} style={{color:'red'}}>{error}</div>
      <button 
        data-test='increment-button'
        onClick={() => {
          setCount(count+1)
          setError('')
        }}
      >
        Increment counter
      </button>
      <button 
        data-test='decrement-button' 
        onClick={() => count > 0 ? setCount(count-1) : setError('Counter cannot go below zero')}
      >
        Decrement counter
      </button>
    </div>
  )
}

export default App
