import React, { useEffect } from 'react';
import { CartContextVariable } from '../../context/CartContext';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaRegTrashAlt } from "react-icons/fa";
import imgforservice from "../../IMAGES/service.jpg";

export default function Checkout() {
  const [totalPayment, setTotalPayment] = useState(0);
  const { cart_state, cart_dispatch } = useContext(CartContextVariable);

  useEffect(() => {
    const total = cart_state.cart.reduce((accumulator, product) => accumulator + (product.sign * product.ProductQuantity), 0);
    setTotalPayment(total);
  }, [cart_state]);

  return (
    <>
<div style={{backgroundColor:""}}>

      <div className="container mb-5">
        <h1 className='text-center py-5'>Checkout</h1>
        <hr />
      </div>

      <div className='container d-flex justify-content-center  py-3'>
        <div className="d-flex flex-column">
          {cart_state.cart.map((value, index) => (
            <div className='card mb-3 shadow-sm' key={index} style={{backgroundColor:""}}>
              <div className="row g-0" >
                <br />
                <div className="col-md-5 d-flex justify-content-center align-items-center">
                  {value && value.thumbnail ? (
                    <img
                      src={value.thumbnail}
                      alt="..."
                      style={{
                        height: '20vh',
                        objectFit: 'contain'
                      }}
                      className='img-fluid rounded-start bg-dark'
                    />
                  ) : (
                    <img
                      src={imgforservice}
                      alt="..."
                      style={{
                        height: '20vh',
                        objectFit: 'contain'
                      }}
                      className='img-fluid rounded-start bg-dark'
                    />
                  )}
                </div>

                <div className="col-md-7">
                  <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center mb-1">
                      <h6 className="card-title">{value.title.length > 20 ? value.title.slice(0, 25) + '...' : value.title}</h6>
                    </div>
                    <div className='d-flex align-items-center justify-content-between'>
                      <span className="badge bg-secondary p-2" style={{ fontSize: "13px" }}>Price:  &#163;{value.sign}</span>
                      <FaRegTrashAlt className='mx-3' style={{ cursor: "pointer" }} onClick={() => { dispatch({ type: 'DELETE_PRODUCT', title: value.title }) }} />
                    </div>
                    {value && !value.thumbnail && (
                <div>
              <div>
              <span>Time: {value.selectedSlot}:00 o'clock </span>
              </div>
                <div>
              {/* <span>Date: {data.selectedDate} </span> */}
              <span>Date: {value.selectedDate.split('-').reverse().join('-')} </span>
                </div>
                </div>
              )}

                    <p className='mt-1'>Product Quantity: {value.ProductQuantity}</p>
                    <p>Total Price: {value.ProductQuantity * value.sign}</p>

                    {/* Render increase and decrease buttons only if value.thumbnail exists */}
                    {value && value.thumbnail && (
                      <div className='d-flex justify-content-center my-2 align-items-center'>
                        <button disabled={value.ProductQuantity > 1 ? false : true} className="bg-dark border " onClick={() => { dispatch({ type: 'DECREASE_QUANTITY', title: value.title }) }}>-</button>
                        <span className='mx-3'>{value.ProductQuantity}</span>
                        <button className="bg-dark border  mx-3" onClick={() => { dispatch({ type: 'INCREASE_QUANTITY', title: value.title }) }}>+</button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* SUBTOTAL */}
          <div className='d-flex justify-content-between'>
            <h2>SUBTOTAL:</h2>
            <h2 className='mx-3'>{totalPayment} &#163;</h2>
          </div>
          <div>
            <p>Tax included. Shipping calculated at checkout.</p>
          </div>

          <Link to="/payment" className="text-decoration-none btn btn-outline-dark py-3 px-5">Proceed To Pay</Link>
        </div>
      </div>
      </div>

    </>
  );
}
