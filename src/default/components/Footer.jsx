import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import './Footer.css'
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
export default function Footer() {


  return (
    <>

      <div className="bg-light">
      <hr />
      <div className="container pt-5 ">

        <div className="row ">

          {/* col one */}
          <div className="col-lg-5 col-md-6">

            {/* main detail */}
            <div className='footer-font'>
              <h4 style={{color:"#BB9A2D"}}>FLAGSHIP GEORGE STREET, MARYLEBONE</h4>
              <p className='text-muted'>42-44 George Street, London W1U 7ES</p>
            </div>

            {/* office timing */}

            <table className="w-100 text-muted footer-font">

              <tr className=''>
                <td>Monday</td>
                <td>
                  9am to 6pm
                </td>
              </tr>
              <tr>
                <td>Tuesday</td>
                <td>
                  9am to 6pm
                </td>
              </tr>
              <tr>
                <td>Wednesday</td>
                <td>
                  9am to 6pm
                </td>
              </tr>
              <tr>
                <td>Thursday</td>
                <td>
                  9am to 8pm
                </td>
              </tr>
              <tr>
                <td>Friday</td>
                <td>
                  9am to 6pm
                </td>
              </tr>
              <tr>
                <td>Saturday</td>
                <td>
                  9am to 6pm
                </td>
              </tr>
              <tr>
                <td>Sunday</td>
                <td>
                  10am to 5pm
                </td>
              </tr>
            </table>

            {/* ending detail */}
            <div className='mt-3'>
              <small>Out of hours appointments can be arranged through reception.</small>
              <div className='mt-2 text-muted footer-font'>Book Flagship Marylebone</div>
              <div  className='footer-font' style={{color:"#BB9A2D"}}>5656565656</div>
            </div>


          </div>

          {/* col two */}

          <div className="col-lg-5 col-md-6">

{/* main detail */}
<div className='footer-font'>
  <h4 style={{color:"#BB9A2D"}}>FLAGSHIP GEORGE STREET, MARYLEBONE</h4>
  <p className='text-muted'>42-44 George Street, London W1U 7ES</p>
</div>

{/* office timing */}

<table className="w-100 text-muted footer-font">

  <tr className=''>
    <td>Monday</td>
    <td>
      9am to 6pm
    </td>
  </tr>
  <tr>
    <td>Tuesday</td>
    <td>
      9am to 6pm
    </td>
  </tr>
  <tr>
    <td>Wednesday</td>
    <td>
      9am to 6pm
    </td>
  </tr>
  <tr>
    <td>Thursday</td>
    <td>
      9am to 8pm
    </td>
  </tr>
  <tr>
    <td>Friday</td>
    <td>
      9am to 6pm
    </td>
  </tr>
  <tr>
    <td>Saturday</td>
    <td>
      9am to 6pm
    </td>
  </tr>
  <tr>
    <td>Sunday</td>
    <td>
      10am to 5pm
    </td>
  </tr>
</table>

{/* ending detail */}
<div className='mt-3'>
  <small>Out of hours appointments can be arranged through reception.</small>
  <div className='mt-2 text-muted footer-font'>Book Flagship Marylebone</div>
  <div  className='footer-font' style={{color:"#BB9A2D"}}>5656565656</div>
</div>


</div>



          {/* /col three */}

          <div className="col-lg-2 col-md-6">
{/* icons */}
<div className='my-2'>
<FaFacebook size={35}/>
<FaInstagram size={35} className='p-2 mx-3' style={{backgroundColor:"black", borderRadius:"50px", color:"white"}}/>
<FaYoutube size={35} className='p-2' style={{backgroundColor:"black", borderRadius:"50px", color:"white"}}/>
{/* <FaXTwitter size={35} className='p-2 mx-3' style={{backgroundColor:"black", borderRadius:"50px", color:"white"}}/> */}

</div>

{/* baki ka work */}
            
             <div className='mt-3'>
              <Link to='/' className='text-decoration-none text-dark d-block mt-1'>Careers</Link>
              <Link to='/' className='text-decoration-none text-dark d-block mt-1'>Terms & Conditions</Link>
              <Link to='/' className='text-decoration-none text-dark d-block mt-1'>Contact Us</Link>
              <Link to='/' className='text-decoration-none text-dark d-block mt-1'>Privacy Policy</Link>

             </div>

            </div>


        </div>


        {/* last credits */}
        <hr />
        <div className="d-flex justify-content-center align-items-center">
          <div>
            <div>Power by <a href="http://easylink.pk/" target='_blank' className='text-decoration-none text-dark'>EASYLINK.pk</a></div>
            <div>Contact EasyLink: +92 311 1088938</div>
          </div>

        </div>
      </div>


</div>





    </>
  )
}
