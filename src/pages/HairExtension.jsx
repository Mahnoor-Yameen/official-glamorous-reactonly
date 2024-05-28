import React, { useContext } from 'react'
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import { CartContext } from '../context/addtocart/context';

// pics importing
import img1 from "./../IMAGES/HairExtension/HE1.webp"
import img2 from "./../IMAGES/HairExtension/HE2.webp"
import img3 from "./../IMAGES/HairExtension/HE3.webp"
import img4 from "./../IMAGES/HairExtension/HE4.webp"
import img5 from "./../IMAGES/HairExtension/HE5.jpg"
import img6 from "./../IMAGES/HairExtension/HE6.webp"
import img7 from "./../IMAGES/HairExtension/HE7.webp"
import img8 from "./../IMAGES/HairExtension/HE8.webp"
import img9 from "./../IMAGES/HairExtension/HE9.webp"
import img10 from "./../IMAGES/HairExtension/HE10.webp"
import img11 from "./../IMAGES/HairExtension/HE11.jpg"
import img12 from "./../IMAGES/HairExtension/HE12.webp"
import img13 from "./../IMAGES/HairExtension/HE13.webp"
import { Link } from 'react-router-dom';



export default function HairExtension() {
  

    const HairExtensions = [
        {thumbnail:img1,
        title:"Peruvian Bundle Hair Packs by Outre",
        sign: "15.99"    
    },
    {thumbnail:img2,
    title:"Xpression Ultra Braid Pack | Pre- Stretched - 2",
    sign: "4.99"    
},{thumbnail:img3,
    title:"Xpression Ultra Braid Pack | Pre- Stretched - 4",
    sign: "4.99"    
},{thumbnail:img4,
    title:"Xpression Ultra Braid Pack | Pre- Stretched - 1B",
    sign: "4.99"    
},{thumbnail:img5,
    title:"4 x 4 Kinky Curly Closure Piece",
    sign: "9.99"    
},{thumbnail:img6,
    title:"5 x 5 Deep Curly Closure",
    sign: "54.99"    
},{thumbnail:img7,
    title:"13 x 4 Kinky Straight Frontal Piece",
    sign: "84.99"    
},{thumbnail:img8,
    title:"Kinky Straight Hair Bundles",
    sign: "64.99"    
},{thumbnail:img9,
    title:"Peruvian Deep Curly Hair Bundles",
    sign: "54.99"    
},
{thumbnail:img10,
  title:"Peruvian Bodywave  Hair Bundles",
  sign: "49.99"    
},
{thumbnail:img11,
  title:"5x5 Bodywave Closures",
  sign: "49.99"     
},{thumbnail:img12,
  title:"Malysian Bundle Hair Packs By Outre",
  sign: "15.99"    
},{thumbnail:img13,
  title:"Brazilian Bundle Hair Packs By Outre",
  sign: "15.99"    
},
    ]
console.log(HairExtensions)


  return (
    <>
<div style={{backgroundColor:"#caf0f8"}}>
  <div className="container py-5">
        <h1 className='text-center'>HAIR EXTENSIONS</h1>
      </div>


      <div className='container'>
        <div className="row">
          {HairExtensions.map((val, key) =>
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