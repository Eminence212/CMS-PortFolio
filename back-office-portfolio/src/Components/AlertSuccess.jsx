import React from 'react'
import {FaRegCheckCircle,FaTimes} from 'react-icons/fa'
function AlertSuccess({message,setIsSucceess}) {
    return (
        <div className="alert alert-success" role="alert">
            <span><FaRegCheckCircle/></span>  
            <span>{message}</span>
            <span onClick={()=>setIsSucceess(false)}><FaTimes/></span>
        </div>
    )
}

export default AlertSuccess
