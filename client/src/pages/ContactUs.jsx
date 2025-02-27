import React, { useState } from "react";
import axios from "axios";
import "./ContactUs.css";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://sprintxplore-server.vercel.appt/contactUs", formData);
      alert("Message sent successfully!");
      setFormData({ name: "", phone: "", email: "", message: "" });
    } catch (error) {
      alert("Failed to send message. Please try again later.");
    }
  };

  return (
    <div className="contact-us-container">
      <h2>Contact Us</h2>
      <form className="contact-us-form" onSubmit={handleSubmit}>
        <input className="contact-us-input" type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
        <input className="contact-us-input" type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required />
        <input className="contact-us-input" type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
        <textarea className="contact-us-textarea" name="message" placeholder="Message" value={formData.message} onChange={handleChange} required></textarea>
        <button className="contact-us-button" type="submit">Send</button>
      </form>
    </div>
  );
};

export default ContactUs;
