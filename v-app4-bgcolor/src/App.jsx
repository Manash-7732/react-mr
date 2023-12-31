import { useState } from "react"


function App() {
    const [color, setColor] = useState("olive")
   
  return (
 <div className='w-full h-screen duration-200' style={{backgroundColor: color}}>
  <div className=" fixed flex flex-wrap justify-center bottom-10 inset-x-0 px-2  ">
    <div className="flex flex-wrap px-4 py-2 bg-white gap-3 shadow-3 rounded-3xl "> 
    <button className="outline-none px-2 py-2 rounded-lg" style={{backgroundColor: "red"}} onClick={() => setColor("red")}>Red</button>
    <button className="outline-none px-2 py-2 rounded-lg" style={{backgroundColor: "blue"}} onClick={() => setColor("blue")}>Blue</button>
    <button className="outline-none px-2 py-2 rounded-lg" style={{backgroundColor: "violet"}} onClick={() => setColor("violet")}>Voilet</button>
    <button className="outline-none px-2 py-2 rounded-lg" style={{backgroundColor: "yellow"}} onClick={() => setColor("yellow")}>Yellow</button>
    <button className="outline-none px-2 py-2 rounded-lg" style={{backgroundColor: "green"}} onClick={() => setColor("green")}>Green</button>
    <button className="outline-none px-2 py-2 rounded-lg" style={{backgroundColor: "sky"}} onClick={() => setColor("sky")}>Sky</button>
    <button className="outline-none px-2 py-2 rounded-lg" style={{backgroundColor: "purple"}} onClick={() => setColor("purple")}>Purple</button>
    <button className="outline-none px-2 py-2 rounded-lg" style={{backgroundColor: "grey"}} onClick={() => setColor("grey")}>Grey</button>
      
    </div>  
  </div>
 </div>
  )



}

export default App
