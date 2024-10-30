// ExclamationWithLineBlock.js
import React from "react"
import PropTypes from "prop-types"
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline"

const ExclamationWithLineBlock = ({ text, showLine = true }) => {
  return (
    <div style={{ marginBottom: "15px" }}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <ErrorOutlineIcon
          style={{
            fontSize: 24,
            color: "#FCC900",
            marginRight: "5px",
          }}
        />
        <span
          style={{
            fontFamily: "Inter",
            fontWeight: 700,
            fontSize: "16px",
            color: "#000000", 
            lineHeight: 1.2,
          }}
        >
          {text}
        </span>
      </div>
      {showLine && (
        <div
          style={{
            marginTop: "5px",
            height: "1px",
            backgroundColor: "#6C6C6C", 
          }}
        />
      )}
    </div>
  )
}

ExclamationWithLineBlock.propTypes = {
  text: PropTypes.string.isRequired,
  showLine: PropTypes.bool,
}

export default ExclamationWithLineBlock