import React, { useContext } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import {HairEssentials} from '../data'


export default function HairEssential() {

  return (
    <>
<div style={{backgroundColor:""}}>
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