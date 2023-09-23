import React from 'react'
import panda from '../images/panda.jpg'
import '../css/contact.css'
import { Link } from 'react-router-dom'

export default function Contact() {
  return (
    <div>
      <div className="container-fluid text-white">

            <div className="container-fluid text-center mb-4">
              <h1 className="heading d-block abouth1 mt-5 d-inline-block">
              Contact <span>Me</span>
              </h1>
            </div>

             <div className="container-fluid justify-content-center mx-auto">
              <img src={panda} alt="pandaimage" className="about-image d-block mx-auto mt-3" />
             </div>
             <div className="row">
              <div className="col-md-4 justify-content-center">

              <div className="d-block mt-3">
                  <h2 className="abouth2  getintouch ms-5">Get In Touch</h2>
                </div>

              <p className="ms-5">
                I like to kept it simple. My goals are to focus on typography,
                content and conveying the message that you want to send.
              </p>

              <div className="">
                <div className="ms-5 row hstack hstacks2 gap-2">
                  <div className="p-2"><i className=" p-3 bi bi-map-fill"></i></div>
                  <div className="p-2">
                    <h3>Address :</h3>
                    <p>Pune,India -411046</p>
                  </div>
                </div>

                <div className="ms-5 row hstack hstacks2 gap-2">
                  <div className="p-2"><i className=" p-3 bi bi-envelope-fill"></i></div>
                  <div className="p-2">
                    <h3>Email :</h3>
                    <p>dgshinde8@gmail.com</p>
                  </div>
                </div>

                <div className="ms-5 row hstack hstacks2 gap-2">
                  <div className="p-2"><i className=" p-3 bi bi-telephone-fill"></i></div>
                  <div className="p-2">
                    <h3>Number :</h3>
                    <p>8329151884</p>
                  </div>
                </div>
              </div>

              <div className="hstack  hstacks gap-1 ms-5">
                <div className="shareid "><Link to="/contact" ><i className=" p-2 shareicon bi bi-facebook  "></i></Link>
                      </div>
                <div className="shareid "><Link to="/contact" ><i className=" p-2 shareicon bi bi-github "></i></Link>
                      </div>
                <div className="shareid "><Link to="/contact" ><i className="p-2 shareicon bi bi-instagram  "></i></Link>
                      </div>
                <div className="shareid "><Link to="/contact" ><i className="p-2 shareicon bi bi-linkedin  "></i></Link>
                      </div>
                
              </div>
              <div className="space-holder"></div>

              </div>


              <div className="col-md-6 justify-content-center mt-2 ms-5">

              <form action="" className="mt-4">
            <div className=" mt-3">
              <input className="mt-3 me-3" type="text" placeholder="your name" />
              <input className="mt-3 me-3" type="number" placeholder="your number" />
            </div>

            <div className=" mt-3">
              <input className="mt-3 me-3" type="email" placeholder="your email" />
              <input className="mt-3 me-3" type="text" placeholder="your subject" />
            </div>

            <textarea
              name=""
              placeholder="your message"
              id=""
              cols="50"
              rows="15"
              className="mt-3 me-3"
            ></textarea>

            <div className="">
            <input type="submit" value="send message" className="btn rounded-pill text-white btn-click" />
            </div>
          </form>
          <div className="space-holder"></div>

              </div>
             </div>

      </div>
    </div>
  )
}
