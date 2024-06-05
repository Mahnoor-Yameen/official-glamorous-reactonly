import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import CartContextProvider from './context/CartContext.jsx';
import OrderContextProvider from './context/OrderContext.jsx';

import AccountContextProvider from './context/AccountContext.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(

  <AccountContextProvider>
  <OrderContextProvider>
  <CartContextProvider>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>,
  </CartContextProvider>
  </OrderContextProvider>

   </AccountContextProvider>
)
