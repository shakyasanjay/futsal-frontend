import axios from 'axios';
import React, { createContext, useContext, useState, useEffect } from 'react';
import { SERVER } from '../config';

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [profile, setProfile] = useState(null)

  useEffect(() => {
    const token = localStorage.getItem('futstal-token');
    if (token) {
      setIsAuthenticated(true);
    }
    getMyProfile(token)
  }, []);

  const getMyProfile = async (token) => {
    try {
      const res = await axios.get(`${SERVER}/api/profile`, {
        headers: {
          "Authorization": `Bearer ${token}`
        }
      })
      setProfile(res.data)
    } catch (error) {
      console.log(error.message)
    }
  }

  const editMyProfile = async (form) => {
    try {
      const res = await axios.put(`${SERVER}/api/profile`, form, {
        headers: {
          "Authorization": `Bearer ${localStorage.getItem('futstal-token')}`
        }
      })
      setProfile(res.data)

      return true
    } catch (error) {
      return false
      console.log(error.message)
    }
  }

  const login = (token) => {
    getMyProfile(token)
    localStorage.setItem('futstal-token', token);
    setIsAuthenticated(true);
  };

  const logout = () => {
    localStorage.removeItem('futstal-token');
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, profile, login, logout, editMyProfile }}>
      {children}
    </AuthContext.Provider>
  );
}
