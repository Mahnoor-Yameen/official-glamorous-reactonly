import React from 'react'
import img1 from "./../IMAGES/AboutUsImages/1.jpg"
import { FaCheck } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";



export default function HeaderSection() {
    return (
        <>

           



        

            
<div className="mt-5 container" style={{ backgroundColor: "#caf0f8" }}>
  <div className="row d-flex justify-content-center align-items-center">
  <div className="col-md-6 col-sm-12 d-flex justify-content-center mb-5 align-items-center">
  <img className="img-fluid" src={img1} alt="" style={{ height: "auto", maxWidth: "100%", maxHeight: "70vh" }} />
</div>


    <div className="col-md-6 col-sm-12">
      <h1 className="text-center">About Us</h1>
      <p className="mb-3">
        One-stop Hair and Beauty Salon providing services listed below:
        Afro-Caribbean Hairdressing | Eyelash Extensions & Brows | Barbering Services | Nail Services | Aesthetics Treatments
        We are based in the heart of Barking, East London (UK).
        The VEY Store is the permanent section for all haircare products, hair essentials, and hair extensions that we are currently selling online!
      </p>
      <div className="row g-4 mb-4 pb-2 ">
                            <div className="col-md-6 col-sm-6 my-4 ">
                                <div className="d-flex align-items-center">
                                    <div className="d-flex flex-shrink-0 align-items-center justify-content-center " style={{backgroundColor:"#caf0f8"}}
                                        >
                                       <FaUsers style={{ fontSize: '45px', backgroundColor:"#caf0f8" }} className=' mx-4'/>                                    </div>
                                    <div >
                                        <h2 className=" mb-1 text-dark" style={{color: "#ffcd33"}} data-toggle="counter-up">1454+</h2>
                                        <p className="fw-medium mb-0 text-dark" style={{color: "#ffcd33"}}>Happy Clients</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-6 " >
                                <div className="d-flex align-items-center">
                                    <div className="d-flex flex-shrink-0 align-items-center justify-content-center " style={{backgroundColor:"#caf0f8"}}
                                        >
                                        <FaCheck style={{ fontSize: '45px', backgroundColor:"#caf0f8" }} className=' mx-4'/>
                                    </div>
                                    <div >
                                        <h2 className=" mb-1 text-dark" data-toggle="counter-up" style={{color: "#ffcd33"}}>2500+</h2>
                                        <p className="fw-medium mb-0 text-dark" style={{color: "#ffcd33"}}>Services Done</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                   
                </div>
            </div>
        </>
    )
}
