import React, { useContext } from 'react'
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import { CartContext } from '../context/addtocart/context';

// pics importing
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

// new addition
import imgn1 from "./../IMAGES/HairUnit/n1.jpg"
import imgn2 from "./../IMAGES/HairUnit/n2.jpg"
import imgn3 from "./../IMAGES/HairUnit/n3.jpg"
import imgn4 from "./../IMAGES/HairUnit/n4.jpg"
import imgn5 from "./../IMAGES/HairUnit/n5.jpg"
import imgn6 from "./../IMAGES/HairUnit/n6.jpg"
import imgn7 from "./../IMAGES/HairUnit/n7.jpg"
import imgn8 from "./../IMAGES/HairUnit/n8.jpg"
import imgn9 from "./../IMAGES/HairUnit/n9.jpg"






import { Link } from 'react-router-dom';



export default function HairUnit() {
  

    const HairUnits = [
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
}
    ]
 
  return (
    <>

    <div style={{backgroundColor:"#caf0f8"}}>
 <div className="container py-5">
        <h1 className='text-center'>HAIR Units</h1>
      </div>


      <div className='container'>
        <div className="row">
          {HairUnits.map((val, key) =>
            <div className='col-lg-3 col-md-4 col-sm-6 my-2' key={key} >
              <Link to={`/products/${val.title}`} className='text-decoration-none'>
              <Card >
                <Card.Img variant="top" style={{height:'42vh'}} src={val.thumbnail} />
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