import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { SERVER } from '../config'

const options = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  };

const AdminDashboard = () => {
    const [bookings, setBookings] = useState([])

    console.log(bookings)

    useEffect(() => {
        const getMyBookings = async () => {
            try {
                const res = await axios.get(`${SERVER}/api/booking`, {
                    headers: {
                        "Authorization": `Bearer ${localStorage.getItem('futstal-token')}`
                    }
                })
    
                setBookings(res.data)
                
            } catch (error) {
                setBookings([])
            }
        }
        getMyBookings()
    }, [])

    const approveBooking = async (id) => {

        try {
            const res = await axios.put(`${SERVER}/api/booking/${id}/booking-status`, {"status": "Booked"}, {
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem('futstal-token')}`
                }
            })

            alert("Booking Booked")

            window.location.reload()
            
        } catch (error) {
            alert(error.response.data.message)
        }
    }

    const cancelBooking = async (id) => {

        try {
            const res = await axios.delete(`${SERVER}/api/booking/${id}`, {
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem('futstal-token')}`
                }
            })

            alert("Booking Cancelled")

            window.location.reload()
            
        } catch (error) {
            alert(error.response.data.message)
        }
    }

  return (
    <div className="my-bookings my-5 mx-3">
      <div className="my-bookings-contianer" style={{maxWidth: 1200, margin: "auto"}}>
        <h1 className="text-center">My Bookings</h1>

        <table class="table mt-3">
            <thead>
                <tr>
                <th scope="col">S.No</th>
                <th scope="col">User</th>
                <th scope="col">Date Time</th>
                <th scope="col">Booking Status</th>
                <th scope="col">Payment Status</th>
                <th scope="col">Approve</th>
                <th scope="col">Deny</th>
                </tr>
            </thead>
            <tbody>
                {bookings.map(booking => {
                    return (
                        <tr>
                            <th scope="row" key={booking._id}>1</th>
                            <td>{booking.user.name}</td>
                            <td>{new Intl.DateTimeFormat("en-US", options).format(new Date(booking.dateTime))}</td>
                            <td>{booking.status}</td>
                            <td>{booking.paymentStatus}</td>
                            <td>{booking.status === "Pending" ? <button class="btn btn-success" onClick={e => approveBooking(booking._id)}>Approve</button>: booking.status ==="Booked" ? "Booked": "x"}</td>
                            <td>{booking.status === "Pending" ? <button class="btn btn-danger" onClick={e => cancelBooking(booking._id)}>Cancel</button>: booking.status ==="Paid" ? "Paid": "x"}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
      </div>
    </div>
  )
}

export default AdminDashboard
