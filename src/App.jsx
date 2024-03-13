import React, { useState, useEffect } from 'react';
import './App.css'
import GeneratorArea from './GeneratorArea'


function App() {

    const [bgColorClass, setBgColorClass] = useState('text-purple-600');
  
    const toggleBackgroundColor = () => {
      setBgColorClass((prevClass) =>
        prevClass === 'text-purple-600' ? 'text-blue-600' : 'text-purple-600'
      );
    };
  
    useEffect(() => {
      const intervalId = setInterval(toggleBackgroundColor, 200);
  
      return () => clearInterval(intervalId);
    }, []); 

  return (
    <>
        <h1 className='text-6xl font-bold text-center my-3'>P<span className={`${bgColorClass}`}>ass</span>word Generator</h1>
        <GeneratorArea></GeneratorArea>      
    </>
  )
}



export default App;
