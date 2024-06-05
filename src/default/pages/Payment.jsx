import React, { useState } from 'react'

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useEffect } from 'react'
import { CartContextVariable } from '../../context/CartContext';   //likhna baki
import { AccountContextVariable } from '../../context/AccountContext';
import { useContext } from 'react';
import { OrderContextVariable } from "../../context/OrderContext";

import { FaRegTrashAlt } from "react-icons/fa";
import imgforservice from "../../IMAGES/service.jpg"



import { Link } from 'react-router-dom';
import Collapse from 'react-bootstrap/Collapse';
import Swal from 'sweetalert2'

import { collection, getDocs, addDoc, setDoc, doc, updateDoc, arrayUnion, writeBatch, getDoc } from "firebase/firestore";
import { firestore } from '../../Firebase/firebaseConfig';


export default function Payment() {

  // const { paymentDetails, updatePaymentDetails } = useContext(OrderContext)
  const { cart_state, cart_dispatch } = useContext(CartContextVariable)

  const { orderDetails, updateOrderDetails } = useContext(OrderContextVariable);

  const { account_state, account_dispatch } = useContext(AccountContextVariable);
  const [totalPayment, setTotalPayment] = useState(0);



  // mode for delivey
  const [mode, setMode] = useState(null);


  // we are having two moodes    pickup 0 shipping 3.99
  const handleModeSelect = (selectedMode) => {
    setMode(selectedMode); // Update mode based on the selected option


  };
  useEffect(() => {

    const total = cart_state.cart.reduce((accumulator, product) => accumulator + (product.sign * product.ProductQuantity), 0)
    setTotalPayment(total)

    if (mode == 'pickup') {
      setTotalPayment(total)
    }
    else { setTotalPayment(total + 3.99) }

  }, [cart_state, mode]);


  // payment form 
  const [paymode, setpayMode] = useState(null);
  const handlepayModeSelect = (selectedpayMode) => {
    setpayMode(selectedpayMode); // Update mode based on the selected option
  };

  const [fee, setfee] = useState('')
  const [CardNumber, setCardNumber] = useState('')
  const [NameOnCard, setNameOnCard] = useState('')
  const [CardExpiryDate, setCardExpiryDate] = useState('')
  const [SecurityCode, setSecurityCode] = useState('')
  const [BCompany, BsetCompany] = useState('')
  const [BCountry, BsetCountry] = useState('')
  const [BAddress, BsetAddress] = useState('')
  const [BFname, BsetFname] = useState('')
  const [BLname, BsetLname] = useState('')
  const [BApartment, BsetApartment] = useState('')
  const [BCity, BsetCity] = useState('')
  const [BPostalCode, BsetPostalCode] = useState('')
  const [BPhone, BsetPhone] = useState('')
  const [Email, setEmail] = useState('')
  const [Company, setCompany] = useState('')
  const [Country, setCountry] = useState('')
  const [Address, setAddress] = useState('')
  const [Fname, setFname] = useState('')
  const [Lname, setLname] = useState('')
  const [Apartment, setApartment] = useState('')
  const [City, setCity] = useState('')
  const [PostalCode, setPostalCode] = useState('')
  const [Phone, setPhone] = useState('')

  const [orderid, setOrderid] = useState('');

  // to
  const [to, setTo] = useState('')

  // BILLING ADRESS CHECKBOX FRON SHIPPING == BILLING
  const [checkopen, checksetOpen] = useState(false);



  const [errors, setErrors] = useState({});     //validation k liye normal walidation

  const validateForm = () => {
    const errors = {};

    if (!Email.trim()) {
      errors.Email = 'Email is required';
    }

    if (checkopen && !BCompany.trim()) {
      errors.BCompany = 'Company is required';
    }
    if (checkopen && !BCountry.trim()) {
      errors.BCountry = 'Country is required';
    }
    if (checkopen && !BAddress.trim()) {
      errors.BAddress = 'Address is required';
    }
    if (checkopen && !BFname.trim()) {
      errors.BFname = 'First Name is required';
    }
    if (checkopen && !BLname.trim()) {
      errors.BLname = 'Last Name is required';
    }
    if (checkopen && !BApartment.trim()) {
      errors.BApartment = 'Apartment is required';
    }
    if (checkopen && !BCity.trim()) {
      errors.BCity = 'City is required';
    }
    if (checkopen && !BPostalCode.trim()) {
      errors.BPostalCode = 'Postal Code is required';
    }
    if (checkopen && !BPhone.trim()) {
      errors.BPhone = 'Phone is required';
    }
    // CREDIT CARD
    if (paymode === 'creditcard' && !CardNumber.trim()) {
      errors.CardNumber = 'Card Number is required';
    }
    if (paymode === 'creditcard' && !NameOnCard.trim()) {
      errors.NameOnCard = 'Name on Card is required';
    }
    if (paymode === 'creditcard' && !CardExpiryDate.trim()) {
      errors.CardExpiryDate = 'Expiry Date is required';
    }
    if (paymode === 'creditcard' && !SecurityCode.trim()) {
      errors.SecurityCode = 'Security Code is required';
    }

    // DELIVERY
    if (mode === 'shipping' && !Company.trim()) {
      errors.Company = 'Company is required';
    }
    if (mode === 'shipping' && !Country.trim()) {
      errors.Country = 'Country is required';
    }
    if (mode === 'shipping' && !Address.trim()) {
      errors.Address = 'Address is required';
    }
    if (mode === 'shipping' && !Fname.trim()) {
      errors.Fname = 'First Name is required';
    }
    if (mode === 'shipping' && !Lname.trim()) {
      errors.Lname = 'Last Name is required';
    }
    if (mode === 'shipping' && !Apartment.trim()) {
      errors.Apartment = 'Apartment is required';
    }
    if (mode === 'shipping' && !City.trim()) {
      errors.City = 'City is required';
    }
    if (mode === 'shipping' && !PostalCode.trim()) {
      errors.PostalCode = 'Postal Code is required';
    }
    if (mode === 'shipping' && !Phone.trim()) {
      errors.Phone = 'Phone is required';
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };



  // FORM SUBMISSION
  const payment = async (e) => {
    e.preventDefault()




    if (!validateForm()) {
      return;
    }

    if (mode == 'pickup') {
      setfee("0")
    }
    else { setfee("3.99") }

    const payload = {
      AccountEmail: account_state.email,
      Email,
      mode,
      totalPayment,
      CardNumber,
      paymode,
      NameOnCard,
      CardExpiryDate,
      SecurityCode,
      BCompany,
      BCountry,
      BAddress,
      BFname,
      BLname,
      BApartment,
      BCity,
      BPostalCode,
      BPhone,
      Company,
      Country,
      Address,
      Fname,
      Lname,
      Apartment,
      City,
      PostalCode,
      Phone,
      fee,
      cart: cart_state.cart,
      Date: new Date()
    }


    if (account_state.token === 'user') {

      updateOrderDetails(payload);


      try {


        // step 1 doc creation
        try {


          // WORKING OF ORDER DATABASE
          const collectionRef = collection(firestore, "order");
          const docRef = await addDoc(collectionRef, {})
          const docId = docRef.id;
          setOrderid(docId)
          const batch = writeBatch(firestore);
          batch.update(docRef, payload);

          await batch.commit();



          // WORKING OF ID DATABASE
          const OrderIdDB = collection(firestore, "orderids");


          // Check if a document with the user's email already exists in the orderids collection
          const emailDocRef = doc(OrderIdDB, account_state.email);
          const emailDocSnap = await getDoc(emailDocRef);

          if (emailDocSnap.exists()) {
            // If the document exists, update it with the new order ID
            await updateDoc(emailDocRef, { orderId: arrayUnion(docId) });
          } else {
            // If the document doesn't exist, create a new document with the user's email and the order ID
            await setDoc(emailDocRef, { orderId: [docId] });
          }







          Swal.fire({
            title: 'ORDER PLACED SUCCESSFULLY, YOUR ORDER ID:',
            text: `Your ORDER ID is: ${docId}`,
            icon: 'success',
            confirmButtonText: 'Continue Shopping'
          }).then(() => {
            window.location.href = '/'; 
          });



        } catch (error) {
          console.error("Error adding document: ", error);
        }


      } catch (error) {
        console.error("Error adding cart items:", error);
        Swal.fire({
          title: error,
          text: 'An error occurred while placing the order. Please try again later.',
          icon: 'error',
          confirmButtonText: 'OK'
        });
      }
    }

    else {
      Swal.fire({
        title: 'ORDER NOT PLACED ',
        text: 'CREATE AN ACCOUNT FIRST',
        icon: 'error',
        confirmButtonText: 'Create Account'
      }).then(() => {
        // Redirect to the sign-up page
        window.location.href = '/signup'; // Replace '/signup' with the actual sign-up page route
      });


    }
  }
  console.log("Document written with ID chanda: ", orderid);

  useEffect(() => {
    console.log("kiddi", orderDetails);
  }, [orderDetails]);


  useEffect(() => { }, [orderid])







  return (
    <>
    <div style={{backgroundColor:""}}>

    
      <div className="container" >
        <h1 className="text-center pt-5 mb-5" style={{ fontFamily: "cursive" }}>Payment</h1>
        <hr />
      </div>

      <div className="container row">


        {/* A */}
        <div className=" col-md-6 col-sm-12">{/* payment types */}

          {/* <MonkeyWindows /> */}
          <div className="container mb-5">
            <h1 className='text-center'>Shipping Details</h1>
            <hr />
          </div>


          {/* form  */}
          <div className=" my-5 mx-5" >


            <form onSubmit={payment} className='w-100 ' style={{backgroundColor:""}}>
              <label htmlFor="FirstName" className='my-3 ' style={{ fontWeight: "bold", fontSize: "18px" }}>Contact</label>
              <input className="rounded border-warning py-3 pe-5" type="email" id="FirstName" placeholder='Email Address' value={Email} onChange={(e) => setEmail(e.target.value)} />
              {errors.Email && <small className="text-danger">{errors.Email}</small>}


              <Form.Group className="mb-3 mt-2" controlId="formBasicCheckboxEmail">
                <Form.Check type="checkbox" label="Email me news and offers!" />
              </Form.Group>

              <hr />



              {/* Delivery Options collaspe*/}
              <div>
                <p style={{ fontWeight: "bold", fontSize: "18px" }}>Delivery</p>
                <Button
                  onClick={() => handleModeSelect('shipping')} // Set mode to 'shipping' when Shipping button is clicked
                  className={`btn btn-outline-warning text-dark ${mode === 'shipping' ? 'btn-warning' : 'btn-light'} my-2 p-3`}>
                  Shipping {mode === 'shipping' && <span>&#10003;</span>}
                </Button>
                <Collapse in={mode === 'shipping'}>
                  <div id="shipping-collapse">
                    <div>
                      <h2>Delivery Charges will be Calculated:</h2>
                      <input type="text" placeholder='Country/Region' className='my-1 rounded' value={Country} onChange={(e) => setCountry(e.target.value)} />
                      {errors.Country && <small className="text-danger">{errors.Country}</small>}

                      <input type="text" placeholder='First name' className='my-1 rounded' value={Fname} onChange={(e) => setFname(e.target.value)} />
                      {errors.Fname && <small className="text-danger">{errors.Fname}</small>}

                      <input type="text" placeholder='Last Name' className='my-1 rounded' value={Lname} onChange={(e) => setLname(e.target.value)} />
                      {errors.Lname && <small className="text-danger">{errors.Lname}</small>}

                      <input type="text" placeholder='Company (optional)' className='my-1 rounded' value={Company} onChange={(e) => setCompany(e.target.value)} />
                      {errors.Company && <small className="text-danger">{errors.Company}</small>}

                      <input type="text" placeholder='Address' className='my-1 rounded' value={Address} onChange={(e) => setAddress(e.target.value)} />
                      {errors.Address && <small className="text-danger">{errors.Address}</small>}

                      <input type="text" placeholder='Apartment, suite, etc.' className='my-1 rounded' value={Apartment} onChange={(e) => setApartment(e.target.value)} />
                      {errors.Apartment && <small className="text-danger">{errors.Apartment}</small>}

                      <input type="text" placeholder='City' className='my-1 rounded' value={City} onChange={(e) => setCity(e.target.value)} />
                      {errors.City && <small className="text-danger">{errors.City}</small>}

                      <input type="text" placeholder='Postal code' className='my-1 rounded' value={PostalCode} onChange={(e) => setPostalCode(e.target.value)} />
                      {errors.PostalCode && <small className="text-danger">{errors.PostalCode}</small>}

                      <input type="text" placeholder='Phone' className='my-1 rounded' value={Phone} onChange={(e) => setPhone(e.target.value)} />
                      {errors.Phone && <small className="text-danger">{errors.Phone}</small>}

                    </div>
                  </div>
                </Collapse>

                <Button
                  onClick={() => handleModeSelect('pickup')} // Set mode to 'pickup' when Pick-Up button is clicked
                  className={`btn btn-outline-warning text-dark ${mode === 'pickup' ? 'btn-warning' : 'btn-light'} my-2 p-3`}>
                  Pick-Up  {mode === 'pickup' && <span>&#10003;</span>}
                </Button>
                <Collapse in={mode === 'pickup'}>
                  <div id="pickup-collapse">
                    <Card className='my-1' style={{ cursor: "pointer" }}>
                      <Card.Body>
                        <Card.Title>Location:</Card.Title>
                        <Card.Text>
                          21 East St. Barkings. Usually ready in 2 to 4 days
                          <p>Fee: Free</p>
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </div>
                </Collapse>
              </div>



              {/* PAYMENT WAY */}
              <div>
                <p style={{ fontWeight: "bold", fontSize: "18px" }}>Payment</p>
                <p>All Transactions Are secured and encrypted</p>
                <Button
                  onClick={() => handlepayModeSelect('creditcard')} // Set mode to 'shipping' when Shipping button is clicked
                  className={`btn btn-outline-warning text-dark ${paymode === 'creditcard' ? 'btn-warning' : 'btn-light'} my-2 p-3`}>
                  Credit Card {paymode === 'creditcard' && <span>&#10003;</span>}
                </Button>

                {/* yeh wo collapse ha jo credit card option select krny pe show ho raha  */}
                <Collapse in={paymode === 'creditcard'}>
                  {/* is div main credit card form and collapse for billing address ha  */}
                  <div id="creditcard-collapse">
                    <div>

                      <h2>Delivery Charges will be Calculated:</h2>
                      <input type="text" placeholder='Card Number' className='my-1 rounded' value={CardNumber} onChange={(e) => setCardNumber(e.target.value)} />
                      {errors.CardNumber && <small className="text-danger">{errors.CardNumber}</small>}

                      <input type="text" placeholder='Expiry Date (MM/YY)' className='my-1 rounded' value={CardExpiryDate} onChange={(e) => setCardExpiryDate(e.target.value)} />
                      {errors.CardExpiryDate && <small className="text-danger">{errors.CardExpiryDate}</small>}

                      <input type="text" placeholder='Security Code' className='my-1 rounded' value={SecurityCode} onChange={(e) => setSecurityCode(e.target.value)} />
                      {errors.SecurityCode && <small className="text-danger">{errors.SecurityCode}</small>}

                      <input type="text" placeholder='Name On Card' className='my-1 rounded' value={NameOnCard} onChange={(e) => setNameOnCard(e.target.value)} />
                      {errors.NameOnCard && <small className="text-danger">{errors.NameOnCard}</small>}



                      {/* Billing Address */}

                      <Button
                        onClick={() => {
                          checksetOpen(prevState => !prevState); // Toggle the checkbox state
                        }}
                        aria-controls="example-collapse-text-check"
                        aria-expanded={checkopen}
                        className=''
                        style={{ backgroundColor: "#ccd4dc" }}
                      >
                        <Form.Group className="mb-3 " controlId="formBasicCheckbox">
                          <Form.Check
                            type="checkbox"
                            checked={!checkopen} // Invert the checked state to reflect the toggle
                            className='text-dark '
                            label="Use Shipping Address as Billing Address"
                          />
                        </Form.Group>
                      </Button>
                      <Collapse in={checkopen}>
                        <div id="example-collapse-text-check">
                          <div>
                            <h2>Billing Adress:</h2>
                            <input type="text" placeholder='Country/Region' className='my-1 rounded' value={BCountry} onChange={(e) => BsetCountry(e.target.value)} />
                            {errors.BCountry && <small className="text-danger">{errors.BCountry}</small>}

                            <input type="text" placeholder='First name' className='my-1 rounded' value={BFname} onChange={(e) => BsetFname(e.target.value)} />
                            {errors.BFname && <small className="text-danger">{errors.BFname}</small>}

                            <input type="text" placeholder='Last Name' className='my-1 rounded' value={BLname} onChange={(e) => BsetLname(e.target.value)} />
                            {errors.BLname && <small className="text-danger">{errors.BLname}</small>}

                            <input type="text" placeholder='Company (optional)' className='my-1 rounded' value={BCompany} onChange={(e) => BsetCompany(e.target.value)} />
                            {errors.BCompany && <small className="text-danger">{errors.BCompany}</small>}

                            <input type="text" placeholder='Address' className='my-1 rounded' value={BAddress} onChange={(e) => BsetAddress(e.target.value)} />
                            {errors.BAddress && <small className="text-danger">{errors.BAddress}</small>}

                            <input type="text" placeholder='Apartment, suite, etc.' className='my-1 rounded' value={BApartment} onChange={(e) => BsetApartment(e.target.value)} />
                            {errors.BApartment && <small className="text-danger">{errors.BApartment}</small>}

                            <input type="text" placeholder='City' className='my-1 rounded' value={BCity} onChange={(e) => BsetCity(e.target.value)} />
                            {errors.BCity && <small className="text-danger">{errors.BCity}</small>}

                            <input type="text" placeholder='Postal code' className='my-1 rounded' value={BPostalCode} onChange={(e) => BsetPostalCode(e.target.value)} />
                            {errors.BPostalCode && <small className="text-danger">{errors.BPostalCode}</small>}

                            <input type="text" placeholder='Phone' className='my-1 rounded' value={BPhone} onChange={(e) => BsetPhone(e.target.value)} />
                            {errors.BPhone && <small className="text-danger">{errors.BPhone}</small>}






                          </div>
                        </div>
                      </Collapse>  {/* end of collapse of bill adress */}







                    </div>
                  </div>
                </Collapse>   {/* end of collaspe of credit card */}

                <Button
                  onClick={() => handlepayModeSelect('paypal')} // Set mode to 'pickup' when Pick-Up button is clicked
                  className={`btn btn-outline-warning text-dark ${paymode === 'paypal' ? 'btn-warning ' : 'btn-light '} my-2 p-3`}>
                  Cash On Delivery  {paymode === 'paypal' && <span>&#10003;</span>}
                </Button>
                <Collapse in={paymode === 'paypal'}>
                  <div id="paypal-collapse">
                    <Card className='my-1' style={{ cursor: "pointer" }}>
                      <Card.Body>
                        {/* <button className="text-decoration-none btn btn-secondary  py-3 px-5" >Pay with PayPal</button> */}
                        <p>The Amount will be paid as cash on delivery.</p>

                      </Card.Body>
                    </Card>
                  </div>
                </Collapse>
              </div>

              {/* total payment show krny wala div */}
              <div>
                <hr />
                <h3>Total Amount With Shipping Charges:</h3>
                <h3>{totalPayment}</h3>
              </div>




              <button className='text-decorations-none  btn btn-dark p-5 my-3' style={{ fontSize: "18px", fontWeight: "bold" }}>Order</button>
            </form>
          </div>


        </div >


        {/* B */}




        <div className='col-md-6 col-sm-12' >

          <div className="container mb-5">
            <h1 className='text-center'>Checkout</h1>
            <hr />
          </div>

          <div className='container d-flex justify-content-center  py-3'>
            <div className="d-flex flex-column">
              {cart_state.cart.map((value, index) => (
                <div className='card mb-3 shadow-sm' key={index} style={{backgroundColor:""}}>
                  <div className="row g-0" >
                    <br />
                    <div className="col-md-5 d-flex justify-content-center align-items-center">
                      {value && value.thumbnail ? (
                        <img
                          src={value.thumbnail}
                          alt="..."
                          style={{
                            height: '20vh',
                            objectFit: 'contain'
                          }}
                          className='img-fluid rounded-start bg-dark'
                        />
                      ) : (
                        <img
                          src={imgforservice}
                          alt="..."
                          style={{
                            height: '20vh',
                            objectFit: 'contain'
                          }}
                          className='img-fluid rounded-start bg-dark'
                        />
                      )}
                    </div>

                    <div className="col-md-7">
                      <div className="card-body">
                        <div className="d-flex justify-content-between align-items-center mb-1">
                          <h6 className="card-title">{value.title.length > 20 ? value.title.slice(0, 25) + '...' : value.title}</h6>
                        </div>
                        <div className='d-flex align-items-center justify-content-between'>
                          <span className="badge bg-secondary p-2" style={{ fontSize: "13px" }}>Price:  &#163;{value.sign}</span>
                          <FaRegTrashAlt className='mx-3' style={{ cursor: "pointer" }} onClick={() => { dispatch({ type: 'DELETE_PRODUCT', title: value.title }) }} />
                        </div>
                        {value && !value.thumbnail && (
                <div>
              <div>
              <span>Time: {value.selectedSlot}:00 o'clock </span>
              </div>
                <div>
              {/* <span>Date: {data.selectedDate} </span> */}
              <span>Date: {value.selectedDate.split('-').reverse().join('-')} </span>
                </div>
                </div>
              )}
                        <p className='mt-1'>Product Quantity: {value.ProductQuantity}</p>
                        <p>Total Price: {value.ProductQuantity * value.sign}</p>

                        {/* Render increase and decrease buttons only if value.thumbnail exists */}
                        {value && value.thumbnail && (
                          <div className='d-flex justify-content-center my-2 align-items-center'>
                            <button disabled={value.ProductQuantity > 1 ? false : true} className="bg-dark border" onClick={() => { dispatch({ type: 'DECREASE_QUANTITY', title: value.title }) }}>-</button>
                            <span className='mx-3'>{value.ProductQuantity}</span>
                            <button className="bg-dark border mx-3" onClick={() => { dispatch({ type: 'INCREASE_QUANTITY', title: value.title }) }}>+</button>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}


            </div>
          </div>

        </div>


      </div >

</div>




    </>
  )
}
