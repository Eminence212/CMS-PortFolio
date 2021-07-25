import React from 'react'
import {FaTimesCircle,FaTimes} from 'react-icons/fa'
function AlertDanger({message,setIsDanger}) {
    return (
        <div className="alert alert-danger" role="alert">
            <span><FaTimesCircle/></span>
            <span>{message}</span>
            <span onClick={()=>setIsDanger(false)}><FaTimes/></span>
        </div>

    )
}

export default AlertDanger
