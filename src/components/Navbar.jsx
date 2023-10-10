import React from 'react'
import { NavLink } from 'react-router-dom'
import { useAuth } from '../context/authentication'

export default function Navbar() {
  const {isAuthenticated, profile,  logout} = useAuth()

  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">NSC</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink to="/"  className="nav-link active" aria-current="page" data-after='Home'>Home</NavLink>
              </li>
              <li className="nav-item">
                <a href="/#about" className="nav-link">About</a>
              </li>
              <li className="nav-item">
                <a href="/#contact" className="nav-link">Contact</a>
              </li>
              {isAuthenticated && profile && profile.role === "User" && <li className="nav-item">
                <NavLink to="/bookings"  className="nav-link" aria-current="page">Create Booking</NavLink>
              </li>}
              {isAuthenticated && profile && profile.role === "ADMIN" && <li className="nav-item">
                <NavLink to="/admin"  className="nav-link" aria-current="page">Dashboard</NavLink>
              </li>}
              {isAuthenticated && profile && profile.role === "User" && <li className="nav-item">
                <NavLink to="/my-bookings"  className="nav-link" aria-current="page">My Bookings</NavLink>
              </li>}
              {!isAuthenticated && <li className="nav-item">
                <NavLink to="/login"  className="nav-link" aria-current="page">Login</NavLink>
              </li>}
              {!isAuthenticated && <li className="nav-item">
                <NavLink to="/register"  className="nav-link" aria-current="page">Register</NavLink>
              </li>}
              {!isAuthenticated && <li className="nav-item">
                <NavLink to="/userdetail"  className="nav-link" aria-current="page">UserDetail</NavLink>
              </li>}
              {isAuthenticated && <li className="nav-item">
                <NavLink to="/profile"  className="nav-link" aria-current="page">Profile</NavLink>
              </li>}
              {isAuthenticated && <li className="nav-item">
                <NavLink to="/cancelbooking"  className="nav-link" aria-current="page">Cancellation Booking</NavLink>
              </li>}
              {isAuthenticated && <li className="nav-item">
                <button class="btn btn-danger" onClick={() => logout()}>Logout</button>
              </li>}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}
