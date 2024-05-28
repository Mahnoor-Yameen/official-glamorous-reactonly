import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import Home from './../pages/Home'
import Login from './../pages/Login'
import Signup from './../pages/Signup'
import Products from './../pages/Products'
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
import NavUser from './../components/NavUser'
import NavGuest from "./../components/NavGuest"

export default function Default() {

  return (
    <>
<NavGuest/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/users" element={<Home />} />
            <Route path="/order/:hollowthree" element={<Home />} />



            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/products" element={<Products />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/hairextension" element={<HairExtension />} />
            <Route path="/hairessential" element={<HairEssential />} />
            <Route path="/hairunit" element={<HairUnit />} />
            <Route path="/products/category/:hollow" element={<DSpecificCategoryProducts />} />
            <Route path="/products/:hollowtwo" element={<DProductOne />} />
            <Route path="/service" element={<ServicePage />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/refund" element={<Refund />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/checkout" element={<Checkout />} />
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
