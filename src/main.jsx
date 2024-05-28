import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import CartContextProvider from './context/addtocart/context.jsx';
import OrderContextProvider from './context/order/context.jsx';

import SignupContextProvider from './context/signup/contextsignup.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(

  <SignupContextProvider>
  <OrderContextProvider>
  <CartContextProvider>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>,
  </CartContextProvider>
  </OrderContextProvider>

   </SignupContextProvider>
)
