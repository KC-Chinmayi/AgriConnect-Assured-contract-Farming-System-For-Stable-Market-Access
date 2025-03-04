import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <h2>Contact Us</h2>
      <p>If you have any questions or inquiries, feel free to reach out to us!</p>

      <div className="contact-details">
        <h3>Email Us</h3>
        <p>info@contractfarming.com</p>

        <h3>Call Us</h3>
        <p>+91 9876543210</p>

        <h3>Visit Us</h3>
        <p>123 Farm Street, Rural Area, Mumbai, India</p>

        <h3>Follow Us</h3>
        <p>
          <a href="https://www.facebook.com">Facebook</a> | 
          <a href="https://www.twitter.com"> Twitter</a> | 
          <a href="https://www.instagram.com"> Instagram</a>
        </p>
      </div>
    </section>
  );
};

export default Contact;
