import { useState } from 'react';
import './App.css'

function App() {

  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleClick = () => {
    if (!isDarkMode) {
      document.body.style.backgroundColor = 'black';
      document.body.style.color = 'white';
    } else {
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
    }
    setIsDarkMode(!isDarkMode);
  };
  
  return (
    <>
      <div className='space-y-6'>
        <h1 className='text-3xl font-bold'>Welcome to Event Hanling in react</h1>
      <button className='bg-gray-900 text-white rounded-2xl p-5 shadow-2xl  hover:shadow-gray-500'onClick={handleClick} >
        {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}</button>
      </div>

    </>
  )
}

export default App
