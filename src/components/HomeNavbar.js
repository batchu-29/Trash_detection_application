import React from "react"
import { Link } from "react-router-dom"
export default function Navbar(){
    return(
        <div>
            
            <div className="bg"> 
            <div className="extra-top"></div>
        <nav className="nav1">
            <img className = "nav--logo" src="././imagess/logo.png" alt="not available"/>
            <h1 className="nav--h1">Trash Detection</h1>
        </nav>
        < a href="https://batchu-29.github.io/Map-application/map/mapsgeo.html">
        <div className="options">
         
            
            <h1 className="child">Create Mission</h1>
           
            
            

        </div>
        </a>
   <Link to='/c'>
        <div className="options">
        <h1 className="child1">Drone Command</h1>
        </div>
    </Link>
    <Link to='/view'>
        <div className="options">
        <h1 className="child2">View Images</h1>
        </div>
    </Link>
    <div className="extra"></div>
    </div>
        </div>

    )

}