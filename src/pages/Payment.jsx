import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { SERVER } from '../config';
import axios from 'axios';

const Payment = () => {
  const navigate = useNavigate()
    let { bookingId } = useParams();

    const donePayment = async () => {
        try {
            const res = await axios.put(`${SERVER}/api/booking/${bookingId}/payment-status`, {"paymentStatus": "Paid"}, {
                headers: {
                  "Authorization": `Bearer ${localStorage.getItem('futstal-token')}`
                }
              })
              navigate('/my-bookings')
            alert("Payment Successful. Waiting for approval")
        } catch (error) {
            alert(error.repsonse.data.message)
        }
    }
  return (
    <div>
      <div className="my-5 mx-3">
            <h1 className="text-center">Payment: Rs 100</h1>
            <div className="qr-container text-center d-flex flex-column justify-content-center align-items-center">
                <img src="https://upload.wikimedia.org/wikipedia/commons/d/d0/QR_code_for_mobile_English_Wikipedia.svg" style={{width: 300, height: 300}} width="300px" height="300px" alt="QR" />
                <button className="btn btn-primary" onClick={donePayment}>Done Payment</button>
            </div>
        </div>
    </div>
  )
}

export default Payment
