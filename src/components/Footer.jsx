import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from 'react-router-dom';


export default function Footer() {


  return (
    <>
      <footer>



        {/* Hello world */}
        <div
          className="container-fluid text-dark  footer mt-1  " style={{ backgroundColor: "#caf0f8" }}
        >
          <hr />
          <div className="container py-5">
            <div className="row g-5">
              <div className="col-lg-6 col-md-6">
                <h3 className="text-dark mb-4">Glamorous Beauty</h3>
                <p className="mb-2">
                  <FaLocationDot style={{ fontSize: '20px', }} className=' ' />
                  Unit 46, Vicarage Field, Ripple Road, Barking, England, IG11 8DG
                </p>
                <div className="d-flex pt-2"></div>
              </div>

              <div className="col-lg-6 col-md-6">
                <div className="col-0 col-sm-0 col-md-3 col-lg-3 col-xl-3 d-none d-sm-none d-md-inline">
                  <h3>Support:</h3>





                  <p>
                    <Link
                      className="text-decoration-none text-dark"
                      to="/contactus"
                    >
                      {" "}
                      Contact Us{" "}
                    </Link>
                  </p>
                  <p>
                    <Link
                      className="text-decoration-none text-dark"
                      to="/section"
                    >
                      {" "}
                      Our Services{" "}
                    </Link>
                  </p>
                  <p>
                    <a
                      className="text-decoration-none text-dark"
                      target='_blank'
                      href='https://www.instagram.com/gold_luxury_hair?igsh=MW04ZmQybXVkbWxseA=='
                    >
                      {" "}
                      Our Social Media: <FaInstagram className="mx-2" style={{fontSize:"20px"}}/>{" "}
                    </a>
                  </p>

                </div>
              </div>
            </div>

            <hr />
            <div className="d-flex justify-content-center align-items-center">
              <div>
                <div>Power by <a href="http://easylink.pk/"  target='_blank' className='text-decoration-none text-dark'>EASYLINK.pk</a></div>
              <div>Contact EasyLink: +92 311 1088938</div>
              </div>

            </div>
          </div>
        </div>



      </footer>






    </>
  )
}
