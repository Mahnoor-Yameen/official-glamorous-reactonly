import React from 'react'
import img1 from "../../IMAGES/AboutUsImages/o.jpeg"
import { FaLocationDot } from "react-icons/fa6";
import { IoMdTime } from "react-icons/io";

export default function LocOpeningHour() {
  return (
    <>
<div style={{ backgroundColor: "#caf0f8" }}>
  <div className='container'>
    <div className="row mt-5 ml-2">
      {/* Location & Opening Hours */}
      <div className="col-md-6 col-sm-12">
        <div className="">
          <h2 className="my-4">Location & Opening Hours</h2>
          <p className="mb-4 pb-2">Unit 46, Vicarage Field, Ripple Road, Barking, England, IG11 8DG</p>
        </div>
        {/* Timing */}
        <div className="row g-4">
          {/* Monday to Saturday */}
          <div className="col-md-6 col-sm-12">
            <div className="d-flex align-items-center">
              <div className="d-flex flex-shrink-0 align-items-center justify-content-center">
                <IoMdTime style={{ fontSize: '45px' }} className='mx-4' />
              </div>
              <div className="ms-4">
                <p className="mb-2">Monday To Saturday</p>
                <h5 className="mb-0">Timing: 10:00 am - 20:00pm </h5>
              </div>
            </div>
          </div>
          {/* Sunday */}
          <div className="col-md-6 col-sm-12">
            <div className="d-flex align-items-center">
              <div className="d-flex flex-shrink-0 align-items-center justify-content-center">
                <IoMdTime style={{ fontSize: '45px' }} className='mx-4' />
              </div>
              <div className="ms-4">
                <p className="mb-2">Sunday</p>
                <h5 className="mb-0">Currently Closed </h5>
              </div>
            </div>
          </div>
        </div>
        {/* Get Direction */}
        <div className="col-md-6 col-sm-12 my-5">
          <div className="d-flex align-items-center">
            <FaLocationDot style={{ fontSize: '35px' }} className='mx-4' />
            <a className="text-dark text-decoration-none" href="https://www.google.com/maps/dir//21+East+St,+Barking+IG11+8ER,+UK/@51.5367813,0.072513,16z/data=!4m8!4m7!1m0!1m5!1m1!1s0x47d8a66cb84c5555:0x3a69dbff3fffc4fc!2m2!1d0.0776629!2d51.5367814?entry=ttu"
              target="_blank" style={{ color: "#AB7442" }}>Get Direction</a>
          </div>
        </div>
      </div>
      {/* Image */}
      <div className='col-md-6 col-sm-12 mt-3'>
        <img className='img-fluid mb-2' src={img1} alt="" style={{ width: "100%", maxWidth: "100%" }} />
      </div>
    </div>
  </div>
</div>



      

    </>
  )
}
