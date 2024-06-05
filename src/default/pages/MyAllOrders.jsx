import React, {useEffect, useState} from 'react'
import { AccountContextVariable } from '../../context/AccountContext';
import { collection, getDocs, addDoc, setDoc, doc, updateDoc, arrayUnion, writeBatch, getDoc } from "firebase/firestore";
import { firestore } from '../../Firebase/firebaseConfig';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

export default function MyAllOrders() {


    const { account_state, account_dispatch } = useContext(AccountContextVariable);

    const [allOrders, setOrders] = useState([]);

    // getting all data from the collection from firebase
    useEffect(() => {
  
      const getOrderidsFromFirestore = async () => {
        try {
            // Reference to the document in the "order" collection
            const orderDocRef = doc(firestore, 'orderids', account_state.email);

            // Fetch the data of the document
            const orderDocSnapshot = await getDoc(orderDocRef);

            // Check if the document exists
            if (orderDocSnapshot.exists()) {
                // If the document exists, set the Order state with its data
                setOrders(orderDocSnapshot.data());

            } else {
                // Handle the case when the document doesn't exist
                console.log('Document does not exist.');
            }
        } catch (error) {
            // Handle any errors that occur during the process
            console.error('Error getting document:', error);
        }
      };
      getOrderidsFromFirestore();
  
    }, [])

    console.log(allOrders.orderId, "bang")


    const [id, setid] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
    const [errors, setErrors] = useState({});   //validation


    // console.log(account_state.userDetails,"")

  
    const onSubmit = async (e) => {
        e.preventDefault();


    }
  return (
    <>
    
    <div style={{backgroundColor:"#caf0f8"}}>

   
    
    
    <div className="container py-5">
        <h1 className='text-center'>All Order Ids </h1>
      </div>

      <div className="container">
        

<div>
  {allOrders?.orderId?.map((orderId, index) => (
    <div key={index} className='d-flex'>
        <div className='mx-3'>
           <h3>ORDER ID:</h3>
           
        </div>
        <h3> {orderId}</h3>
       
        
        
        </div>
  ))}
</div>






      </div>


      <div>

<main className="w-full h-screen flex self-center place-content-center place-items-center">
    <div className="w-96 text-gray-600 space-y-5 p-4 shadow-xl border rounded-xl">
        <div className="text-center">
            <div className="mt-2">
                <h3 className="text-gray-800 text-xl font-semibold sm:text-2xl">Find Your order Details!</h3>
            </div>
        </div>

        <div className="d-flex justify-content-center">

        
        <form
            onSubmit={onSubmit}
            className="space-y-5"
        >
            <div className='d-flex align-items-center my-3'>
                <label className="mx-3 text-gray-600 " style={{fontSize:"18px"}}>
                    Id:
                </label>
                <input
                    type="id"
                    autoComplete='id'
                    required
                    value={id} onChange={(e) => { setid(e.target.value) }}
                    className="w-full mt-2  py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg transition duration-300"
                />

            </div>



             {errorMessage && (
                 <span className='text-red-600 font-bold'>{errorMessage}</span>
             )}

            <Link to={`/order/${id}`}
                type="submit"
                className={`ms-5 w-full px-4 py-2 btn btn-dark font-medium rounded-lg `}
            >Find Order
            </Link>
        </form>
        </div>
        




    </div>
</main>
</div>
</div>
    
    
    </>
  )
}
