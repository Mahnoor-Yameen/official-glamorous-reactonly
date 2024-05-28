import React, { useEffect, useState,useContext } from 'react';
import { useParams } from 'react-router-dom';
import { collection, doc, getDoc } from 'firebase/firestore';
import { firestore } from './../../Firebase/firebaseConfig';

export default function DQueryOne() {
  const { hollowfour } = useParams();

  const [Query, setQuery] = useState({});


  useEffect(() => {
    const getQueryFromFirestore = async () => {
        try {
            // Reference to the document in the "order" collection
            const queryDocRef = doc(firestore, 'contactus', hollowfour);

            // Fetch the data of the document
            const queryDocSnapshot = await getDoc(queryDocRef);

            // Check if the document exists
            if (queryDocSnapshot.exists()) {
                // If the document exists, set the Order state with its data
                setQuery(queryDocSnapshot.data());

            } else {
                // Handle the case when the document doesn't exist
                console.log('Document does not exist.');
            }
        } catch (error) {
            // Handle any errors that occur during the process
            console.error('Error getting document:', error);
        }
    };

    getQueryFromFirestore();
}, [hollowfour]);

console.log(Query)

  return (
    <>
    
    {Query?.form?.map((value,index)=>(
      <div key={index}>

            <section className="h-100 " style={{backgroundColor:"#ffeb8e"}}>
                <h2 className='text-center pt-5'>Query Details: {index+1}</h2>
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-lg-10 col-xl-8">
                            <div className="card" style={{ borderRadius: 10 }}>
                                <div className="card-header px-4 py-5">
                                    <h5 className="text-muted mb-0">
                                        Customer Query ID,{" "}
                                        <span style={{ color: "#a8729a" }}>{hollowfour}</span>
                                    </h5>
                                </div>
                                <div className="card-body p-4">
                                    <div className="d-flex justify-content-between align-items-center mb-4">
                                        <p className="lead fw-normal mb-0" style={{ color: "#a8729a" }}>
                                            Receipt
                                        </p>





                                    </div>
                                        <div className="card shadow-0 border mb-4" >
                                            <div className="card-body" >
                                                <div className="row">
                                                   <div className="col-md-2 text-center d-flex justify-content-center align-items-center">
                                                        <p className="text-muted mb-0 small">Full Name: {value.Fullname}</p>
                                                    </div>
                                                    <div className="col-md-7 text-center d-flex justify-content-center align-items-center">
                                                        <p className="text-muted mb-0">Email Address: {value.EmailAddress}</p>
                                                    </div>
                                                    <div className="col-md-3 text-center d-flex justify-content-center align-items-center">
                                                        <p className="text-muted mb-0 small">Phone no: {value.PhoneNo}fdevrgfwccd</p>
                                                    </div>
                                                    
                                                   
                                                    
                                                </div>
                                                <hr
                                                    className="mb-4"
                                                    style={{ backgroundColor: "#e0e0e0", opacity: 1 }}
                                                />
                                                <div className="row d-flex align-items-center">
                                                    <div className="col-md-12">
                                                        <p className="text-muted mb-0 small">MESSAGE:  {value.Message}</p>
                                                    </div>
                                                   
                                                </div>
                                            </div>


                                        </div>
                                    






                                    




                                   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        










      </div>




    ))}
    
    
    </>
  )
}
