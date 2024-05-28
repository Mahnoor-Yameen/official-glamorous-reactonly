import React, { useEffect } from 'react'
import { useState, useContext } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { CartContext } from '../context/addtocart/context';   //likhna baki
import { Link } from 'react-router-dom';
import { FaShoppingCart } from "react-icons/fa";
import CartItem from './CartItem';

export default function Cartlogooffcanvas() {

  const [totalPayment, setTotalPayment] = useState(0);
  const {state,dispatch}=useContext(CartContext)

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // console.log(state.cart,"yeh state ma ha")
    // thumbnail, quantity, totalproce, sign, title


    useEffect(() => {

      const total = state.cart.reduce((accumulator, product) => accumulator + (product.sign * product.ProductQuantity), 0)
      setTotalPayment(total)
  }, [state]);


  


  
  return (
    <>
    <button className='btn position-relative btn-dark mx-2' onClick={handleShow}><FaShoppingCart style={{fontSize:"25px"}}/>
    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{state.cart.length}</span>
    </button>


    {/* offcanvas */}
    <Offcanvas show={show} onHide={handleClose} placement='end' name='end' style={{backgroundColor:"#caf0f8"}}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className='mx-5'>CART</Offcanvas.Title>
          <button className='  btn btn-dark mx-3' onClick={()=>{dispatch({type:'CLEAR_CART'})}}>CLEAR CART</button>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {
            state.cart.map((val,index)=>
            <CartItem key={index} data={val}/>

            )
          }


{/* SUBTOTAL */}
<div className='d-flex justify-content-between align-items-center'>
  <h2>SUBTOTAL:</h2>
  <h3 className='mx-2'>{totalPayment}</h3>
</div>
<div>
  <p>Tax included. Shipping calculated at checkout.</p>
</div>



          <Link to="/checkout" className="text-decoration-none btn btn-dark  py-2 px-5" onClick={handleClose}>Checkout</Link> 
        </Offcanvas.Body>
      </Offcanvas>

    
    
    </>
  )
}
