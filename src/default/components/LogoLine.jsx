import React from 'react'
import { Link } from 'react-router-dom'
import './LogoLine.css'
import Cartlogooffcanvas from './Cartlogooffcanvas';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


export default function LogoLine() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [search,setsearch] = useState('')
  return (
    <>
    
    
    
<div className="row d-flex align-items-center my-4 w-100">
    <div className="col-7 text-end">
    <Link to="/" className='text-decoration-none'><h2 className="m-0  logo-font" >Glamorous Beauty</h2></Link>

        </div>
        <div className='col-2'>

        </div>

        {/*  */}
        <div className="col-3 d-flex align-items-center">
            <div>
              
              
                <div  onClick={handleShow} className='py-2 text-decoration-none voucher px-3' style={{border:"1px solid #BB9A2D"}}>Search</div>
            </div>

            

      <Modal
        show={show}
        onHide={handleClose}
        // backdrop="static"
        
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <input type="text" placeholder='Search Any Product' onChange={(e)=>setsearch(e.target.value)} />
        </Modal.Body>
        <Modal.Footer className='d-flex justify-content-center'>
          
          <Link to={`/${search}`} className='text-decoration-none text-white p-3 ' onClick={handleClose} style={{backgroundColor:"#BB9D4A"}}>Search</Link>
        </Modal.Footer>
      </Modal>

        </div>
        </div>    
    </>
  )
}
