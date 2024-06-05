import React, { useContext } from 'react'
import Card from 'react-bootstrap/Card';
import { AccountContextVariable } from '../../context/AccountContext';
export default function Profile() {

    const {account_state,account_dispatch}=useContext(AccountContextVariable)


  return (

    <>

    <div className="container text-center">PROFILE</div>

    <div className="container my-5">

    
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{account_state.user?.email}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{account_state.user?.address}</Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
    
    </div>
    </>
  )
}
