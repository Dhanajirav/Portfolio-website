import React from 'react'
import '../css/navbar.css'

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark fixed-bottom">
        <ul className="navbar-nav w-100 ">
            <li className="nav-item text-center col" >
                <a className="nav-link d-none d-md-flex align-items-center justify-content-center" href="/">
                    <i className="bi bi-house-fill"></i> Home
                </a>
                <a className="nav-link d-md-none align-items-center justify-content-center" href="/">
                    <i className="bi bi-house-fill"></i>
                </a>
            </li>
            <li className="nav-item text-center col" >
                <a className="nav-link d-none d-md-flex align-items-center justify-content-center" href="/">
                    <i className="bi bi-person-fill"></i> About
                </a>
                <a className="nav-link d-md-none align-items-center justify-content-center" href="/">
                    <i className="bi bi-person-fill"></i>
                </a>
            </li>
            <li className="nav-item text-center col" >
                <a className="nav-link d-none d-md-flex align-items-center justify-content-center" href="/">
                    <i className=" bi bi-briefcase-fill"></i> Portfolio
                </a>
                <a className="nav-link d-md-none align-items-center justify-content-center" href="/">
                    <i className="bi bi-briefcase-fill"></i>
                </a>
            </li>
            <li className="nav-item text-center col" >
                <a className="nav-link d-none d-md-flex align-items-center justify-content-center" href="/">
                    <i className="bi bi-envelope-fill"></i> Contact
                </a>
                <a className="nav-link d-md-none align-items-center justify-content-center" href="/">
                    <i className="bi bi-envelope-fill"></i>
                </a>
            </li>
        </ul>
    </nav>
    </div>
  )
}
