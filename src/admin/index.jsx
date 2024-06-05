import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Orders from './pages/Orders'
import Login from './../default/pages/Login'
import Register from './../default/pages/Register'
import Page404 from './../default/pages/Page404'
import Footer from './../default/components/Footer'
// import DSpecificCategoryProducts from './../default/pages/DSpecificCategoryProducts'
import DProductOne from './../default/pages/DProductOne'
import Profile from './../default/pages/Profile'
import Payment from './../default/pages/Payment'
import HairExtension from './../default/pages/HairExtension'
import HairEssential from './../default/pages/HairEssential'
import HairUnit from './../default/pages/HairUnit'
import Section from './../default/pages/Section'
import ServicePage from './../default/pages/ServicePage'
import Blog from './../default/pages/Blog'
import Refund from './../default/pages/Refund'
import Privacy from './../default/pages/Privacy'
import TermsService from './../default/pages/TermsService'
import Shipping from './../default/pages/Shipping'
import Contactus from './../default/pages/Contactus'
import Checkout from './../default/pages/Checkout'
import HairDresser from './../default/pages/HairDresser'
import SearchInput from "./../default/pages/SearchInput"
import NavigAdmin from './components/NavigAdmin'
import DorderOne from './pages/DorderOne'
import ContactUs from './pages/ContactUs'
import Users from './pages/Users'

import DQueryOne from './pages/DQueryOne'


export default function Admin() {

  return (
    <>
    
    
<NavigAdmin/>
    
          <Routes>
            <Route path="/" element={<Orders />} />
            <Route path="/register" element={<Orders />} />
            <Route path="/login" element={<Orders />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/hairextension" element={<HairExtension />} />
            <Route path="/hairessential" element={<HairEssential />} />
            <Route path="/hairunit" element={<HairUnit />} />
            {/* <Route path="/products/category/:hollow" element={<DSpecificCategoryProducts />} /> */}
            <Route path="/products/:hollowtwo" element={<DProductOne />} />
            <Route path="/order/:hollowthree" element={<DorderOne />} />
            <Route path="/query/:hollowfour" element={<DQueryOne />} />


            <Route path="/service" element={<ServicePage />} />
            <Route path="/queries" element={<ContactUs />} />

            <Route path="/blog" element={<Blog />} />
            <Route path="/refund" element={<Refund />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/users" element={<Users />} />

            <Route path="/payment" element={<Payment />} />
            <Route path="/hairdresser" element={<HairDresser />} />

            <Route path="/searchinput" element={<SearchInput />} />

            <Route path="/section" element={<Section />} />
            <Route path="/terms" element={<TermsService />} />
            <Route path="/shipping" element={<Shipping />} />
            <Route path="/contactus" element={<Contactus />} />

            <Route path="*" element={<Page404 />} />

            {/* koi aisa link ho jo /product/yahan jo bhi ho-- araha ho to dproductone pe kholna usko */}

          </Routes>





      <Footer/>








    </>
  )
}
