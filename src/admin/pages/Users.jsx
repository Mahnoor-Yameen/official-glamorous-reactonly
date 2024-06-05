import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import { collection, getDocs } from "firebase/firestore";
import {  firestore } from "./../../Firebase/firebaseConfig";
import Card from 'react-bootstrap/Card';

export default function Users() {
  const [allUsers, setUsers] = useState([]);


  // getting all data from the collection from firebase
  useEffect(() => {

    const getUsersFromFirestore = async () => {
      try {
        // collection reference for users
        const colRef = collection(firestore, "users");
        getDocs(colRef).then((snapshot) => {
          // console.log(snapshot.docs);
          let users = []
          snapshot.docs.forEach((doc)=>{
            users.push({ ...doc.data(), id:doc.id})
          })
          setUsers(users)
          console.log("final",allUsers)

          return users;
        })
        .catch((err)=>{
          console.log(err)
        })
    
      } catch (error) {
        throw new Error("Error fetching users: " + error.message);
      }
    };
    getUsersFromFirestore(); 

  }, [])

  return (
    <>
    
      <div className="row">
        <div className="col-md-3 m-0 p-0 border border-secondary" style={{ height: '', backgroundColor: '#403d39' }}>
          <Sidebar />
        </div>
        <div className="col-md-9" style={{backgroundColor:"#ffeb8e"}}>
          <h1 className='py-5 text-center'>User List</h1>
          <hr />
           <div className='container'>
            <div className="row">
              {allUsers.map((val, key) =>
                <div className='col-md-6 col-sm-6 my-2' key={key} style={{backgroundColor:"#ffeb8e"}}>
                    <Card >
                      {/* <Card.Img variant="top" style={{height:'45vh'}} src={val.thumbnail} /> */}
                      <Card.Body>
                        <Card.Title>Customer Id: {val.id}</Card.Title>
                        <Card.Text>
                          <div>
                              <span>Customer Email: </span>
                              <span> {val.Email}</span>
                            </div>
                        </Card.Text>
                      </Card.Body>
                    </Card>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
