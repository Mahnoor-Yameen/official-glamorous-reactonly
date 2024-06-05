import React from 'react'
import img1 from "../../IMAGES/AboutUsImages/1.jpg"
import { FaCheck } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";



export default function HeaderSection() {
    return (
        <>

           



        

            
<div className="mt-5 container" style={{ backgroundColor: "#" }}>
  <div className=" d-flex justify-content-center align-items-center">


    <div className="">
      <h1 className="my-2" style={{fontFamily:"sans-serif"}}>DIVERSE STYLING</h1>
      <p className="mb-3 text-muted r-header" style={{fontFamily:"sans-serif"}}>
        One-stop Hair and Beauty Salon providing services listed below:
        Afro-Caribbean Hairdressing | Eyelash Extensions & Brows | Barbering Services | Nail Services | Aesthetics Treatments
        We are based in the heart of Barking, East London (UK).
        Our Store is the permanent section for all haircare products, hair essentials, and hair extensions that we are currently selling online!
      </p>
      <div className="row g-4 mb-4 pb-2 my-3">
                            <div className="col-md-6 col-sm-6 my-4 ">
                                <div className="d-flex align-items-center">
                                    <div className="d-flex flex-shrink-0 align-items-center justify-content-center " style={{backgroundColor:"#"}}
                                        >
                                       <FaUsers style={{ fontSize: '45px', backgroundColor:"#" }} className=' mx-4'/>                                    </div>
                                    <div >
                                        <h2 className=" mb-1 text-dark" style={{color: "#ffcd33"}} data-toggle="counter-up">1454+</h2>
                                        <p className="fw-medium mb-0 text-dark" style={{color: "#ffcd33"}}>Happy Clients</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-6 " >
                                <div className="d-flex align-items-center">
                                    <div className="d-flex flex-shrink-0 align-items-center justify-content-center " style={{backgroundColor:"#"}}
                                        >
                                        <FaCheck style={{ fontSize: '45px', backgroundColor:"#" }} className=' mx-4'/>
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
