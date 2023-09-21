import React from 'react'
import {Link } from 'react-router-dom'
import '../css/navbar.css'

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark fixed-bottom">
        <ul className="navbar-nav w-100 ">
            <li className="nav-item text-center col d-block" >
              <Link to="/" className="nav-link d-none d-md-flex   align-items-center justify-content-center">
                    <i className="bi bi-house-fill"></i> Home                  
              </Link>

              <Link to="/" className="nav-link d-md-none   align-items-center justify-content-center">
                   <i className="bi bi-house-fill"></i>
              </Link>
            </li>
            <li className="nav-item text-center col d-block" >
                <Link to="/about" className="nav-link d-none d-md-flex   align-items-center justify-content-center" >
                    <i className="bi bi-person-fill"></i> About
                </Link>
                <Link to="/about" className="nav-link d-md-none   align-items-center justify-content-center" >
                    <i className="bi bi-person-fill"></i>
                </Link>
            </li>
            <li className="nav-item text-center col d-block" >
                <Link to="/portfolio" className="nav-link d-none d-md-flex   align-items-center justify-content-center" >
                    <i className=" bi bi-briefcase-fill"></i> Portfolio
                </Link>
                <Link to="/portfolio" className="nav-link d-md-none   align-items-center justify-content-center" >
                    <i className="bi bi-briefcase-fill"></i>
                </Link>
            </li>
            <li className="nav-item text-center col d-block" >
                <Link to="/contact" className="nav-link d-none d-md-flex   align-items-center justify-content-center" >
                    <i className="bi bi-envelope-fill"></i> Contact
                </Link>
                <Link to="/contact" className="nav-link d-md-none   align-items-center justify-content-center" >
                    <i className="bi bi-envelope-fill"></i>
                </Link>
            </li>
        </ul>
    </nav>
    </div>
  )
}
