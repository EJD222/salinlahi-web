import React from "react"
import PropTypes from "prop-types"
import HelpOutlineIcon from "@mui/icons-material/HelpOutline"

const QuestionWithLineBlock = ({ block, showLine = true }) => {
  return (
    <div style={{ marginBottom: "15px" }}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <HelpOutlineIcon
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
          {block.text}
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

QuestionWithLineBlock.propTypes = {
  block: PropTypes.shape({
    text: PropTypes.string,
  }).isRequired,
  showLine: PropTypes.bool,
}

export default QuestionWithLineBlock