import React from 'react'
import '../css/about.css'
import panda from '../images/panda.jpg'
import bootstrap from '../images/bootstrap.png'
import css from '../images/css.png'
import html from '../images/html.png'
import java from '../images/java.png'
import js from '../images/js.png'
import mongo from '../images/mongo.png'
import mysql from '../images/mysql.png'
import node from '../images/node.png'
import react from '../images/react.png'
import spring from '../images/spring.png'
import { Link } from 'react-router-dom'



export default function About() {
  return (
    <div className="container text-white">
      <section className="container-fluid">
        <div className="row">

           <div className="container-fluid text-center mb-3">
             <h1 className="heading d-block abouth1 mt-5 d-inline-block">
              About <span>Me</span>
             </h1>
            </div>

            <div className="container-fluid justify-content-center mx-auto">
              <img src={panda} alt="pandaimage" className="about-image d-block mx-auto mt-3" />
            </div>

          <div className="">
            

            <div className="container-fluid">
                <div className="d-block mt-3">
                  <h2 className="abouth2">PERSONAL INFO</h2>
                </div>

              <div className="row mt-3">
              <div className="col-md-6 row  ">
                <div className="col-6 font-size">
                  <h4>
                    <span>Name: </span> Dhanaji Shinde{" "}
                  </h4>
                  <h4>
                    <span>Age: </span> 25{" "}
                  </h4>
                  <h4>
                    <span>Email: </span> dgshinde8@gmail.com{" "}
                  </h4>
                  <h4>
                    <span>Address: </span> Pune, India - 411046{" "}
                  </h4>
                </div>

                <div className="col-6 font-size">
                  <h4>
                    <span>Skill: </span> Full-stack{" "}
                  </h4>
                  <h4>
                    <span>Experience: </span> Fresher{" "}
                  </h4>
                  <h4>
                    <span>Languages: </span> English, Hindi, Marathi{" "}
                  </h4>
                </div>
                 <div className="mt-2">
                   <Link to="/about" className="text-white"><button className="btn rounded-pill btn-expand-on-hover"><span className="text-White">Download</span> <i className="bi bi-download"></i></button></Link>
                 </div>
              </div>
              <div className="col-md-6 align-items-center">
                  <div className="row text-center align-items-center">
                    <div className="col-6 box ">
                     <h3 className="numh3">*</h3>
                     <p>Year of Experience</p>
                   </div>

                    <div className="col-6 box">
                     <h3 className="numh3">10+</h3>
                     <p>Projects Completed</p>
                    </div>
                  </div>
              </div>
              </div>

              

            </div>
          </div>

          
        </div>
      </section>

      <section className="container-fluid">
            <div className="container-fluid text-center mb-3">
             <h1 className="heading d-block abouth1 mt-5 d-inline-block">
              <span>My</span> Skills
             </h1>
            </div>

        <div className="container">
        <div className=" row">
          <div className="  col-md-3 col-sm-6 custom-parent card mb-1">
            <div className="">
             <img  className="card-img-top custom-box" src={html} alt="alt-img"/>
            <h3>HTML</h3>
            </div>
          </div>
          <div className="  col-md-3 col-sm-6 custom-parent card mb-1">
            <div className="">
             <img  className="card-img-top custom-box" src={css} alt="alt-img"/>
            <h3>CSS</h3>
            </div>
          </div>
          <div className="  col-md-3 col-sm-6 custom-parent card mb-1">
            <div className="">
             <img  className="card-img-top custom-box" src={bootstrap} alt="alt-img"/>
            <h3>BOOTSTRAP</h3>
            </div>
          </div>
          <div className="  col-md-3 col-sm-6 custom-parent card mb-1">
            <div className="">
             <img  className="card-img-top custom-box" src={js} alt="alt-img"/>
            <h3>JAVASCRIPT</h3>
            </div>
          </div>
          <div className="  col-md-3 col-sm-6 custom-parent card mb-1">
            <div className="">
             <img  className="card-img-top custom-box" src={react} alt="alt-img"/>
            <h3>REACT JS</h3>
            </div>
          </div>
          <div className="  col-md-3 col-sm-6 custom-parent card mb-1">
            <div className="">
             <img  className="card-img-top custom-box" src={java} alt="alt-img"/>
            <h3>JAVA</h3>
            </div>
          </div>
          <div className="  col-md-3 col-sm-6 custom-parent card mb-1">
            <div className="">
             <img  className="card-img-top custom-box" src={mysql} alt="alt-img"/>
            <h3>MY SQL</h3>
            </div>
          </div>
          <div className="  col-md-3 col-sm-6 custom-parent card mb-1">
            <div className="">
             <img  className="card-img-top custom-box" src={node} alt="alt-img"/>
            <h3>NODE JS</h3>
            </div>
          </div>
          <div className="  col-md-3 col-sm-6 custom-parent card mb-1">
            <div className="">
             <img  className="card-img-top custom-box" src={mongo} alt="alt-img"/>
            <h3>MONGO DB</h3>
            </div>
          </div>
          <div className="  col-md-3 col-sm-6 custom-parent card mb-1">
            <div className="">
             <img  className="card-img-top custom-box" src={spring} alt="alt-img"/>
            <h3>SPRING</h3>
            </div>
          </div>
          </div>
        </div>

      </section>

      <section className="container-fluid">
        <div className="container-fluid text-center mb-3">
          <h1 className="heading d-block abouth1 mt-5 d-inline-block">
            <span>my</span> Education
           </h1>
        </div>

        <div className="row mt-3 ms-2 me-2">
          <div className="col-md-6 position-relative border-start border-1  border-white">
            <div className="position-absolute top-0 start-0 translate-middle bg-i  bg-crimson p-2 ">
            <i className="bi bi-mortarboard-fill "></i>
            </div>
            <div className="ms-3 mt-2 div-ed">
            <span>2022 - 2022</span>
            <h3>PG-DAC</h3>
            <p>CDAC KP Bangalore</p>
            <p>Percentage: 55%</p>
            </div>
          </div>

          <div className="col-md-6 position-relative border-start border-1  border-white">
          <div className="position-absolute top-0 start-0 translate-middle bg-i  bg-crimson p-2">
            <i className="bi bi-mortarboard-fill "></i>
            </div>
            <div className="ms-3 mt-2 div-ed">
            <span>2016 - 2021</span>
            <h3>Electrical Engineering</h3>
            <p>NBN Sinhgad School of Engineering Pune</p>
            <p>Percentage: 64.94%</p>
            </div>
          </div>

          <div className="col-md-6 position-relative border-start border-1  border-white">
          <div className="position-absolute top-0 start-0 translate-middle bg-i  bg-crimson p-2">
            <i className="bi bi-mortarboard-fill "></i>
            </div>
            <div className="ms-3 mt-2 div-ed">
            <span>2015 - 2016</span>
            <h3>Class XII</h3>
            <p>G D K Sainiki School Tasgaon (PCMB)</p>
            <p>Percentage: 69.23%</p>
            </div>
          </div>

          <div className="col-md-6 position-relative border-start border-1  border-white">
          <div className="position-absolute top-0 start-0 translate-middle bg-i  bg-crimson p-2 ">
            <i className="bi bi-mortarboard-fill "></i>
            </div>
            <div className="ms-3 mt-2 div-ed">
            <span>2013 - 2014</span>
            <h3>Class X</h3>
            <p>G D K Sainiki School Tasgaon</p>
            <p>Percentage: 86.6%</p>
            </div>
          </div>
          <div className="space-holder"></div>
          
        </div>
      </section>


    </div>
  )
}
