import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import img1 from "./../IMAGES/BannerImages/b1.jpg"
import img2 from "./../IMAGES/BannerImages/b2.jpg"
import img3 from "./../IMAGES/BannerImages/b3.jpg"
import img7 from "./../IMAGES/BannerImages/b7.avif"
import img8 from "./../IMAGES/BannerImages/b8.jpg"


import { Link } from 'react-router-dom';
export default function BannerSection() {
  return (
    <>



<Carousel data-bs-theme="dark" className=''>
  {/* first image */}
  <Carousel.Item style={{backgroundColor:"rgba(0, 0, 0, 0.2)"}} >

    <Carousel.Caption className='d-none d-md-block'>
      {/* Hidden on screens smaller than md (768px) */}
      <div className='d-flex justify-content-center align-items-center' style={{ marginBottom: '50px', marginRight: '50px', textAlign: 'center' }}>
        <Link to="/hairdresser" className='text-decoration-none'>
          <h5 className="text-white text-uppercase ">Welcome To Glamorous Beauty</h5>
          <h1 className="text-white mb-4">Hair Dressing Section</h1>
          <span  className="btn btn-light">Book Here</span>
        </Link>
      </div>
    </Carousel.Caption>
    <img
      className="d-block w-100 border"
      src={img7}
      alt="First slide"
      style={{ maxHeight: "500px", objectFit: "cover" }}
    />

  </Carousel.Item>

  {/* second image */}
  <Carousel.Item style={{backgroundColor:"rgba(0, 0, 0, 0.2)"}}>
    <img
      className="d-block w-100"
      src={img7}
      alt="Second slide"
      style={{ maxHeight: "500px", objectFit: "cover" }}
    />
    <Carousel.Caption className='d-none d-md-block'>
      {/* Hidden on screens smaller than md (768px) */}
      <div className='d-flex justify-content-center align-items-center' style={{ marginBottom: '50px', marginRight: '50px', textAlign: 'center' }}>
        <Link to="/section" className='text-decoration-none' >
          <h5 className="text-white text-uppercase ">Welcome To Glamorous Beauty</h5>
          <h1 className="text-white mb-4">Online Store</h1>
          <span  className="btn btn-light">Tap Here</span>
        </Link>
      </div>
    </Carousel.Caption>
  </Carousel.Item>

    {/* first image */}
    <Carousel.Item style={{backgroundColor:"rgba(0, 0, 0, 0.2)"}} >

<Carousel.Caption className='d-none d-md-block'>
  {/* Hidden on screens smaller than md (768px) */}
  <div className='d-flex justify-content-center align-items-center' style={{ marginBottom: '50px', marginRight: '50px', textAlign: 'center' }}>
    <Link to="/hairdresser" className='text-decoration-none'>
      <h5 className="text-white text-uppercase ">Welcome To Glamorous Beauty</h5>
      <h1 className="text-white mb-4">Hair Dressing Section</h1>
      <span  className="btn btn-light">Book Here</span>
    </Link>
  </div>
</Carousel.Caption>
<img
  className="d-block w-100 border"
  src={img2}
  alt="First slide"
  style={{ maxHeight: "500px", objectFit: "cover" }}
/>

</Carousel.Item>

</Carousel>







    </>
  )
}
