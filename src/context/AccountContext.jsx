import React, { useReducer, useEffect, useState, createContext } from 'react'
import Cookies from 'js-cookie';
import { AccountReducer } from './AccountReducer'
export const AccountContextVariable=createContext("initial value")

// firebase
import {auth} from '../Firebase/firebaseConfig'
import { onAuthStateChanged } from "firebase/auth";



export default function AccountContextProvider({children}) {


  
  // fb

  const [currentUser, setCurrentUser] = useState(null);
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

    const data={
      token: Cookies.get('token') || null, //shru main ya to undefined hoga ya to jo cookiies se milega
      email: Cookies.get('email') || null, //shru main ya to undefined hoga ya to jo cookiies se milega
      people:Cookies.get('people') || 'guest',
      currentUser,
      userLoggedIn,
      loading
    }


    const [account_state,account_dispatch]=useReducer(AccountReducer, data)

    useEffect(()=>{
      Cookies.set('token', account_state.token)
      Cookies.set('email', account_state.email)
      Cookies.set('people', account_state.people)

      


      // fb
      const unsubscribe = onAuthStateChanged(auth, initializeUser)
      return unsubscribe



  },[account_state.token, account_state.email])


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

    <AccountContextVariable.Provider value={{account_state,account_dispatch}}>
          {!loading && children}
    </AccountContextVariable.Provider>

    
  )
}
