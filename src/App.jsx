import React from 'react'
import './App.css'

function App() {

  const handleClick = () => {
    document.body.style.backgroundColor = 'black';
    document.body.style.color = 'white';
  }
  
  return (
    <>
      <div className='space-y-6'>
        <h1 className='text-3xl font-bold'>Welcome to Event Hanling in react</h1>
      <button className='bg-gray-900 text-white rounded-2xl p-5 shadow-2xl  hover:shadow-gray-500'onClick={handleClick} >Click me to change the BG colour</button>
      </div>

    </>
  )
}

export default App
