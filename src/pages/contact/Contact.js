import React from 'react';
import '../../styles/contact/Contact.css';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import RoomIcon from '@mui/icons-material/Room';

const Contact = () => {
  return (
    <div className="contact-container">
      {/* Left Column - Form */}
      <div className="contact-form">
        <h2 className="contact-title">Get in Touch</h2>
        <p className="contact-description">
          Thank you for reaching out to us! We're thrilled to hear from you. Please feel free to share any questions, feedback, or concerns you may have.
        </p>
        <form>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">Name*</label>
              <input type="text" id="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address*</label>
              <input type="email" id="email" required />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="subject">Subject*</label>
            <input type="text" id="subject" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message*</label>
            <textarea id="message" rows="5" required></textarea>
          </div>
          <button type="submit" className="submit-button">Submit</button>
        </form>
      </div>

      {/* Right Column - Additional Details */}
      <div className="contact-details">
        <h3>Contact Information</h3>
        <div className="contact-info">
          <RoomIcon className="contact-icon" />
          <p>Address</p>
        </div>
        <div className="contact-info">
          <LocalPhoneIcon className="contact-icon" />
          <p>Contact No.</p>
        </div>
        <div className="contact-info">
          <EmailIcon className="contact-icon" />
          <p>info@salinlahi.com</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
