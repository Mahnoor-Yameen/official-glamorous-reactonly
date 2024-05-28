import React from 'react'
import img1 from "./../IMAGES/SalonServicePage/one.webp"


export default function ServicePage() {
  return (
    <>
    
<div style={{backgroundColor:"#caf0f8"}}>
    
    <div className="container py-5">
        <h1 className='text-center'>SALON SERVICES</h1>
      </div>


      <div className='container d-flex justify-content-center'>
        <img src={img1} alt="" style={{height:"50vh"}} />

      </div>
      </div>

    </>
  )
}
