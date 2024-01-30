import React from 'react'
import Usercontext from '../context/Usercontext'
import { useContext } from 'react'
function Profiless() {
    const {user} = useContext(Usercontext)
  
    if (!user){ return <div>user not found</div>
}else if(user){
    return <div>welcome {user.username}</div>  
}else{
    return <div>welcome {user.password}</div>
}

}

export default Profiless