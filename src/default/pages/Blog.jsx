import React from 'react'
import img1 from "../../IMAGES/Blog/one.webp"


export default function Blog() {
    return (
        <>
<div style={{backgroundColor:"#"}}>



            <div className="container py-5">
                <h1 className='text-center'>We Are Re-Opening</h1>
            </div>


                <p className='my-3  text-center '>July 1. 2020</p>
            <div className="container " style={{paddingLeft:"320px", paddingRight:"300px"}}>
                <p className='text-left ' style={{fontSize:"18px"}}>After months of our small workplace having to shut down due to Covid-19, we are glad to announce that we will be returning back on the 04/07/2020!</p>
                <p className='text-left py-5' style={{fontSize:"18px"}}>As places will begin to reopen slowly this means that Health and Safety procedures must be followed in order for all businesses to remain active. Here, we have come up with a simple way of letting customers know how they can get their hair done safely in our workplace. </p>
            </div>









            <div className='container d-flex justify-content-center'>
                <img src={img1} alt="" style={{ height: "60vh" }} />
            </div>

            <div className='container'>
                <p className='text-center mx-5'>For any other information please contact us via email, thank you.</p>
            </div>
            </div>
        </>
    )
}
