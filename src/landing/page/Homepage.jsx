import React, { useState ,useEffect} from 'react'
import ChildComponent from './ChildComponent';


export default function Homepage() {

    const [count,setCount] = useState(0);

    useEffect(()=>{

        document.title = count


    }, [count]);


    function addCount(){
        setCount(prev => prev + 1);
    }

        function minusCount(){
        setCount(prev => prev - 1);
    }


    const [user, setUser] = useState({ name: "Boom", age: 67 });

    

  return (
    <>

    <div className="flex justify-center inset-0 w-screen h-screen bg-amber-200 flex justify-center items-center">
      <ChildComponent prop={user} updateName={setUser} />
     </div>

    {/* <div
        className="bg-blue-400 rounded-2xl w-55 h-55 m-auto text-center flex flex-col items-center justify-center
      "
      >
        <div className="flex gap-5 justify-center items-center align-middle">
          <button
            className="bg-green-500 text-5xl w-15 h-15 rounded-full"
           onClick={addCount}
          >
            +
          </button>
          <button
            className="bg-purple-500 text-5xl w-15 h-15 rounded-full"
           onClick={minusCount}
          >
            -
          </button>
        </div>
      </div> */}




    
    </>
  )
}






