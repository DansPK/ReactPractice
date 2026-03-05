import { useState } from 'react'
// import './App.css'
import './tailwindinput.css'
import Homepage from './landing/page/Homepage'

// import Headers from './headers'

function App() {
  const [count, setCount] = useState(0)

  return (
    
      // <div
      //   className="bg-blue-400 rounded-2xl w-55 h-55 m-auto text-center flex flex-col items-center justify-center
      // "
      // >
      //   <h1 className="text-5xl text-red-500 font-extrabold">{count}</h1>
      //   <div className="flex gap-5 justify-center items-center align-middle">
      //     <button
      //       className="bg-green-500 text-5xl w-15 h-15 rounded-full"
      //      onClick={()=> setCount((prev) => prev + 1)}
      //     >
      //       +
      //     </button>

      //     <button
      //       className="bg-purple-500 text-5xl w-15 h-15 rounded-full"
      //       onClick={() => setCount((prev) => prev - 1)}
      //     >
      //       -
      //     </button>
      //   </div>
      // </div>

  

    <Homepage></Homepage>
  
  
    )
}

export default App
