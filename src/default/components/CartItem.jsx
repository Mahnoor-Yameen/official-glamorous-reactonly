import React, { useEffect } from 'react'
import { CartContextVariable } from '../../context/CartContext';   //likhna baki
import { FaRegTrashAlt } from "react-icons/fa";
import imgforservice from "../../IMAGES/service.jpg"
import { useContext } from 'react';

export default function CartItem({ data }) {
  const { cart_state, cart_dispatch } = useContext(CartContextVariable)

  // Function to handle increase quantity
  const increaseQuantity = () => {
    // Dispatch action to increase quantity for matching product
    cart_dispatch({ type: 'INCREASE_QUANTITY', title: data.title });
  };

  // Function to handle decrease quantity
  const decreaseQuantity = () => {
    // Dispatch action to decrease quantity for matching product
    cart_dispatch({ type: 'DECREASE_QUANTITY', title: data.title });
  };



  return (
    <>

      <div className='card mb-3 shadow-sm' style={{ backgroundColor: "#" }}>
        <div className="row g-0">


          <div className="col-md-4 col-sm-4 col-4 d-flex align-items-center">
            
          {data && data.thumbnail ? (
                    <img
                      src={data.thumbnail}
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
          
          

          <div className="col-md-8 col-sm-8 col-8 ">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center mb-1">
                <h6 className="card-title">{data.title.length > 20 ? data.title.slice(0, 25) + '...' : data.title}</h6>
              </div>
              <div className='d-flex align-items-center justify-content-between'>
                <span className="badge bg-secondary p-2" style={{ fontSize: "13px" }}>Price:  &#163;{data.sign}</span>
                <FaRegTrashAlt className='mx-3' style={{ cursor: "pointer" }} onClick={() => { dispatch({ type: 'DELETE_PRODUCT', title: data.title }) }} />
              </div>
              {data && !data.thumbnail && (
                <div>
              <div>
              <span>Time: {data.selectedSlot}:00 o'clock </span>
              </div>
                <div>
              {/* <span>Date: {data.selectedDate} </span> */}
              <span>Date: {data.selectedDate.split('-').reverse().join('-')} </span>
                </div>
                </div>
              )}

              <p className='mt-1'>Product Quantity: {data.ProductQuantity}</p>
              <p>Total Price: {data.ProductQuantity * data.sign}</p>


              {/* Quantity Manager */}

              {data && data.thumbnail && (
                <div className='d-flex justify-content-center my-2 align-items-center '>
                <button disabled={data.ProductQuantity > 1 ? false : true} className="btn btn-dark border " onClick={decreaseQuantity}>-</button>
                <span className='mx-3'>{data.ProductQuantity}</span>
                <button className=" btn btn-dark border  mx-3" onClick={increaseQuantity}>+</button>
              </div>
              )}
              


            </div>
          </div>


        </div>


      </div>

    </>
  )
}
