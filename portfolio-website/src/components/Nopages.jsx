import React from 'react'
import { Link } from 'react-router-dom'

export default function Nopages() {
  return (
    <div>
        <h1>404 error</h1>
        <h2>Page not found</h2>
        <Link to="/">return to Home Page</Link>
    </div>
  )
}
