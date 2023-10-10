import React from 'react'
import '../Styles/Homepage.css'
import i15 from '../Image/i15.jpg'
import { MdEmail,MdLocationOn,MdPhoneInTalk } from "react-icons/md";

function HomePage() {
  return (
    <div>
      {/* Start homepage section*/}
      <section id="hero">
        <div class="hero container">
          <div>
            <h1>Welcome to, <span></span></h1>
            <h1>National Sport Center<span></span></h1>
          </div>
        </div>
      </section>
      {/* Homepage section end */}

      {/* Start about Section */}
      <section id="about">
        <div class="about container">
          <div class="col-left">
            <div class="about-img">
              <img src={i15} alt="img"/>
            </div>
          </div>
          <div class="col-right">
            <h1 class="section-title">About <span>Us</span></h1>
            <p>The National Sport Center is a premier sports facility located in the heart of Chyasal. We are dedicated to fostering sports excellence, promoting active lifestyles, and nurturing a love for sports in individuals of all ages and abilities. Our center is designed to provide a world-class sporting experience, catering to athletes, sports enthusiasts, and the broader community.</p>
            <h1 class="section-title">Our <span>Vision</span></h1>
            <p>Our vision is to be the pinnacle of sports in Chyasal, creating an environment that inspires individuals to excel in their chosen sports and celebrates the power of athletic achievement. We strive to be a catalyst for positive change by promoting inclusivity, sportsmanship, and the values that sports instill in individuals, both on and off the field.</p>
          </div>
        </div>
      </section>
      {/* End about section */}

      {/* Start contact section*/}
      <section id="contact">
        <div class="contact container">
          <div>
            <h1 class="section-title">Contact <span>info</span></h1>
          </div>
          <div class="contact-items">
              <div class="contact-info">
                <h1>Phone</h1>
                <h2><MdPhoneInTalk/>  01-5434470</h2>
              </div>

              <div class="contact-info">
                <h1>Email</h1>
                <h2><MdEmail/> nscentrenp@gmail.com</h2>
              </div>

              <div class="contact-info">
                <h1>Address</h1>
                <h2><MdLocationOn/> Lalitpur, Nepal</h2>
              </div>
          </div>
        </div>
        <div className='map'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.3033240586446!2d85.3338788!3d27.677018500000013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19c1f9cca36b%3A0x20d93e8376134dc2!2sNational%20Sports%20and%20Swimming%20Center!5e0!3m2!1sen!2snp!4v1688396791675!5m2!1sen!2snp" width="100%" height="450" allowfullscreen="" loading="lazy" />
        </div>
      </section>
      {/* End contact section */}
    </div>
  )
}

export default HomePage



// import React from 'react'
// import Slider from '../components/Slider';
// import { SliderData } from '../components/SliderData';

// function HomePage() {
//   return (
//     <div>
//       <Slider slides={SliderData} />;
//     </div>
//   )
// }

// export default HomePage
