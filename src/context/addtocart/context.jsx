import React, { createContext, useEffect, useReducer } from 'react'
import { reduce } from './reduce'
export const CartContext = createContext("initial value")

export default function CartContextProvider({ children }) {

  function getcartdata(){
    let cartdata = localStorage.getItem('cart');
    if (cartdata === null || cartdata === undefined) {
      return [];
    } else {
      return JSON.parse(cartdata);
    }
  }
  
  const initialData = {
    cart: getcartdata()
  }
  
  const [state, dispatch] = useReducer(reduce, initialData)
  useEffect(()=>{
    localStorage.setItem('cart',JSON.stringify(state.cart))
  },[state.cart])
  return (
  <>
      <CartContext.Provider value={{state, dispatch}}>
        {children}
      </CartContext.Provider>


    </>
  )
}
