// OrderContextProvider.js
import React, { createContext, useState } from 'react';

export const OrderContext = createContext();

export default function OrderContextProvider({ children }) {
  const [orderDetails, setOrderDetails] = useState(null);

  const updateOrderDetails = (details) => {
    setOrderDetails(details);
  };

  return (
    <OrderContext.Provider value={{ orderDetails, updateOrderDetails }}>
      {children}
    </OrderContext.Provider>
  );
}
