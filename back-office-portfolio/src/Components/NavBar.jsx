import React from 'react'
import { FaListAlt, FaPlusSquare} from 'react-icons/fa';
import {NavLink} from 'react-router-dom'
function NavBar() {
    return (
         <footer className="d-flex justify-content-between bg-secondary p-3" id="mainFooter">
            <div className="btn-group">
                <NavLink to="/" className="btn btn-outline-dark bg-light" exact={true} ><FaListAlt/></NavLink>
                <NavLink to="/add-project" className="btn btn-outline-dark bg-light" exact={true}><FaPlusSquare/></NavLink>
            </div>
        </footer>
    )
}

export default NavBar
