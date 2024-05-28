import React from 'react'
import { useState, useEffect,useContext } from 'react'
import { useParams } from 'react-router-dom'
import { CartContext } from '../context/addtocart/context';
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2';

import ImageSection from '../components/ImageSection'

// HAIR UNITS
import img1 from "./../IMAGES/HairUnit/1.jpg"
import img2 from "./../IMAGES/HairUnit/2.jpg"
import img3 from "./../IMAGES/HairUnit/3.jpg"
import img4 from "./../IMAGES/HairUnit/4.jpg"
import img5 from "./../IMAGES/HairUnit/5.jpg"
import img6 from "./../IMAGES/HairUnit/6.jpg"
import img7 from "./../IMAGES/HairUnit/7.jpg"
import img8 from "./../IMAGES/HairUnit/8.jpg"
import img9 from "./../IMAGES/HairUnit/9.jpg"
import img10 from "./../IMAGES/HairUnit/10.jpg"
import img11 from "./../IMAGES/HairUnit/11.jpg"
import img12 from "./../IMAGES/HairUnit/12.jpg"
import img13 from "./../IMAGES/HairUnit/13.jpg"
import img14 from "./../IMAGES/HairUnit/14.jpg"
import img15 from "./../IMAGES/HairUnit/15.jpg"
import img16 from "./../IMAGES/HairUnit/16.jpg"
import img17 from "./../IMAGES/HairUnit/17.jpg"
import img18 from "./../IMAGES/HairUnit/18.jpg"
import img19 from "./../IMAGES/HairUnit/19.jpg"
import img20 from "./../IMAGES/HairUnit/20.jpg"
import img21 from "./../IMAGES/HairUnit/21.jpg"
// new addition on 27 may
import imgn1 from "./../IMAGES/HairUnit/n1.jpg"
import imgn2 from "./../IMAGES/HairUnit/n2.jpg"
import imgn3 from "./../IMAGES/HairUnit/n3.jpg"
import imgn4 from "./../IMAGES/HairUnit/n4.jpg"
import imgn5 from "./../IMAGES/HairUnit/n5.jpg"
import imgn6 from "./../IMAGES/HairUnit/n6.jpg"
import imgn7 from "./../IMAGES/HairUnit/n7.jpg"
import imgn8 from "./../IMAGES/HairUnit/n8.jpg"
import imgn9 from "./../IMAGES/HairUnit/n9.jpg"

// Hair essentials
import Eimg1 from "./../IMAGES/HairEssential/E1.jpg"
import Eimg2 from "./../IMAGES/HairEssential/E2.jpg"
import Eimg3 from "./../IMAGES/HairEssential/E3.jpg"
import Eimg4 from "./../IMAGES/HairEssential/E4.jpg"
import Eimg5 from "./../IMAGES/HairEssential/E5.jpg"
import Eimg6 from "./../IMAGES/HairEssential/E6.jpg"
import Eimg7 from "./../IMAGES/HairEssential/E7.jpg"
import Eimg8 from "./../IMAGES/HairEssential/E8.jpg"
import Eimg9 from "./../IMAGES/HairEssential/E9.jpg"
import Eimg10 from "./../IMAGES/HairEssential/E10.jpg"
import Eimg11 from "./../IMAGES/HairEssential/E11.jpg"
import Eimg12 from "./../IMAGES/HairEssential/E12.jpg"
import Eimg13 from "./../IMAGES/HairEssential/E13.jpg"
import Eimg14 from "./../IMAGES/HairEssential/E14.jpg"
import Eimg15 from "./../IMAGES/HairEssential/E15.jpg"

// Hair Extensions

import img1EX from "./../IMAGES/HairExtension/HE1.webp"
import img2EX from "./../IMAGES/HairExtension/HE2.webp"
import img3EX from "./../IMAGES/HairExtension/HE3.webp"
import img4EX from "./../IMAGES/HairExtension/HE4.webp"
import img5EX from "./../IMAGES/HairExtension/HE5.jpg"
import img6EX from "./../IMAGES/HairExtension/HE6.webp"
import img7EX from "./../IMAGES/HairExtension/HE7.webp"
import img8EX from "./../IMAGES/HairExtension/HE8.webp"
import img9EX from "./../IMAGES/HairExtension/HE9.webp"
import img10EX from "./../IMAGES/HairExtension/HE10.webp"
import img11EX from "./../IMAGES/HairExtension/HE11.jpg"
import img12EX from "./../IMAGES/HairExtension/HE12.webp"
import img13EX from "./../IMAGES/HairExtension/HE13.webp"




export default function DProductOne() {

  // for page detail
  const { hollowtwo } = useParams();

  // yahan product data ayega from api
  const [productdetail, setproductdetail] = useState({})

  // all products from ex, uni, ess 
  const ArrayToMatch = [
    // HAIR UNITS
    {thumbnail:img15,
      title:"Hair Unit 7",
      sign: "250"    
    },{thumbnail:img16,
      title:"Hair Unit 8",
      sign: "170"    
    },{thumbnail:img17,
      title:"Hair Unit 9",
      sign: "180"    
    },{thumbnail:img18,
      title:"Hair Unit 10",
      sign: "250"    
    },{thumbnail:img19,
      title:"Hair Unit 11",
      sign: "160"    
    },{thumbnail:img20,
      title:"Hair Unit 12",
      sign: "180"    
    },{thumbnail:img21,
      title:"Hair Unit 13",
      sign: "350"    
    },{thumbnail:img13,
      title:"Hair Unit 2",
      sign: "300"    
    },
    
{thumbnail:img12,
title:"Hair Unit 3",
sign: "280"    
},
 
  {thumbnail:img2,
  title:"WIG 000180-02",
  sign: "180"   } ,

  // new additions:

  {thumbnail:imgn1,
    title:"Hair Unit 14",
    sign: "180"   } ,
    {thumbnail:imgn2,
      title:"Hair Unit 15",
      sign: "220"   } ,
      {thumbnail:imgn3,
        title:"Hair Unit 16",
        sign: "180"   } ,
        {thumbnail:imgn4,
          title:"Hair Unit 17",
          sign: "250"   } ,
          {thumbnail:imgn5,
            title:"Hair Unit 18",
            sign: "160"   } ,
            {thumbnail:imgn6,
              title:"Hair Unit 19",
              sign: "250"   } ,
              {thumbnail:imgn7,
                title:"Hair Unit 20",
                sign: "180"   } ,
                {thumbnail:imgn8,
                  title:"Hair Unit 21",
                  sign: "280"   } ,
                  {thumbnail:imgn9,
                    title:"Hair Unit 22",
                     sign: "220"   } 

                    // new addition ended
,{thumbnail:img4,
  title:"WIG 000298-01",
  sign: "298"    
},{thumbnail:img5,
  title:"WIG 000277-01",
  sign: "277"    
},{thumbnail:img6,
  title:"WIG 000268-01",
  sign: "268"    
},{thumbnail:img7,
  title:"WIG 000278-01",
  sign: "278"    
},
// {thumbnail:img8,
//     title:"WIG 000180-01",
//     sign: "180"    
// }
,{thumbnail:img14,
  title:"Hair Unit 1",
  sign: "355"    
}

,{thumbnail:img11,
title:"Hair Unit 4",
sign: "285"    
},{thumbnail:img10,
title:"Hair Unit 5",
sign: "385"    
},{thumbnail:img9,
title:"Hair Unit 6",
sign: "385"    
},
  
    // Extensions
    {
      thumbnail: img1EX,
      title: "Peruvian Bundle Hair Packs by Outre",
      sign: "15.99"
    },
    {
      thumbnail: img2EX,
      title: "Xpression Ultra Braid Pack | Pre- Stretched - 2",
      sign: "4.99"
    }, {
      thumbnail: img3EX,
      title: "Xpression Ultra Braid Pack | Pre- Stretched - 4",
      sign: "4.99"
    }, {
      thumbnail: img4EX,
      title: "Xpression Ultra Braid Pack | Pre- Stretched - 1B",
      sign: "4.99"
    }, {
      thumbnail: img5EX,
      title: "4 x 4 Kinky Curly Closure Piece",
      sign: "9.99"
    }, {
      thumbnail: img6EX,
      title: "5 x 5 Deep Curly Closure",
      sign: "54.99"
    }, {
      thumbnail: img7EX,
      title: "13 x 4 Kinky Straight Frontal Piece",
      sign: "84.99"
    }, {
      thumbnail: img8EX,
      title: "Kinky Straight Hair Bundles",
      sign: "64.99"
    }, {
      thumbnail: img9EX,
      title: "Peruvian Deep Curly Hair Bundles",
      sign: "54.99"
    },
    {
      thumbnail: img10EX,
      title: "Peruvian Bodywave  Hair Bundles",
      sign: "49.99"
    },
    {
      thumbnail: img11EX,
      title: "5x5 Bodywave Closures",
      sign: "49.99"
    }, {
      thumbnail: img12EX,
      title: "Malysian Bundle Hair Packs By Outre",
      sign: "15.99"
    }, {
      thumbnail: img13EX,
      title: "Brazilian Bundle Hair Packs By Outre",
      sign: "15.99"
    },

    // essentials
    {
      thumbnail: Eimg1,
      title: "SMALL Miracle Sponge (R) - ",
      sign: "4.99"
    },
    {
      thumbnail: Eimg2,
      title: "Miracle Hair Sponge (B) - ",
      sign: "5.99"
    }, {
      thumbnail: Eimg3,
      title: "JUMBO Hair Sponge - (A)",
      sign: "5.99"
    }, {
      thumbnail: Eimg4,
      title: "SMALL Hair Sponge",
      sign: "4.99"
    }, {
      thumbnail: Eimg5,
      title: "JUMBO Dome Cap",
      sign: "2.49"
    }, {
      thumbnail: Eimg6,
      title: "Dome Cap",
      sign: "2.49"
    }, {
      thumbnail: Eimg7,
      title: "GOLD Braid Accessories (Large)",
      sign: "2.49"
    }, {
      thumbnail: Eimg8,
      title: "SILVER Braid Accessories -",
      sign: "2.49"
    }, {
      thumbnail: Eimg9,
      title: "GOLD Braid Accessories",
      sign: "1.99"
    }, {
      thumbnail: Eimg10,
      title: "3PC Comb Set",
      sign: "2.99"
    },
    {
      thumbnail: Eimg11,
      title: "Styling Comb",
      sign: "1.99"
    },
    {
      thumbnail: Eimg12,
      title: "SLIM Hair Brush",
      sign: "2.99"
    }, {
      thumbnail: Eimg13,
      title: "SMALL Metal Comb",
      sign: "1.99"
    }, {
      thumbnail: Eimg14,
      title: "Hair Brush",
      sign: "2.99"
    },
    {
      thumbnail: Eimg15,
      title: "Metal Comb",
      sign: "1.99"
    },

  ]

  useEffect(() => {
    const Found = ArrayToMatch.find(item => item.title === hollowtwo)

    if (Found) {
      console.log("Found:", Found);
      setproductdetail(Found)
    } else {
      console.log("Not found");
    }


  }, [])





  const [ProductQuantity, setProductQuantity] = useState(1)
  const {state,dispatch}=useContext(CartContext)

  const addtocart = () => {

    const payload = {
      ...productdetail,
      ProductQuantity,
      TotalPrice: productdetail.sign * ProductQuantity
    };
  
    // Check if the product is already in the cart
    const existingProductIndex = state.cart.findIndex(item => item.title === productdetail.title);
  
    if (existingProductIndex !== -1) {
      // If the product is already in the cart, update its quantity
      const updatedCart = [...state.cart];
      updatedCart[existingProductIndex].ProductQuantity += ProductQuantity;
      updatedCart[existingProductIndex].TotalPrice += payload.TotalPrice;
      dispatch({ type: "UPDATE_CART", payload: updatedCart });
    } else {
      // If the product is not in the cart, add it
      dispatch({ type: "ADD_TO_CART", payload });
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

<djpg>
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
            <p className='' style={{fontSize:"18px"}}>Price:  &#163; {productdetail?.sign}</p>
            <p className='text-center my-5' style={{ fontSize: "18px" }}>Tax included. Shipping calculated at checkout.</p>
          </div>

{/* 6 col ki space pe working kr rhy */}



          {/* quantity */}
            <div className='d-flex justify-content-center my-2 align-items-center '>
              <span className='mx-5 ' style={{fontSize:"15px", fontWeight:"bold"}}>Quantity:</span>
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
</djpg>

    </>
  )
}
