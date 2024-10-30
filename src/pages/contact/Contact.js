import React, { useRef, useState } from "react"
import "../../styles/contact/Contact.css"
import LocalPhoneIcon from "@mui/icons-material/LocalPhone"
import EmailIcon from "@mui/icons-material/Email"
import RoomIcon from "@mui/icons-material/Room"
import FacebookIcon from "@mui/icons-material/Facebook"
import emailjs from "@emailjs/browser"

const Contact = () => {
  const form = useRef()
  const [messageStatus, setMessageStatus] = useState("")

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        "service_f18g0bk",
        "template_3syerkt",
        form.current,
        "SVWO5SHc7BEHyAQK1",
      )
      .then(
        () => {
          setMessageStatus("Message sent successfully!")
          form.current.reset() 
          setTimeout(() => setMessageStatus(""), 10000)
        },
        (error) => {
          setMessageStatus("Message failed to send. Please try again.") 
          console.error("Message failed...", error.text)
          setTimeout(() => setMessageStatus(""), 10000)
        },
      )
  }

  return (
    <div className="contact-us-form-container">
      <div className="contact-container">

        <div className="contact-form">
          <h2 className="contact-title">Get in Touch</h2>
          <p className="contact-description">
            Thank you for reaching out to us! We're thrilled to hear from you.
            Please feel free to share any questions, feedback, or concerns you
            may have.
          </p>
          <form ref={form} onSubmit={sendEmail}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Name*</label>
                <input type="text" id="name" name="username" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address*</label>
                <input type="email" id="email" name="email" required />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject*</label>
              <input type="text" id="subject" name="subject" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message*</label>
              <textarea
                id="message"
                rows="5"
                name="message"
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-button">
              Submit
            </button>
          </form>
          {messageStatus && <p className="message-status">{messageStatus}</p>}{" "}
        </div>

        <div className="contact-details">
          <h3>Contact Information</h3>
          <div className="contact-info">
            <RoomIcon className="contact-icon" />
            <p>Taguig, Philippines</p>
          </div>
          <div className="contact-info">
            <LocalPhoneIcon className="contact-icon" />
            <p>09122055532</p>
          </div>
          <div className="contact-info">
            <EmailIcon className="contact-icon" />
            <p>awangan.baybayin@gmail.com</p>
          </div>
          <div className="contact-info">
            <FacebookIcon className="contact-icon" />
            <a
              href="https://www.facebook.com/Awanggan052120"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              https://www.facebook.com/Awanggan052120
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact