import React, { useReducer, useEffect, useState, createContext } from 'react'
import Cookies from 'js-cookie';
import { signupreducer } from './reducer'
export const signupcontext=createContext("initial value")

// firebase
import {auth} from './../../Firebase/firebaseConfig'
import { onAuthStateChanged } from "firebase/auth";



export default function SignupContextProvider({children}) {


  
  // fb

  const [currentUser, setCurrentUser] = useState(null);
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

    const data={
      token: Cookies.get('token') || null, //shru main ya to undefined hoga ya to jo cookiies se milega
      email: Cookies.get('email') || null, //shru main ya to undefined hoga ya to jo cookiies se milega
      currentUser,
      userLoggedIn,
      loading
    }


    const [login_state,login_dispatch]=useReducer(signupreducer, data)

    useEffect(()=>{
      Cookies.set('token', login_state.token)
      Cookies.set('email', login_state.email)
      


      // fb
      const unsubscribe = onAuthStateChanged(auth, initializeUser)
      return unsubscribe



  },[login_state.token, login_state.email])


  // fb



  async function initializeUser (user){
    if (user){
        setCurrentUser({...user})
        setUserLoggedIn(true)
    } else {
        setCurrentUser(null);
    }
    setLoading(false)
}

  

  return (

    <signupcontext.Provider value={{login_state,login_dispatch}}>
          {!loading && children}
    </signupcontext.Provider>

    
  )
}
