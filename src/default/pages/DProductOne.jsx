import React from 'react'
import { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { CartContextVariable } from '../../context/CartContext';
import Swal from 'sweetalert2';
import ImageSection from '../components/ImageSection'
import { HairUnits } from '../data';
import {HairEssentials} from '../data'
import {HairExtensions} from '../data'







export default function DProductOne() {

  // for page detail
  const { hollowtwo } = useParams();

  // yahan product data ayega from api
  const [productdetail, setproductdetail] = useState({})

  // all products from ex, uni, ess 
  const ArrayToMatch = [
    ...HairUnits, ...HairEssentials, ...HairExtensions
   ]

  useEffect(() => {
    const Found = ArrayToMatch?.find(item => item?.title === hollowtwo)

    if (Found) {
      console.log("Found:", Found);
      setproductdetail(Found)
    } else {
      console.log("Not found");
    }


  }, [])





  const [ProductQuantity, setProductQuantity] = useState(1)
  const { cart_state, cart_dispatch } = useContext(CartContextVariable)

  const addtocart = () => {

    const payload = {
      ...productdetail,
      ProductQuantity,
      TotalPrice: productdetail?.sign * ProductQuantity
    };

    // Check if the product is already in the cart
    const existingProductIndex = cart_state?.cart?.findIndex(item => item?.title === productdetail?.title);

    if (existingProductIndex !== -1) {
      // If the product is already in the cart, update its quantity
      const updatedCart = [...cart_state.cart];
      updatedCart[existingProductIndex].ProductQuantity += ProductQuantity;
      updatedCart[existingProductIndex].TotalPrice += payload.TotalPrice;
      cart_dispatch({ type: "UPDATE_CART", payload: updatedCart });
    } else {
      // If the product is not in the cart, add it
      cart_dispatch({ type: "ADD_TO_CART", payload });
    }
    Swal.fire({
      title: 'ADDED TO CART',
      text: 'check your cart for checkout',
      icon: 'success',
      confirmButtonText: 'Continue Shopping'
    })

  }

  return (
    <>

      <div>
        {/* left right */}
        <div className='row container py-5' >

          {/* left */}
          <div className=" col-md-6 col-sm-12">
            {
              productdetail?.thumbnail && <ImageSection images={productdetail?.thumbnail} />
            }
          </div>

          {/* right */}
          {/* ADD TO CART FUNCTIONALITY */}
          <div className=' col-md-6 col-sm-12'>

            {/* intro */}
            <div className='my-5'>
              <h1>{productdetail?.title}</h1>
              <p className='' style={{ fontSize: "18px" }}>Price:  &#163; {productdetail?.sign}</p>
              <p className='text-center my-5' style={{ fontSize: "18px" }}>Tax included. Shipping calculated at checkout.</p>
            </div>

            {/* 6 col ki space pe working kr rhy */}



            {/* quantity */}
            <div className='d-flex justify-content-center my-2 align-items-center '>
              <span className='mx-5 ' style={{ fontSize: "15px", fontWeight: "bold" }}>Quantity:</span>
              <button disabled={ProductQuantity > 1 ? false : true} className="btn btn-dark border  py-2" onClick={() => setProductQuantity(ProductQuantity - 1)}>-</button>
              <span className='mx-3'>{ProductQuantity}</span>
              <button className="btn btn-dark border mx-3 py-2" onClick={() => setProductQuantity(ProductQuantity + 1)}>+</button>
            </div >

            {/* 6 cols again */}
            <div className='d-flex my-5'>
              {/* <button className='p-4 mx-3 bg-light border' onClick={addtocart}><Link to="/checkout" className='text-dark  text-decoration-none'>Other Payment Options</Link></button> */}
              <button className=' p-4 mx-3 btn btn-dark border' onClick={addtocart}>Add to Cart</button>

            </div>







          </div>
        </div>
      </div>

    </>
  )
}
