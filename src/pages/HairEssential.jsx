import React, { useContext } from 'react'
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import { CartContext } from '../context/addtocart/context';
import { Link } from 'react-router-dom';

// pics importing
import img1 from "./../IMAGES/HairEssential/E1.jpg"
import img2 from "./../IMAGES/HairEssential/E2.jpg"
import img3 from "./../IMAGES/HairEssential/E3.jpg"
import img4 from "./../IMAGES/HairEssential/E4.jpg"
import img5 from "./../IMAGES/HairEssential/E5.jpg"
import img6 from "./../IMAGES/HairEssential/E6.jpg"
import img7 from "./../IMAGES/HairEssential/E7.jpg"
import img8 from "./../IMAGES/HairEssential/E8.jpg"
import img9 from "./../IMAGES/HairEssential/E9.jpg"
import img10 from "./../IMAGES/HairEssential/E10.jpg"
import img11 from "./../IMAGES/HairEssential/E11.jpg"
import img12 from "./../IMAGES/HairEssential/E12.jpg"
import img13 from "./../IMAGES/HairEssential/E13.jpg"
import img14 from "./../IMAGES/HairEssential/E14.jpg"
import img15 from "./../IMAGES/HairEssential/E15.jpg"




export default function HairEssential() {
  

    const HairEssentials = [
        {thumbnail:img1,
        title:"SMALL Miracle Sponge (R) - ",
        sign: "4.99"    
    },
    {thumbnail:img2,
    title:"Miracle Hair Sponge (B) - ",
    sign: "5.99"    
},{thumbnail:img3,
    title:"JUMBO Hair Sponge - (A)",
    sign: "5.99"    
},{thumbnail:img4,
    title:"SMALL Hair Sponge",
    sign: "4.99"    
},{thumbnail:img5,
    title:"JUMBO Dome Cap",
    sign: "2.49"    
},{thumbnail:img6,
    title:"Dome Cap",
    sign: "2.49"    
},{thumbnail:img7,
    title:"GOLD Braid Accessories (Large)",
    sign: "2.49"    
},{thumbnail:img8,
    title:"SILVER Braid Accessories -",
    sign: "2.49"    
},{thumbnail:img9,
    title:"GOLD Braid Accessories",
    sign: "1.99"    
},{thumbnail:img10,
    title:"3PC Comb Set",
    sign: "2.99"    
},
{thumbnail:img11,
    title:"Styling Comb",
    sign: "1.99"    
},
{thumbnail:img12,
    title:"SLIM Hair Brush",
    sign: "2.99"    
},{thumbnail:img13,
    title:"SMALL Metal Comb",
    sign: "1.99"    
},{thumbnail:img14,
    title:"Hair Brush",
    sign: "2.99"    
},
{thumbnail:img15,
  title:"Metal Comb",
  sign: "1.99"    
},
    ]


  return (
    <>
<div style={{backgroundColor:"#caf0f8"}}>
 <div className="container py-5">
        <h1 className='text-center'>HAIR ITEMS</h1>
      </div>


      <div className='container'>
        <div className="row">
          {HairEssentials.map((val, key) =>
            <div className='col-lg-3 col-md-4 col-sm-6 my-2' key={key}>
              <Link to={`/products/${val.title}`} className='text-decoration-none'>
              <Card >
                <Card.Img variant="top" style={{height:'40vh'}} src={val.thumbnail} />
                <Card.Body>
                  <Card.Title>{val.title}</Card.Title>
                  <Card.Text>
                  <span>-</span>
                    <span>&#163;</span>
                    <span>{val.sign}</span>
                  </Card.Text>
                  <Button variant="btn border-dark" >Tap Here</Button>
                </Card.Body>
              </Card>
              </Link>
            </div>
          )}
        </div>


      </div>
</div>
     

    </>
  )
}