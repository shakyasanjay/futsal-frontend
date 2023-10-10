import React from 'react'
import { useState } from 'react'
import "../Styles/Booking.css"
import axios from 'axios'
import { SERVER } from '../config'
import { useNavigate } from 'react-router-dom'

const Booking = () => {
  const [dateTime, setDateTime] = useState(Date.now())
  const [duration, setDuration] = useState(1)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const res = await axios.post(`${SERVER}/api/booking/create`, {dateTime, durationInHours: duration}, {
        headers: {
          "Authorization": `Bearer ${localStorage.getItem('futstal-token')}`
        }
      })
      navigate(`/payment/${res.data.booking._id}`)
    } catch (error) {
      alert(error.response.data.message)
      console.log(error)
    }
  }

  return (
    <div>
      <div className="my-5 mx-3">
        <h1 className="text-center">Select Date and Time</h1>

        <form onSubmit={handleSubmit} className="booking-container">
          <div className="form-group my-3">
            <label htmlFor="dateTime">Choose Date and Time:</label>
            <input type="datetime-local" className="form-control" id="dateTime" placeholder="Enter email" value={dateTime} onChange={e => setDateTime(e.target.value)} />
          </div>
          <div className="form-group my-3">
            <label htmlFor="duration">Choose Duration:</label>
            <select multiple className="form-control" id="duration" value={duration} onChange={e => setDuration(e.target.value)}>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Booking


// import React, { useState } from 'react';

// const timeSlots = [
//   '6:00 AM',
//   '7:00 AM',
//   '8:00 AM',
//   '9:00 AM',
//   '10:00 AM',
//   '11:00 AM',
//   '12:00 PM',
//   '1:00 PM',
//   '2:00 PM',
//   '3:00 PM',
//   '4:00 PM',
//   '5:00 PM',
//   '6:00 PM',
//   '7:00 PM',

//   // Add more time slots as needed
// ];
// timeSlots.forEach(timeSlot => {
//   console.log(timeSlot);
// });

// function BookingApp() {
//   const [selectedTime, setSelectedTime] = useState(null);

//   const handleTimeSlotClick = (time) => {
//     setSelectedTime(time);
//   };

//   // Simulate unavailable time slots (e.g., booked appointments)
//   const unavailableTimeSlots = ['10:00 AM', '11:00 AM'];

//   return (
//     <div>
//       <h1>Booking System</h1>
//       <h2>Select a Time Slot:</h2>
//       <div className="time-slots">
//         {timeSlots.map((time) => (
//           <button
//             key={time}
//             onClick={() => handleTimeSlotClick(time)}
//             disabled={unavailableTimeSlots.includes(time)}
//             className={selectedTime === time ? 'selected' : ''}
//           >
//             {time}
//           </button>
//         ))}
//       </div>
//       {selectedTime && (
//         <div>
//             <button>Book</button>
//             <button>Cancel</button>
//         </div>
//       )}
//     </div>
//   );
// }

// export default BookingApp;




// import React from 'react';
// import { Calendar, momentLocalizer } from 'react-big-calendar';
// import 'react-big-calendar/lib/css/react-big-calendar.css';
// import moment from 'moment';

// const localizer = momentLocalizer(moment);

// const events = [
//   {
//     title: 'Event 1',
//     start: new Date(2023, 9, 10, 10, 0), // Example start time
//     end: new Date(2023, 9, 10, 12, 0),   // Example end time
//   },
//   // Add more events here
// ];

// function CalendarPage() {
//   return (
//     <div className="calendar-container">
//       <Calendar
//         localizer={localizer}
//         events={events}
//         startAccessor="start"
//         endAccessor="end"
//         style={{ height: '500px' }}
//       />
//     </div>
//   );
// }

// export default CalendarPage;

// import React, { useState } from 'react';

// function TableRow({ data, onClick }) {
//   const [isExpanded, setIsExpanded] = useState(false);

//   const toggleExpansion = () => {
//     setIsExpanded(!isExpanded);
//   };

//   return (
//     <tr>
//       <td onClick={toggleExpansion}>
//         {data.name}
//       </td>
//       <td onClick={toggleExpansion}>
//         {data.description}
//       </td>
//       {isExpanded && (
//         <tr>
//           <td colSpan="3">
//             Subcomponent content here
//           </td>
//         </tr>
//       )}
//     </tr>
//   );
// }

// function App() {
//   const tableData = [
//     { name: '', description: '5:00 am ' },
//     { name: 'Item 2', description: 'Description 2' },
//     { name: 'Item 3', description: 'Description 3' },
//   ];

//   return (
//     <div>
//       <table>
//         <thead>
//           <tr>
//             <th></th>
//             <th>Name</th>
//             <th>Description</th>
//           </tr>
//         </thead>
//         <tbody>
//           {tableData.map((data, index) => (
//             <TableRow key={index} data={data} />
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default App;

