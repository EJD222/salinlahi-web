import React from "react"
import { Link } from "react-router-dom"
import "../styles/NotFound.css"

const NotFound = () => {
  return (
    <div className="not-found-container">
      <h1 className="not-found-title">404 - Page Not Found</h1>
      <p className="not-found-text">
        Sorry, the page you are looking for doesn't exist or has been moved.
      </p>
      <Link to="/" className="not-found-link">
        Go back to Home
      </Link>
    </div>
  )
}

export default NotFound