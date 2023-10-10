import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import About from './pages/About'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import Navbar from './components/Navbar'
import Bookings from './pages/Booking'
import Login from './pages/Login'
import Register from './pages/Register'
import Profile from './pages/Profile'
import Footer from './components/Footer'
import EditProfile from './pages/EditProfile'
import Payment from './pages/Payment'
import MyBookings from './pages/MyBookings'
import AdminDashboard from './pages/AdminDashboard'

const App = () => {
  return (
    <BrowserRouter>
        <Navbar />
        <Routes> 
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/bookings" element={<Bookings/>} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/edit-profile" element={<EditProfile />} />
            <Route path="/payment/:bookingId" element={<Payment />} />
            <Route path="/my-bookings" element={<MyBookings />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer/>
          
    </BrowserRouter>
  )
}

export default App
