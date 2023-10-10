import React from 'react'
import { MdEmail,MdLocationOn,MdPhoneInTalk } from "react-icons/md";

const Contact = () => {
  return (
    <div className='page'>
      <div className='container'>
        <div className='info'>
          <ul>
            <li><MdEmail/> nscentrenp@gmail.com</li>
            <li><MdLocationOn/>Lalitpur, Nepal</li>
            <li><MdPhoneInTalk/>01-5434470</li>
          </ul>
        </div>
        <div className='contact-form'>
            <h1 className="title">Contact Us</h1>
            <h2 className="subtitle">We are here to assist you.</h2>
            <form action="">
              <input type="text" name="name" placeholder="Your Name" />
              <input type="email" name="e-mail" placeholder="Your E-mail Adress" />
              <input type="tel" name="phone" placeholder="Your Phone Number"/>
              <textarea name="text" id="" rows="8" placeholder="Your Message"></textarea>
              <button className="btn-send">Get a Call Back</button>
            </form>
          </div>
        </div>
        <div className='map'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.3033240586446!2d85.3338788!3d27.677018500000013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19c1f9cca36b%3A0x20d93e8376134dc2!2sNational%20Sports%20and%20Swimming%20Center!5e0!3m2!1sen!2snp!4v1688396791675!5m2!1sen!2snp" width="100%" height="450" allowfullscreen="" loading="lazy" />
        </div>
    </div>
  )
}

export default Contact
