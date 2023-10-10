import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/authentication'
import { useEffect } from 'react'
import { useState } from 'react'

const EditProfile = () => {
    const navigate = useNavigate();
    const [values, setValues] = useState({
        name: "",
        password: "",
        phoneNumber: ""
    })
    const {isAuthenticated, profile, editMyProfile} = useAuth()

    useEffect   (() => {
        if(!isAuthenticated) {
            navigate('/login')
        }
    }, [isAuthenticated, navigate])

    useEffect(() => {
        if(profile) {
            setValues({
                name: profile.name,
                password: "",
                phoneNumber: profile.phoneNumber
            })
        }
    }, [])

    const handleChange = (e) => {

        console.log(e.target.name, e.target.value)
        setValues(prev => {
            return {
                ...prev,
                [e.target.name]: e.target.value
            }
        })
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
            editMyProfile({
                name: values.name,
                password: values.password,
                phoneNumber: values.phoneNumber
            })
            navigate("/profile")
        } catch (error) {
            alert("Error while updating")
        }
    }

    return (
        <div className="my-5 px-5">
            <div className="d-flex justify-content-between align-items-center">
                <h1 className="text-center">Edit Profile</h1>
            </div>

            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="name"
                        name="name"
                        aria-describedby="Name" 
                        placeholder="Enter name" 
                        value={values.name} 
                        onChange={handleChange} 
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input 
                        type="password" 
                        className="form-control" 
                        id="password"
                        name="password"
                        placeholder="Password" 
                        value={values.password}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Phone Number</label>
                    <input 
                        type="number" 
                        className="form-control" 
                        id="phoneNumber"
                        name="phoneNumber"
                        placeholder="Phone Number" 
                        value={values.phoneNumber}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default EditProfile
