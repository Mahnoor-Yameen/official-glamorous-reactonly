import React, { useContext } from 'react'
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import { CartContext } from '../context/addtocart/context';


export default function Products() {
  const [products, setproducts] = useState([])

  const {state,dispatch}=useContext(CartContext)

  useEffect(() => {
    axios.get("https://dummyjson.com/products")
      .then(res => setproducts(res.data.products))
    // console.log(res.data.products)
  }, [])
  function addtocart(val){
    // console.log(val)
    dispatch(
      {type:"ADD_TO_CART",
      payload:val
    }
    )
  }

  return (
    <>

      <div className="container">
        <h1 className='text-center'>OUR PRODUCTS</h1>
      </div>


      <div className='container'>
        <div className="row">
          {products.map((val, key) =>
            <div className='col-md-3 my-2' key={key}>
              <Card >
              

                <Card.Img variant="top" style={{height:'30vh'}} src={val.thumbnail} />
                
                <Card.Body>
                  <Card.Title>{val.title}</Card.Title>
                  <Card.Text>
                    {val.description}
                  </Card.Text>
                  <Button variant="btn border-dark" onClick={()=>addtocart(val)}>ADD TO CART</Button>
                </Card.Body>
              </Card>
            </div>
          )}
        </div>


      </div>

    </>
  )
}
