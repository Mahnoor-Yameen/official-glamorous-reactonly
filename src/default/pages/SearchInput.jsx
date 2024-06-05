import React, { useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import {HairUnits} from '../data';
import {HairEssentials} from '../data'
import {HairExtensions} from '../data'

import { useParams } from 'react-router-dom';




import Modal from 'react-bootstrap/Modal';

export default function SearchInput() {

  const { hollowthreee } = useParams();
  

  const [ManyProducts, setManyProducts] = useState([])

  const ArrayToMatch = [
   ...HairUnits, ...HairEssentials, ...HairExtensions
  ]
useEffect(()=>{
  const searchWords = hollowthreee.split(" ");

    const filteredArray = ArrayToMatch.filter(obj => {
        return searchWords.every(word =>
            obj?.title?.toLowerCase().includes(word.toLowerCase())
        );
    });

    setManyProducts(filteredArray)
},[hollowthreee])
 
    

  
  return (
    <>

<div style={{backgroundColor:"", height:'100vh'}}>





      <div className="container py-5">
        <h1 className='text-center'>Found Products:</h1>
      </div>

      <div className="container">
        {ManyProducts.length === 0 ? (
          <div className="text-center">
            <p>No products found</p>
            {/* <button className='btn btn-dark text-white' >Search Again</button> */}
          </div>
        ) : (
          <div className="row">
            {ManyProducts?.map((val, key) => (
              <div className="col-lg-3 col-md-4 col-sm-6 my-2" key={key}>
                <Link to={`/products/${val?.title}`} className="text-decoration-none">
                  <Card>
                    <Card.Img variant="top" style={{ height: "40vh" }} src={val?.thumbnail} />
                    <Card.Body>
                      <Card.Title>{val?.title}</Card.Title>
                      <Card.Text>
                        <span>-</span>
                        <span>&#163;</span>
                        <span>{val?.sign}</span>
                      </Card.Text>
                      <Button variant="btn border-dark">Tap Here</Button>
                    </Card.Body>
                  </Card>
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
</div>
    </>
  )
}
