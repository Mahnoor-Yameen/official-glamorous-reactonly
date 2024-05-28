import React, { useEffect, useState } from 'react'
import Sidebar from '../components/Sidebar'
import { collection, getDocs } from "firebase/firestore";
import { auth, firestore } from "../../Firebase/firebaseConfig";
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function Orders() {

  const [allOrders, setOrders] = useState([]);

  // getting all data from the collection from firebase
  useEffect(() => {

    const getOrderssFromFirestore = async () => {
      try {
        // collection reference for users
        const colRef = collection(firestore, "order");
        getDocs(colRef).then((snapshot) => {
          // console.log(snapshot.docs);
          let orders = []
          snapshot.docs.forEach((doc) => {
            orders.push({ ...doc.data(), id: doc.id })
          })
          setOrders(orders)

          console.log(allOrders, "memer")
          return orders;
        })
          .catch((err) => {
            console.log(err)
          })

      } catch (error) {
        throw new Error("Error fetching orders: " + error.message);
      }
    };
    getOrderssFromFirestore();

  }, [])



  return (
    <>
      <div className="row ">
        <div className="col-md-3 m-0 p-0 border border-secondary" style={{ height: '', backgroundColor: '#403d39' }}><Sidebar /></div>


        <div className="col-md-9" style={{backgroundColor:"#ffeb8e"}}>
          <h1 className='py-5 text-center'>Orders List</h1>
          <hr />
          <div className='container'>
            <div className="row">
              {allOrders.map((val, key) =>
                <div className='col-md-4 col-sm-6 my-2' key={key} style={{backgroundColor:"#ffeb8e"}}>
                  <Link to={`/order/${val.id}`} className='text-decoration-none'>
                    <Card >
                      {/* <Card.Img variant="top" style={{height:'45vh'}} src={val.thumbnail} /> */}
                      <Card.Body>
                        <Card.Title>Order Id: {val.id}</Card.Title>
                        <Card.Text>
                          <div>
                              <span>Customer Email: </span>
                              <span> {val.AccountEmail}</span>
                            </div>
                          <div className='d-flex'>
                              <span>Total Bill: </span>
                            <span className='mx-2'> &#163; </span>
                            <span> {  val.totalPayment }</span>
                            </div>

                            <div>
                              <span>Delivery Mode: </span>
                              <span> {val.mode}</span>
                            </div>

                            
                        </Card.Text>
                        <Button variant="btn border-dark" >Tap Here For More Details</Button>
                      </Card.Body>
                    </Card>

                  </Link>
                </div>
              )}
            </div>


          </div>


        </div>
      </div>



    </>
  )
}
