import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
   let [counter,subcounter]=useState(15)
   const adding=function(){
               if(counter>=20){
                subcounter(20)
                return;
               }
            console.log("clicked" + counter)
            counter=counter +1
            subcounter(counter)
   }

   const removing=function(){
    if(counter<=0){
      subcounter(0)
      return;
     }
    console.log("clicked" + counter)
    counter=counter -1
    subcounter(counter)
}


  return (
    <>
     <h1>the give value</h1>
     <h2>the encounter value {counter}</h2>
     <button onClick={adding}>add value {counter}</button>
     <br />
     <button onClick={removing}>remove value</button>
    </>
  )
}

export default App
