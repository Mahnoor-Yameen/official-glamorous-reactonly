import React from 'react'
// img importing
import img1 from "../../IMAGES/BannerImages/banner1.jpg"
import img2 from "../../IMAGES/BannerImages/banner2.webp"
import img3 from "../../IMAGES/BannerImages/banner3.jpeg"
import img4 from "../../IMAGES/BannerImages/banner4.jpg"
import img5 from "../../IMAGES/BannerImages/banner5.jpg"
import img6 from "../../IMAGES/BannerImages/banner6.jpg"
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";

import './BannerSection.css'

import { Link } from 'react-router-dom';
export default function BannerSection() {
   
  return (
    <>



      <div className="row w-100 banner-section ">
        <div className="col-lg-6 col-md-6 col-sm-12 col-12 r-banner" style={{ position: 'relative', padding: '0' }}>
          <img src={img1} alt="" className='img-fluid' style={{ width:'100%',height:"100%", filter: 'brightness(45%)', objectFit:"fill" }} />
          <div style={{
            position: 'absolute',
            top: '35%',
            left: '50%',
            transform: 'translate(-50%, -35%)',
          }}>
            <h3 className='text-white my-5' >
              HAIR DRESSING
            </h3>
            <Link to='/section' className=' text-decoration-none banner-section-hover py-2 px-5 ' >
              Book
            </Link>
          </div>

        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 col-12 r-banner" style={{ position: 'relative',  padding: '0' }}>
          <img src={img2} alt="" className='img-fluid w-100' style={{ width:'100%',height: '100%', filter: 'brightness(50%)', objectFit:"fill" }} />
          <div style={{
            position: 'absolute',
            top: '35%',
            left: '50%',
            transform: 'translate(-50%, -35%)',
          }}>
            <h3 className='text-white my-5' >
              TRIMMING & HAIR CUTTING
            </h3>
            <Link to='/section' className='text-white text-decoration-none banner-section-hover py-2 px-5 ms-5' >
              Book
            </Link>
          </div>
        </div>
      </div>

    
       <div className="row w-100 banner-section ">
        <div className="col-lg-6 col-md-6 col-sm-12 col-12 r-banner" style={{ position: 'relative', padding: '0' }}>
          <img src={img3} alt="" className='img-fluid' style={{ width:'100%',height: '100%', filter: 'brightness(45%)', objectFit:"fill" }} />
          <div style={{
            position: 'absolute',
            top: '35%',
            left: '50%',
            transform: 'translate(-50%, -35%)',
          }}>
            <h3 className='text-white my-5' >
              AESTHETIC TREATMENT
            </h3>
            <Link to='/section' className='text-white text-decoration-none banner-section-hover py-2 px-5 ms-5'>
              Book
            </Link>
          </div>

        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 col-12 r-banner" style={{ position: 'relative', padding: '0' }}>
          <img src={img6} alt="" className='img-fluid' style={{ width:'100%',height: '100%', filter: 'brightness(50%)', objectFit:"fill" }} />
          <div style={{
            position: 'absolute',
            top: '35%',
            left: '50%',
            transform: 'translate(-50%, -35%)',
          }}>
            <h3 className='text-white my-5' >
              OUR HAIR ACCESSORIES
            </h3>
            <Link to='/hairessential' className='text-white text-decoration-none banner-section-hover py-2 px-5 ms-5' >
              Book
            </Link>
          </div>
        </div>
      </div>

      <div className="row w-100 banner-section ">
        <div className="col-lg-6 col-md-6 col-sm-12 col-12 r-banner" style={{ position: 'relative', padding: '0' }}>
          <img src={img5} alt="" className='img-fluid' style={{ width:'100%',height: '100%', filter: 'brightness(45%)', objectFit:"fill" }} />
          <div style={{
            position: 'absolute',
            top: '35%',
            left: '50%',
            transform: 'translate(-50%, -35%)',
          }}>
            <h3 className='text-white my-5' >
              MANICURE _ PEDICURE
            </h3>
            <Link to='/section' className='text-white text-decoration-none banner-section-hover py-2 px-5 ms-5' >
              Book
            </Link>
          </div>

        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 col-12 r-banner" style={{ position: 'relative', padding: '0' }}>
          <img src={img4} alt="" className='img-fluid' style={{ width:'100%',height: '100%', filter: 'brightness(50%)', objectFit:"fill" }} />
          <div style={{
            position: 'absolute',
            top: '35%',
            left: '50%',
            transform: 'translate(-50%, -35%)',
          }}>
            <h4 className='text-white my-5' >
              EYELASH 
            </h4>
            <Link to='/section' className='text-white  text-decoration-none banner-section-hover py-2 px-5 ms-5' >
              Book
            </Link>
          </div>
        </div>
      </div> 










<div className=' py-5 banner-font' style={{backgroundColor:"#F5F5F5"}}>
  <div className='text-center text-uppercase' style={{fontWeight:"bold"}}>Glamorous  Beauty Salon </div>
<div className='d-flex justify-content-center align-items-center'>
<div>4.5</div>
<div className='mx-3'>
<FaStar size={20} style={{color:"#ffbe0b"}}/>
<FaStar size={20} style={{color:"#ffbe0b"}}/>
<FaStar size={20} style={{color:"#ffbe0b"}}/>
<FaStar size={20} style={{color:"#ffbe0b"}}/>
<FaStarHalfAlt size={19} style={{color:"#ffbe0b"}}/>


</div>
<div>

</div>
</div>
</div>






    </>
  )
}
