import React from 'react'
import './Navbar.css'

export default function Navbar() {
    return (
        <div className="nav">
            <div>
                <a href="/" style={{color: 'black' , textDecoration: 'none'}}>
                    Boiler-Plate
                </a>
            </div>
            <div className="nav-comp">
                <div className="nav-item">
                    About
                </div>
                <div className="nav-item">
                    Contact
                </div>
                <div className="nav-item">
                    Profile
                </div>
            </div>
        </div>
    )
}
