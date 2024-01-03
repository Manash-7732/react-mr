import { useEffect } from "react";
import { useRef } from "react";
import { useCallback } from "react";
import { useState } from "react";


function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed ,setCharAllowed] = useState(false);
  const [password,setPassword] = useState("");

  const pass = useCallback(() => {
      let p = ""
      let str="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ" 

      if(numberAllowed){
        str=str+"1234567890"
      }
      if(charAllowed){
        str=str+"!@#$%^&*()"
      }
     for(let i = 1;i <= length;i++) {
          let g=Math.floor(Math.random() * str.length +1)  
          p +=str.charAt(g)
     }
  
     setPassword(p)

  },[length,numberAllowed,charAllowed])
  const passref=useRef(null)

  const copyme=useCallback(() =>{
    passref.current?.select()
               window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(() => { 
    pass()
  } , [length,numberAllowed,charAllowed,pass])

  return (
    <>
   <div className="max-w-lg bg-gray-900 shadow-md shadow-slate-200 text-center text-white rounded-lg mx-auto mt-12 px-4 py-3 my-8 ">
   <h1 className=" text-white text-center ">PASSWORD GENERATOR</h1>
        <div className="flex rounded-lg mb-4 shadow-md  ">
          
          <input
           type="text"
           placeholder="password"
           className=" outline-none w-full py-1 px-3 rounded-l-lg text-black"
           readOnly
           value={password}
           ref={passref}
           
            />
            <button className=" bg-blue-900 rounded-r-lg px-3 py-1 outline-lime-none shrink-0" onClick={copyme}>copy</button>
        </div>
        <div className="flex mt-2 gap-x-2 justify-center">
          <input 
          type="range"
          min={6}
          max={100}
          value={length}
          className=" cursor-pointer"
           onChange={(e) => {setLength(e.target.value)}}
           />

           <label>length : {length}</label>

           <div className="flex gap-2">
            <input 
            type="checkbox"
            id="NumberInput"
            defaultChecked={numberAllowed}
            onChange={() =>{setNumberAllowed((prev) => !prev)}}

             />
             <label>Number</label>

           </div>
           <div className="flex gap-2">
            <input 
            type="checkbox"
            id="CharInput"
            defaultChecked={charAllowed}
            onChange={() =>{setCharAllowed((prev) => !prev)}}
             />
             <label>Characters</label>
             
           </div>
        </div>
   </div>
   
</>
  )
}

export default App
