import React from "react";
import Homepage from "./Homepage";


function ChildComponent({ prop, updateName }) {
  function update() {
    updateName({
      ...prop,
     name : "Youlong",
     age: "21"
      
    });
  }

  console.log(prop)

  return (
<div>
      <div className="bg-gray-800 w-100 h-100 rounded-3xl text-3xl text-white flex flex-col justify-center items-center shadow-2xl">
        <div className="flex flex-col justify-center items-center gap-5">
            <h1 className="text-lg font-bold text-center ">Name : {prop.name}</h1>
            <p className="text-lg font-bold text-center "> Age : {prop.age}</p>
            <div className="flex justify-center items-center w-40 h-15">
                <button className="bg-red-500 w-full h-full p-2 rounded-2xl text-2xl" onClick={update}>
                UPDATE
                </button>
            </div>

        </div>
        

      </div>
    </div>
  );
}

export default ChildComponent;
