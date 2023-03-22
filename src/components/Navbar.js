import React from "react"
import { Link } from "react-router-dom"

export default function Navbar(){
    return(
        <nav>
            <img className = "nav--logo" src="././imagess/logo.png" alt="not available"/>
            <h1 className="nav--h1">Trash Detection</h1>
            <Link to='/'>
            <h1 className="nav--h1--home" >Home</h1>
            </Link>
        </nav>
    )

}