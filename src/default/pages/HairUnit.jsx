import React, { useContext } from 'react'
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import { HairUnits } from '../data';
import { Link } from 'react-router-dom';


export default function HairUnit() {
  return (
    <>

    <div style={{backgroundColor:""}}>
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