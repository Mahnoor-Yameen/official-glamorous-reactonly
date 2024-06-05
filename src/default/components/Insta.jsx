import React from 'react';
import { Link } from 'react-router-dom';
import img1 from "../../IMAGES/Insta/img1.jpg"
import img2 from "../../IMAGES/Insta/img2.jpg"
import img3 from "../../IMAGES/Insta/img3.jpg"
import img4 from "../../IMAGES/Insta/img4.jpg"

import img5 from "../../IMAGES/Insta/img5.jpg"
import img6 from "../../IMAGES/Insta/img6.jpg"
import img7 from "../../IMAGES/Insta/img7.jpg"
import img8 from "../../IMAGES/Insta/img8.jpg"

import img9 from "../../IMAGES/Insta/w1.jpg"
import img10 from "../../IMAGES/Insta/w2.jpg"
import img11 from "../../IMAGES/Insta/w3.jpg"
import img12 from "../../IMAGES/Insta/w4.jpg"

import './Insta.css'






const Insta = () => {

    
    
      return (
<>

{/* strands */}
 <div>
<div >
  <hr />
  <h1 className='text-center my-5 text-dark '>Hair Strands</h1>
  </div>
<Link to='/hairunit' className='text-decoration-none'>
<div className="px-5 row w-100 d-flex justify-content-between">
    <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 col-12 image-container mt-1 " style={{ position: 'relative' }}>
      <img src={img1} alt="" className=" border border-dark img-fluid r-insta" style={{objectFit:"fill"}} />
      <div className="overlay" >Buy</div>
    </div>
    <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 col-12 image-container mt-1 " style={{ position: 'relative' }}>
      <img src={img2} alt="" className=" border border-dark img-fluid r-insta" style={{objectFit:"fill"}}/>
      <div className="overlay" >Buy</div>
    </div>
    <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 col-12 image-container mt-1 " style={{ position: 'relative' }}>
      <img src={img3} alt="" className=" border border-dark img-fluid r-insta" style={{objectFit:"fill"}}/>
      <div className="overlay" >Buy</div>
    </div>
    <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 col-12 image-container mt-1 " style={{ position: 'relative' }}>
      <img src={img4} alt="" className=" border border-dark img-fluid r-insta" style={{objectFit:"fill"}}/>
      <div className="overlay " >Buy</div>
    </div>
  </div>


</Link>
</div> 


{/* styling */}
 <div>

 
<div className='container'>
  <hr />
  <h2 className='text-center my-5'> Our Hair Styling</h2>
  </div>
  <Link to='/hairdresser' className=' text-decoration-none' >
  
  <div className="px-5 row w-100 d-flex justify-content-between">
    <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 col-12 image-container mt-1 " style={{ position: 'relative' }}>
      <img src={img5} alt="" className=" border border-dark img-fluid r-insta" style={{objectFit:"fill"}} />
      <div className="overlay" >Buy</div>
    </div>
    <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 col-12 image-container mt-1 " style={{ position: 'relative' }}>
      <img src={img6} alt="" className=" border border-dark img-fluid r-insta" style={{objectFit:"fill"}}/>
      <div className="overlay" >Buy</div>
    </div>
    <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 col-12 image-container mt-1 " style={{ position: 'relative' }}>
      <img src={img7} alt="" className=" border border-dark img-fluid r-insta" style={{objectFit:"fill"}}/>
      <div className="overlay" >Buy</div>
    </div>
    <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 col-12 image-container mt-1 " style={{ position: 'relative' }}>
      <img src={img8} alt="" className=" border border-dark img-fluid r-insta" style={{objectFit:"fill"}}/>
      <div className="overlay " >Buy</div>
    </div>
  </div>
</Link>

</div>

{/* wigs */}
{/* <div>
<div>
  <hr />
  <h2 className='text-center my-5'> Our Wigs</h2>
  </div>
  <Link to='/hairunit' className='text-decoration-none'>
<section className="animal_section layout_padding">
  <div className="container">
    <div className="animal_container">
     
     
      <div className="box b1">
        <div className="img-box">
          <img src={img9} alt="" />
        </div>
        <div className="detail-box">
          <h5 className='text-dark'>Modern</h5>
          
        </div>
      </div>
      <div className="box b2">
        <div className="img-box">
          <img src={img10} alt="" />
        </div>
        <div className="detail-box">
          <h5 className='text-dark'>Collection</h5>
        
        </div>
      </div>
      <div className="box b1">
        <div className="img-box">
          <img src={img11} alt="" />
        </div>
        <div className="detail-box">
          <h5 className='text-dark'>Straight</h5>
         
        </div>
      </div>
      <div className="box b2">
        <div className="img-box">
          <img src={img12} alt="" />
        </div>
        <div className="detail-box">
          <h5 className='text-dark'>Curly</h5>
         
        </div>
      </div>
    </div>
  </div>
</section>
</Link>

</div> */}


</>
      );
    };
    

export default Insta;
