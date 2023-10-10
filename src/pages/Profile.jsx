import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/authentication';

function SimpleForm() {
  const navigate = useNavigate()
  const {isAuthenticated, profile} = useAuth()

  useEffect   (() => {
    if(!isAuthenticated) {
        navigate('/login')
    }
}, [isAuthenticated, navigate])

  return (
    <div class="my-5 px-5">
      <div className="d-flex justify-content-between align-items-center">
        <h1 class="text-center">My Profile</h1>
        <Link to="/edit-profile">
            <button className="btn btn-primary">
              Edit Profile
            </button>
        </Link>
      </div>

      {profile && <div className="profile-container mt-3">
        <ul class="list-group">
          <li class="list-group-item">Name: {profile.name}</li>
          <li class="list-group-item">Username: {profile.username}</li>
          <li class="list-group-item">Email: {profile.email}</li>
          <li class="list-group-item">Phone: {profile.phoneNumber}</li>
          <li class="list-group-item">Role: {profile.role}</li>
        </ul>
      </div>}
    </div>
  );
}

export default SimpleForm;
