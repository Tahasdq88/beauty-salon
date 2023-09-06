import React, { useState } from "react";
import "./Contact.css"; // Create a CSS file for styling
import { BsFacebook } from "react-icons/bs";
import { FaInstagramSquare } from "react-icons/fa";

const Contact = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here (e.g., send data to a server).
  };
  return (
    <>
      <div className="contact-page">
        <div className="left-image">
          <img src="/assets/images/Spa Bath.jpg" alt="Left Image" />
        </div>
        <div className="contact-info">
          <h2>Contact Us</h2>
          <p>
            Appointments Email:
            <a href="mailto:appointments@moshi.com">appointments@moshi.com</a>
          </p>
          <p>Phone: (619) 458-9088</p>
          <div className="social-icons">
            <a href="#">
              <BsFacebook />
            </a>
            <a href="#">
              <FaInstagramSquare />
            </a>
          </div>
          <p>
            Salon Hours:
            <br />
            Front Desk Unavailable Mondays and Sundays
            <br />
            Tues-Fri: 10-6
            <br />
            Saturday: 9-5 | Sundays- Limited availability
          </p>
        </div>
        <div className="right-image">
          <img src="/assets/images/hot_stone_massage.jpg" alt="Right Image" />
        </div>
      </div>
      <div className="contact-form-container">
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="contact-form-group">
            <div className="name-group">
              <div className="name-input">
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
              </div>
              <div className="name-input">
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
              </div>
            </div>
          </div>
          <div className="contact-form-group">
            <label htmlFor="phone">Phone</label>
            <input
              type="tel"
              id="phone"
              placeholder="Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="contact-form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="contact-form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default Contact;
