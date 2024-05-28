// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// FOR LOGIN / REGISTER
import { getAuth } from "firebase/auth";  //imported authentication
import { getFirestore, collection, getDocs } from "firebase/firestore";




// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAJIqBO2VcttlDmZ-0kFrAObwfCIdmv4SQ",
    authDomain: "glamorousbeauty-c2800.firebaseapp.com",
    projectId: "glamorousbeauty-c2800",
    storageBucket: "glamorousbeauty-c2800.appspot.com",
    messagingSenderId: "567626282568",
    appId: "1:567626282568:web:2fd3d9377112272ad28a7d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);  //created a const named auth for authentication works in firebse
const firestore = getFirestore(app);

export { app, auth, firestore };