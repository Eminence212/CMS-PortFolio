import React from 'react'
import {FaExclamationTriangle,FaTimes} from 'react-icons/fa'
function AlertWarning({message,setIsWarning}) {
    return (
        <div className="alert alert-warning" role="alert">
            <span><FaExclamationTriangle/></span>
            <span>{message}</span>
            <span onClick={()=>setIsWarning(false)}><FaTimes/></span>
        </div>

    )
}

export default AlertWarning
