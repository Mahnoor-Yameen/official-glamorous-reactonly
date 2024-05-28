import React, { useEffect, useState,useContext } from 'react';
import { useParams } from 'react-router-dom';
import { collection, doc, getDoc } from 'firebase/firestore';
import { firestore } from './../../Firebase/firebaseConfig';
import imgforservice from "./../../IMAGES/ServicesImages/img1.jpg";
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import { signupcontext } from '../../context/signup/contextsignup';


export default function DorderOne() {
    const { hollowthree } = useParams();
    const [Order, setOrder] = useState({});
    const [Billingopen, setBillingOpen] = useState(false);
    const { login_state, login_dispatch } = useContext(signupcontext);
    
    const [ShippingOpen, setShippingOpen] = useState(false);
    const [CardOpen, setCardOpen] = useState(false);

    const [DeliveryFee, setDeliveryFee] = useState(0)

    const [AmountWithoutDelivery, setAmountWithoutDelivery] = useState(0)


    useEffect(() => {
        const getOrderFromFirestore = async () => {
            try {
                // Reference to the document in the "order" collection
                const orderDocRef = doc(firestore, 'order', hollowthree);

                // Fetch the data of the document
                const orderDocSnapshot = await getDoc(orderDocRef);

                // Check if the document exists
                if (orderDocSnapshot.exists()) {
                    // If the document exists, set the Order state with its data
                    setOrder(orderDocSnapshot.data());

                } else {
                    // Handle the case when the document doesn't exist
                    console.log('Document does not exist.');
                }
            } catch (error) {
                // Handle any errors that occur during the process
                console.error('Error getting document:', error);
            }
        };

        getOrderFromFirestore();



    }, [hollowthree]);

    useEffect(() => {
        if (Order.cart) {
            const total = Order.cart.reduce((accumulator, product) => accumulator + (product.sign * product.ProductQuantity), 0);
            setAmountWithoutDelivery(total);
        }



    }, [Order]);

    useEffect(() => {
        if (Order.mode === 'pickup') {
            setDeliveryFee(0)
        }
        else {
            setDeliveryFee(3.99)
        }
    }, [Order])


    return (
        <div>
            <section className="h-100 " style={{backgroundColor:"#ffeb8e"}}>
                <h2 className='text-center pt-5'>Order Details</h2>
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-lg-10 col-xl-8">
                            <div className="card" style={{ borderRadius: 10 }}>
                                <div className="card-header px-4 py-5">
                                    <h5 className="text-muted mb-0">
                                        Order ID,{" "}
                                        <span style={{ color: "#a8729a" }}>{hollowthree}</span>
                                    </h5>
                                </div>
                                <div className="card-body p-4">
                                    <div className="d-flex justify-content-between align-items-center mb-4">
                                        <p className="lead fw-normal mb-0" style={{ color: "#a8729a" }}>
                                            Receipt
                                        </p>





                                    </div>



                                    {/* one card */}
                                    {Order?.cart?.map((value, index) => (
                                        <div className="card shadow-0 border mb-4" key={index}>
                                            <div className="card-body" >
                                                <div className="row">
                                                    <div className="col-md-2">

                                                        {value && value.thumbnail ? (
                                                            <img
                                                                src={value.thumbnail}
                                                                className="img-fluid"
                                                                style={{
                                                                    height: '10vh',
                                                                    objectFit: 'contain'
                                                                }}
                                                                alt="Phone"
                                                            />
                                                        ) : (
                                                            <img
                                                                src={imgforservice}
                                                                className="img-fluid"
                                                                style={{
                                                                    height: '10vh',
                                                                    objectFit: 'contain'
                                                                }}
                                                                alt="Phone"
                                                            />
                                                        )}
                                                    </div>
                                                    <div className="col-md-2 text-center d-flex justify-content-center align-items-center">
                                                        <p className="text-muted mb-0">{value.title}</p>
                                                    </div>
                                                    <div className="col-md-2 text-center d-flex justify-content-center align-items-center">
                                                        <p className="text-muted mb-0 small">Price:  &#163; {value.sign}</p>
                                                    </div>
                                                    <div className="col-md-2 text-center d-flex justify-content-center align-items-center">
                                                        <p className="text-muted mb-0 small">Qty: {value.ProductQuantity}</p>
                                                    </div>
                                                    <div className="col-md-2 text-center d-flex justify-content-center align-items-center">
                                                        <p className="text-muted mb-0 small">Total Price: &#163; {value.TotalPrice} </p>
                                                    </div>
                                                    <div className="col-md-2 text-center d-flex justify-content-center align-items-center">
                                                        {/* <p className="text-muted mb-0 small">$499</p> */}
                                                    </div>
                                                </div>
                                                <hr
                                                    className="mb-4"
                                                    style={{ backgroundColor: "#e0e0e0", opacity: 1 }}
                                                />
                                                <div className="row d-flex align-items-center">
                                                    <div className="col-md-2">
                                                        <p className="text-muted mb-0 small">Description: </p>
                                                    </div>
                                                    <div className="col-md-10">
                                                        {/* <div
                      className="progress"
                      style={{ height: 6, borderRadius: 16 }}
                    >
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{
                          width: "65%",
                          borderRadius: 16,
                          backgroundColor: "#a8729a"
                        }}
                        aria-valuenow={65}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div> */}
                                                        <div className="d-flex justify-content-around mb-1">
                                                            <p className="text-muted mt-1 mb-0 small ms-xl-5">
                                                                {value.description ? (value.description) : (value.title)}
                                                            </p>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>


                                        </div>
                                    ))}






                                    <div className="d-flex justify-content-between pt-2">
                                        <p className="fw-bold mb-0">Order Details</p>
                                        <p className="text-muted mb-0">
                                            <span className="fw-bold me-4">Sub Total</span>&#163; {AmountWithoutDelivery}
                                        </p>
                                    </div>




                                    <div className="d-flex justify-content-between">
                                        <p className="text-muted mb-0">Order Placement Date  : {Order.Date && Order.Date.toDate().toLocaleDateString()}  (MM/DD/YYYY)</p>

                                        <p className="text-muted mb-0">
                                            <span className="fw-bold me-4">Delivery: </span>{Order.mode}
                                        </p>
                                    </div>
                                    <div className="d-flex justify-content-between mb-0">
                                        <p className="text-muted mb-0">Customer Email : {Order.AccountEmail}</p>

                                        <p className="text-muted mb-0">
                                            <span className="fw-bold me-4">Delivery Charges</span> &#163; {DeliveryFee}
                                        </p>
                                    </div>
                                    <div className="d-flex justify-content-between ">
                                        <p className="text-muted mb-0">Customer Contact Email : {Order.Email}</p>

                                        <p className="text-muted mb-0 mt-3">
                                            <span className="fw-bold me-4">Total Bill</span> &#163; {DeliveryFee + AmountWithoutDelivery}
                                        </p>
                                    </div>
                                </div>

                                <div className="d-flex mb-2">
                                    {/* billing address */}
                                    <div className="d-flex justify-content-between mx-2 pt-2">
                                        <p className="text-muted mb-0">

                                            <Button
                                                onClick={() => setBillingOpen(!Billingopen)}
                                                aria-controls="example-collapse-text-Billing"
                                                aria-expanded={Billingopen}
                                                className='btn btn-light'
                                            >
                                                Billing Details
                                            </Button>

                                            <Collapse in={Billingopen}>
                                                <div id="example-collapse-text-Billing">
                                                    <div>
                                                        <p>First Name: {Order.BFname}</p>
                                                    </div>
                                                    <div>
                                                        <p>Last Name: {Order.BLname}</p>
                                                    </div>
                                                    <div>
                                                        <p>Company: {Order.BCompany}</p>
                                                    </div>
                                                    <div>
                                                        <p>Country: {Order.BCountry}</p>
                                                    </div>
                                                    <div>
                                                        <p>Address: {Order.BAddress}</p>
                                                    </div>
                                                    <div>
                                                        <p>Appartment: {Order.BApartment}</p>
                                                    </div>
                                                    <div>
                                                        <p>City: {Order.BCity}</p>
                                                    </div>
                                                    <div>
                                                        <p>Postal Code: {Order.BPostalCode}</p>
                                                    </div>
                                                    <div>
                                                        <p>Phone No: {Order.BPhone}</p>
                                                    </div>
                                                </div>
                                            </Collapse>

                                        </p>
                                    </div>

                                    {/* shipment details */}

                                   

                                    {/* Creadit card details */}
                                     {Order.paymode === "creditcard" && login_state.token === 'admin' && (
                                        <div className="d-flex justify-content-between pt-2">
                                            <p className="text-muted mb-0">
                                                <Button
                                                    onClick={() => setCardOpen(!CardOpen)}
                                                    aria-controls="example-collapse-text-Card"
                                                    aria-expanded={CardOpen}
                                                    className='btn btn-light'
                                                >
                                                    Card Details
                                                </Button>

                                                <Collapse in={CardOpen}>
                                                    <div id="example-collapse-text-Card">
                                                        <div>
                                                            <p>Name on Card: {Order.NameOnCard}</p>
                                                        </div>
                                                        <div>
                                                            <p>Card Expiry Date: {Order.CardExpiryDate}</p>
                                                        </div>
                                                        <div>
                                                            <p>Card Number: {Order.CardNumber}</p>
                                                        </div>
                                                        
                                                        <div>
                                                            <p>Security Code: {Order.SecurityCode}</p>
                                                        </div>
                                                        
                                                    </div>
                                                </Collapse>
                                            </p>
                                        </div>
                                    )}

                                </div>

{/* paymode -- paypal, creditcard    */}

                                <div
                                    className="card-footer border-0 px-4 py-5"
                                    style={{
                                        backgroundColor: "#a8729a",
                                        borderBottomLeftRadius: 10,
                                        borderBottomRightRadius: 10
                                    }}
                                >
                                    <h5 className="d-flex align-items-center justify-content-end text-white text-uppercase mb-0">
                                        Total : <span className="h2 mb-0 ms-2"> &#163; {DeliveryFee + AmountWithoutDelivery}</span>
                                    </h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </div>
    );
}
