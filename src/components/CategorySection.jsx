import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'


import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

// img importing
import img1 from "./../IMAGES/ServicesImages/aesthetic.jpeg"
import img2 from "./../IMAGES/ServicesImages/eyelash.jpeg"
import img3 from "./../IMAGES/ServicesImages/dressing.jpg"
import img4 from "./../IMAGES/ServicesImages/manipedi.jpg"
import img5 from "./../IMAGES/ServicesImages/hairtrimming.jpeg"



export default function CategorySection() {

    const[categoryheading,setcategoryheading]=useState([])
const services = [
    {
        Sname:"Hair Dressing",
        type:"CheckOut",
        image:img3
    },
    {
        Sname:"Trimming & Hair Cutting",
        type:"Walk-ins Only",
        image:img5
    }, {
        Sname:"Eyelash Extension & Brows",
        type:"Bookings Are Available",
        image:img2
    }, {
        Sname:"Mani- Pedi Treatments",
        type:"Bookings Are Available",
        image:img4
    }, {
        Sname:"Aesthetic Treatments",
        type:"Bookings Are Available",
        image:img1
    },

]

useEffect(() => {
    AOS.init({
      offset: 300,
      duration: 500
    });
  
  },[])


    return (
        <>
            

            {/* ek container */}

            <div className="container">

                {/* container has 2 DIVS HEADINGS AND CARD */}
                <div className="text-center my-5">
                    <h1 style={{fontFamily:"sans-serif", fontWeight:"bold"}}>Current Services</h1>
                    <hr />
                </div>


                <div className="row" data-aos="fade-up" data-aos-duration="1000">
                 {services.map((value,index)=>
                    <div className="col-md-4 my-2 text-center" key={index} >
                        <Link className='text-decoration-none' to={`/section`}>
                        <Card style={{backgroundColor:"#caf0f8"}} >
                            <Card.Body className=''>
                                <div className=''>
                                <img src={value.image} alt="" style={{maxHeight:"250px", width:"100%"}} className='img-fluid' />

                                </div>
                                <div className=''>
                                   <h2>{value.Sname}</h2>

                                   <p>{value.type}</p>
                                <span>Tap Here</span> 
                                </div>
                                
                            </Card.Body>
                        </Card>
                        </Link>
                    </div>
                        )}

                </div>
            </div>



        </>
    )
}
