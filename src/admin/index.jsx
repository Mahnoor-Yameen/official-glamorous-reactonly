import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import Orders from './pages/Orders'
import Login from './../pages/Login'
import Signup from './../pages/Signup'
import Products from './../pages/Products'
import Users from './pages/Users'
import Page404 from './../pages/Page404'
import Footer from './../components/Footer'
import DSpecificCategoryProducts from './../pages/DSpecificCategoryProducts'
import DProductOne from './../pages/DProductOne'
import Profile from './../pages/Profile'
import Payment from './../pages/Payment'
import HairExtension from './../pages/HairExtension'
import HairEssential from './../pages/HairEssential'
import HairUnit from './../pages/HairUnit'
import Section from './../components/Section'
import ServicePage from './../pages/ServicePage'
import Blog from './../pages/Blog'
import Refund from './../pages/Refund'
import Privacy from './../pages/Privacy'
import TermsService from './../pages/TermsService'
import Shipping from './../pages/Shipping'
import Contactus from './../pages/Contactus'
import Checkout from './../pages/Checkout'
import HairDresser from './../pages/HairDresser'
import SearchInput from "./../pages/SearchInput"
import NavigAdmin from './components/NavigAdmin'
import DorderOne from './pages/DorderOne'
import ContactUs from './pages/ContactUs'
import DQueryOne from './pages/DQueryOne'


export default function Admin() {

  return (
    <>
    
    
<NavigAdmin/>
    
          <Routes>
            <Route path="/" element={<Orders />} />
            <Route path="/signup" element={<Orders />} />
            <Route path="/login" element={<Orders />} />
            <Route path="/products" element={<Products />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/hairextension" element={<HairExtension />} />
            <Route path="/hairessential" element={<HairEssential />} />
            <Route path="/hairunit" element={<HairUnit />} />
            <Route path="/products/category/:hollow" element={<DSpecificCategoryProducts />} />
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
