import React from 'react'
import './Navbar.css'

export default function Navbar() {
    return (
        <div className="nav">
            <h1>
                <a href="/" style={{color: 'black', textDecoration: 'none'}}>
                    Boiler-Plate
                </a>
            </h1>
            <div className="nav-comp">
                <h3 className="nav-item">
                    <a href="/" style={{color: 'black', textDecoration: 'none'}}>
                        About
                    </a>
                </h3>
                <h3 className="nav-item">
                    <a href="/" style={{color: 'black', textDecoration: 'none'}}>
                        Contact
                    </a>
                </h3>
                <h3 className="nav-item">
                    <a href="/" style={{color: 'black', textDecoration: 'none'}}>
                        Profile
                    </a>
                </h3>
            </div>
        </div>
    )
}
