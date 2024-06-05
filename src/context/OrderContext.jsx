// OrderContextProvider.js
import React, { createContext, useState } from 'react';

export const OrderContextVariable = createContext();

export default function OrderContextProvider({ children }) {
  const [orderDetails, setOrderDetails] = useState(null);

  const updateOrderDetails = (details) => {
    setOrderDetails(details);
  };

  return (
    <OrderContextVariable.Provider value={{ orderDetails, updateOrderDetails }}>
      {children}
    </OrderContextVariable.Provider>
  );
}
