import React from 'react'
import Usercontext from '../context/Usercontext'
import { useContext } from 'react'
function Login() {
    const [username,setusername] = React.useState('')
    const [password,setpassword] = React.useState('')
    const {setUser} = useContext(Usercontext)
    const summit = (e) =>  {
          e.preventDefault()
          setUser({username,password})
    }
      return (
    <div>
        <h2>Login page</h2>
        <input 
        className=' border-black border-2'
     type="text"
     placeholder='username'
     value={username}
     onChange={(e) => setusername(e.target.value)}
         />
      {"  "}
<input
className=' border-black border-2'
     type="text"
     placeholder='password'
     value={password}
     onChange={(e) => setpassword(e.target.value)}
         />

         <button onClick={summit}>Summit</button>
    </div>
      );
}

export default Login