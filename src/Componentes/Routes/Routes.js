import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home/Home.js';

import BookCategories from './BookCategories/BookCategories.js';
import BookDetail from './BookDetail/BookDetail.js';
import ShoppingCart from './ShoppingCart/ShoppingCart.js';
import Checkout from './Checkout/Checkout.js';
import UserProfile from './UserProfile/UserProfile.js';
import CustomerSupport from './CustomerSupport/CustomerSupport.js';
import Login from './Login/Login.js';
import Register from './Register/Register.js';
import PaymentForm from './PaymentForm/PaymentForm.js';
import BookSearch from './BookSearch/BookSearch.js';

const CustomRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<BookCategories />} />
        <Route path="/book/:id" element={<BookDetail />} />
        <Route path="/search" element={<BookSearch />} />
        <Route path="/cart" element={<ShoppingCart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/support" element={<CustomerSupport />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/payment" element={<PaymentForm />} />
      </Routes>
    </Router>
  );
}

export default CustomRoutes;
