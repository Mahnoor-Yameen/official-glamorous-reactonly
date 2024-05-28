import React, { useEffect, useState } from 'react'
import Sidebar from '../components/Sidebar'
import { collection, getDocs } from "firebase/firestore";
import { auth, firestore } from "../../Firebase/firebaseConfig";
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function ContactUs() {

  const [allQueries, setQueries] = useState([]);

  // getting all data from the collection from firebase
  useEffect(() => {

    const getQueriesFromFirestore = async () => {
      try {
        // collection reference for users
        const colRef = collection(firestore, "contactus");
        getDocs(colRef).then((snapshot) => {
          // console.log(snapshot.docs);
          let queries = []
          snapshot.docs.forEach((doc) => {
            queries.push({ ...doc.data(), id: doc.id })
          })
          setQueries(queries)

          console.log(allQueries, "memer")
          return queries;
        })
          .catch((err) => {
            console.log(err)
          })

      } catch (error) {
        throw new Error("Error fetching orders: " + error.message);
      }
    };
    getQueriesFromFirestore();

  }, [])

  console.log(allQueries)


  return (
    <>
      <div className="row ">
        <div className="col-md-3 m-0 p-0 border border-secondary" style={{ height: '', backgroundColor: '#403d39' }}><Sidebar /></div>


        <div className="col-md-9" style={{ backgroundColor: "#ffeb8e" }}>
          <h1 className='py-5 text-center'>All Queries</h1>
          <hr />


          <div className='container '>
            <div className="row">
             

              
              {allQueries.map((val, key) =>
                <div className='col-md-6 col-sm-6 my-2' key={key} style={{ backgroundColor: "#ffeb8e" }}>
                  {val.form.map((value, keyy) => (
                    <div key={keyy} className=''>
                      <Link to={`/query/${val.id}`} className='text-decoration-none'>
                        <Card className='my-2'>
                          {/* <Card.Img variant="top" style={{height:'45vh'}} src={val.thumbnail} /> */}
                          <Card.Body>
                            <Card.Title> Id: {val.id}</Card.Title>
                            <Card.Text>
                              <div>
                                <span>Customer Email: </span>
                                <span> {value.EmailAddress}</span>
                              </div>
                              <div className='d-flex'>
                                <span>Phone No: </span>
                                <span> {value.PhoneNo}</span>
                              </div>

                              <div>
                                <span>Message: </span>
                                <span> {value.Message}</span>
                              </div>


                            </Card.Text>

                            <Button variant="btn border-dark" >Tap Here For More Details</Button>
                          </Card.Body>
                        </Card>

                      </Link>
                    </div>
                  ))}
                </div>
              )}
              
            </div>


          </div>


        </div>
      </div>



    </>
  )
}
