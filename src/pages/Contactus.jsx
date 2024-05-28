import React from 'react'
import './../CSS/ContactUsForm.css'
import { collection, getDocs, addDoc, setDoc, doc, updateDoc, arrayUnion, writeBatch, getDoc } from "firebase/firestore";
import { firestore } from '../Firebase/firebaseConfig';
import { useContext, useState, useEffect } from 'react';
import Swal from 'sweetalert2'


export default function Contactus() {

    const [Fullname, setFullname] = useState('')
    const [EmailAddress, setEmailAddress] = useState('')
    const [PhoneNo, setPhoneNo] = useState('')
    const [Message, setMessage] = useState('')
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        const errors = {};


        if (!Fullname.trim()) {
            errors.Fullname = 'Full name is required';
        }
        if (!EmailAddress.trim()) {
            errors.EmailAddress = 'Email Address is required';
        }
        if (!PhoneNo.trim()) {
            errors.PhoneNo = 'Phone No is required';
        }
        if (!Message.trim()) {
            errors.Message = 'Message is required';
        }


        setErrors(errors);
        return Object.keys(errors).length === 0;
    };



    const onSubmit = async (e) => {
        e.preventDefault();


        if (!validateForm()) {
            return;
        }


        const payload = {
            Fullname,
            EmailAddress,
            PhoneNo,
            Message
        };


         try {

            // WORKING OF contact us DATABASE

            const contactusDB = collection(firestore, 'contactus');
  
            // Check if a document with the user's email already exists in the orderids collection
            const emailDocRef = doc(contactusDB, EmailAddress);
            const emailDocSnap = await getDoc(emailDocRef);
  
            if (emailDocSnap.exists()) {
              // If the document exists, update it with the new order ID
              await updateDoc(emailDocRef, { form: arrayUnion(payload) });
            } else {
              // If the document doesn't exist, create a new document with the user's email and the order ID
              await setDoc(emailDocRef, { form: [payload] });
            }
  
  
  
  
  
  
  
            Swal.fire({
              title: 'Your Query placed successfully',
              text: `Thank you`,
              icon: 'success',
              confirmButtonText: 'Continue Shopping'
            })
  
  
  
          } catch (error) {
            console.error("Error adding document: ", error);
          }

    }

    return (
        <>

            <div style={{ backgroundColor: "#caf0f8" }}>



                <div className="container py-5">
                    <h1 className='text-center'>Contact Us</h1>
                    <hr />

                    <p className='text-center'>We Would Love To Have Your Queries!</p>
                </div>


                {/* Hello world */}
                <div className='container d-flex justify-content-center '>
                    <div className="main-block 
                     my-3">

                        <form className='rounded' onSubmit={onSubmit}>
                            <div className="info ">
                                <input
                                    className="fname my-2 rounded"
                                    type="text"
                                    name="fullname"
                                    placeholder="Full name"
                                    value={Fullname} onChange={(e) => { setFullname(e.target.value) }}
                                />

                                {errors.Fullname && <small className="text-danger">{errors.Fullname}</small>}

                                <input type="email" name="EmailAddress" placeholder="Email" value={EmailAddress} onChange={(e) => { setEmailAddress(e.target.value) }} className='my-2 rounded' />
                                {errors.EmailAddress && <small className="text-danger">{errors.EmailAddress}</small>}

                                <input type="text" name="PhoneNo" placeholder="Phone No" value={PhoneNo} onChange={(e) => { setPhoneNo(e.target.value) }} className='my-2 rounded' />
                                {errors.PhoneNo && <small className="text-danger">{errors.PhoneNo}</small>}

                            </div>
                            <p >Message</p>
                            <div>
                                <input type="text" name="Message" placeholder="" value={Message} onChange={(e) => { setMessage(e.target.value) }} className='mb-4 rounded' style={{ width: "100%", height: "70px" }} />


                            </div>
                            <button type="submit" className='text-dark btn btn-warning rounded' >
                                Submit
                            </button>
                        </form>
                    </div>

                </div>

            </div>

        </>
    )
}
