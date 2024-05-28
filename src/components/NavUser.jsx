import React, { useContext, useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Cartlogooffcanvas from './Cartlogooffcanvas';
import { CartContext } from './../context/addtocart/context';   //likhna baki

import Dropdown from 'react-bootstrap/Dropdown';

import { FaUser } from "react-icons/fa";
import { signupcontext } from './../context/signup/contextsignup';

import { Link } from 'react-router-dom';


export default function NavUser() {

    const {login_state,login_dispatch}=useContext(signupcontext)
    const {state,dispatch}=useContext(CartContext)


  return (
    <>
      <Navbar expand="lg" sticky="top" className="py-3" style={{ backgroundColor: "#caf0f8" }}>
        <Container>



          <Navbar.Brand href="">
            {/* <img
              alt=""
              src="https://cdn.pixabay.com/photo/2017/03/16/21/18/logo-2150297_640.png"
              width="30"
              height="30"
              className="d-inline-block align-top rounded-circle"
            />{' '} */}
            
            <Link to="/" className='text-decoration-none'><h2 className="m-0 text-dark"  style={{fontFamily:"sans-serif", fontWeight:"bold"}}>Glamorous Beauty</h2></Link>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav my-2" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto d-flex align-items-center">

              {/* dropdown 1 */}
              <Dropdown>
                <Dropdown.Toggle variant="" id="dropdown-basic" style={{fontWeight:"bold"}}>
                  Store
                </Dropdown.Toggle>
                <Dropdown.Menu style={{ backgroundColor: "#d0f4de" }}>
                  <Dropdown.Item href="#/action-1"><Link className='nav-link' to="/hairextension" style={{fontWeight:"bold"}}>Hair Extension</Link></Dropdown.Item>
                  <Dropdown.Item href="#/action-1"><Link className='nav-link' to="/hairessential" style={{fontWeight:"bold"}}>Hair Essential</Link></Dropdown.Item>
                  <Dropdown.Item href="#/action-1"><Link className='nav-link' to="/hairunit" style={{fontWeight:"bold"}}>Hair Unit</Link></Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

               {/* dropdown 1 */}
               <Dropdown>
                <Dropdown.Toggle variant="" id="dropdown-basic" style={{fontWeight:"bold"}}>
                  Salon
                </Dropdown.Toggle>
                <Dropdown.Menu style={{ backgroundColor: "#d0f4de" }}>
                  <Dropdown.Item href="/hairdresser"><Link className='nav-link' to="/hairdresser" style={{fontWeight:"bold"}}>Book At Hairdresser Session</Link></Dropdown.Item>
                  <Dropdown.Item href="/section"><Link className='nav-link' to="/section" style={{fontWeight:"bold"}}>Services</Link></Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

               {/* dropdown 1 */}
               <Dropdown>
                <Dropdown.Toggle variant="" id="dropdown-basic" style={{fontWeight:"bold"}}>
                  Policies
                </Dropdown.Toggle>
                <Dropdown.Menu style={{ backgroundColor: "#d0f4de" }}>
                  <Dropdown.Item href="refund"><Link className='nav-link' to="/refund" style={{fontWeight:"bold"}}>Refund</Link></Dropdown.Item>
                  <Dropdown.Item href="privacy"><Link className='nav-link' to="/privacy" style={{fontWeight:"bold"}}>Privacy</Link></Dropdown.Item>
                  <Dropdown.Item href="shipping"><Link className='nav-link' to="/shipping" style={{fontWeight:"bold"}}>Shipping</Link></Dropdown.Item>
                  <Dropdown.Item href="terms"><Link className='nav-link' to="/terms" style={{fontWeight:"bold"}}>T & Cs</Link></Dropdown.Item>

                </Dropdown.Menu>
              </Dropdown>

               {/* dropdown 1 */}
               <Dropdown>
                <Dropdown.Toggle variant="" id="dropdown-basic" style={{fontWeight:"bold"}}>
                  Other
                </Dropdown.Toggle>
                <Dropdown.Menu style={{ backgroundColor: "#d0f4de" }}>
                  <Dropdown.Item href="/blog"><Link className='nav-link' to="/blog" style={{fontWeight:"bold"}}>Blog</Link></Dropdown.Item>
                  <Dropdown.Item ><Link className='nav-link' to="/contactus" style={{fontWeight:"bold"}}>Contact Us</Link></Dropdown.Item>
                  <Dropdown.Item ><Link className='nav-link' to="/allorders" style={{fontWeight:"bold"}}>My All Orders</Link></Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

              <Dropdown>
                <Dropdown.Toggle variant="" id="dropdown-basic" style={{fontWeight:"bold"}}>
                
            <FaUser style={{fontSize:"20px"}} className='mx-3'/>
                </Dropdown.Toggle>
                <Dropdown.Menu style={{ backgroundColor: "#d0f4de" }} >
                  <Dropdown.Item  onClick={()=>{login_dispatch({type:'LOGOUT'})
                dispatch({type:'CLEAR_CART'})
                }}>LogOut</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

              {/* icon of account */}
<button className='btn btn-dark my-3'><Link to="/searchinput" className='text-decoration-none text-light'>Search</Link></button>


              <Cartlogooffcanvas />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>



    </>
  )
}
