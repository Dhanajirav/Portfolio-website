import React from 'react'
import panda from '../images/panda.png'
import { Link } from 'react-router-dom'
import "../css/home.css"

export default function Home() {

  return (
    <>
    <div className="container position-absolute top-50 start-50 translate-middle">
      <div className="row">
        <div className="col-md-6 mx-auto ">
          {/* Content for the first div */}
          <div className="">
            {/* Add your content here */}
            <img src={panda} alt="pandaImage" className=""/>
          </div>
        </div>
        <div className="col-md-6 mx-auto">
          {/* Content for the second div */}
          <div className="text-white d-flex flex-column justify-content-center align-items-center mt-5">
            {/* Add your content here */}
            <h2 >Hi, I am Dhanaji Shinde</h2>
            <h3 className="h3">Full Stack Web Developer</h3>
            <p className="text-center">I'm Full Stack Web Developer From Pune,India.
              I Have A Passion For Design And Love For Web Development
            </p>
            <div className="mx-auto">
            <Link to="/about" className="text-white"><button className="btn rounded-pill btn-expand-on-hover"><span className="text-White">About Me</span> <i className="bi bi-person-fill"></i></button></Link>
            </div>
            
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
