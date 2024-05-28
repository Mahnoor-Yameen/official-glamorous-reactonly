import { auth, firestore } from "./firebaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  sendEmailVerification,
  updatePassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import { collection, getDocs, addDoc } from "firebase/firestore";


export const doCreateUserWithEmailAndPassword = async (email, password) => {
  try {
     await createUserWithEmailAndPassword(auth, email, password);
    const colRef = collection(firestore, "users");
    addDoc(colRef, {
      email,
      password
    }).then(()=>{
      console.log("done creating")
    })

    
  } catch (error) {
    // Handle errors
    console.error("Error creating user and adding to Firestore:", error);
    throw error;
  }
};



// -------------------------------------


export const doSignInWithEmailAndPassword = async (email, password) => {

  return signInWithEmailAndPassword(auth, email, password);


};

//     


export const doSignInWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  const result = await signInWithPopup(auth, provider);
  const user = result.user;

  // add user to firestore
};

export const doSignOut = () => {
  return auth.signOut();
};

export const doPasswordReset = (email) => {
  return sendPasswordResetEmail(auth, email);
};

export const doPasswordChange = (password) => {
  return updatePassword(auth.currentUser, password);
};

export const doSendEmailVerification = () => {
  return sendEmailVerification(auth.currentUser, {
    url: `${window.location.origin}/home`,
  });
};
