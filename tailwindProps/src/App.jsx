import { useState } from 'react'
import './App.css'

function App() {

  const [color, setColor] = useState("blue")
  
  return (
    <div className=' w-full h-screen duration-200'
    style={{backgroundColor: color}}>

    <div className=' fixed flex flex-wrap justify-center bottom-12 px-2 inset-x-0'>

    <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-yellow-50 px-2 py-2 rounded-3xl'>

      <button className=' outline-none px-3 py-2 rounded-full text-white shadow-lg bg-red-500'
      onClick={() => setColor("red")}>
        Red
      </button>
      <button className=' outline-none px-3 py-2 rounded-full text-white shadow-lg bg-green-500'
      onClick={() => setColor("green")}>
        Green
      </button>
      <button className=' outline-none px-3 py-2 rounded-full text-white shadow-lg bg-blue-500'
      onClick={() => setColor("blue")}>
        Blue
      </button>
      <button className=' outline-none px-3 py-2 rounded-full text-white shadow-lg bg-orange-400'
      onClick={() => setColor("orange")}>
        Orange
      </button>
      <button className=' outline-none px-3 py-2 rounded-full text-white shadow-lg bg-violet-500'
      onClick={() => setColor("violet")}>
        violet
      </button>
      <button className=' outline-none px-3 py-2 rounded-full text-white shadow-lg bg-pink-500'
      onClick={() => setColor("pink")}>
        pink
      </button>
      <button className=' outline-none px-3 py-2 rounded-full text-white shadow-lg bg-cyan-200'
      onClick={() => setColor("cyan")}>
        cyan
      </button>
    </div>
    </div>
      
    </div>
  )
}

export default App
