
import { useState } from 'react'
import Box from './Box.jsx'
import Usecustom from './Usecustom.js'

function App() {
  const [from,setfrom] = useState("usd")
  const [to,setto] = useState("inr")
  const [amount,setamount] =useState(0)
  const [convertamount,setconvertedamount] = useState(0)
   
  const custom = Usecustom(from)
  // const options = object.keys(custom)
  // console.log(custom)

  const options=Object.keys(custom)
     const swapp=() =>{
      setfrom(to)
      setto(from)
     }

     const converted = () =>{
         setconvertedamount(amount * custom[to])

    }
 
  return (
    <div className='w-full h-screen pt-[115px]' style = {{backgroundImage : `url('https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZG9sbGFyfGVufDB8fDB8fHww')`}}>
    

    <div className=' bg-black w-1/2 m-auto rounded-lg p-5' 
      >     

                   <form
                        onSubmit={(e) => {
                            e.preventDefault();
                           converted()
                        }}
                    >
         <Box
         label="From"
         amount={amount}
         currencyOptions={options}
         onCurrencyChange={(currency) => 
          setfrom(currency)
         }
         currencySelector={from}
         onAmountChange={(amount) =>
              setamount(amount)}


         />

         <div className='flex justify-center'>
         <button className=' bg-black text-white border-2 border-white rounded-md p-1 my-1' onClick={swapp}>
          SWAP</button> 
         </div>

         <Box
         label="to"
         amount={convertamount}
         currencyOptions={options}
         onCurrencyChange={(currency) => 
          setto(currency)
         }
         currencySelector={from}
         />

         <button className='w-full text-white text-6xl border-2 border-white rounded-md mt-3' type='submit'>CONVERT {from.toUpperCase()} to {to.toUpperCase()} </button>


</form>
    </div>
    </div>
  )
}

export default App