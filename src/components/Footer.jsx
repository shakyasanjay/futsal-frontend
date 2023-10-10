import React from 'react'
import { FaFacebook,FaInstagram,FaCopyright} from 'react-icons/fa'
import '../Styles/Footer.css'


export default function Footer() {
  return (
    <div className="footer-container">
        <div className="contact-info">
            <p>National Sports Centre, Lalitpur, Nepal, 44600</p>
            <p>#nscentrenp@gmail.com</p>
            <p>+977 01-5434470</p>
        </div>
        <div className="social-icons">
             <a href="https://www.facebook.com/nscentre2072"><FaFacebook/></a>
             <a href="https://www.instagram.com/nationalsportscentre.np"><FaInstagram/></a>
        </div>
        <div className="footer-links">
            <p>Terms and Condition</p>
            <p>Privacy Policy</p>
        </div>
        <div className="copyright">
           <FaCopyright/> Copyright {new Date().getFullYear()}
        </div>
    </div>
  )
}
