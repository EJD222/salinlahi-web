import React from "react"
import PropTypes from "prop-types"
import { mapToBaybayinCustomFont } from "../../../../utils/MapToBaybayinCustomFont"

const TextBlock = ({ block, showLine = false, fontSize = "15px" }) => {
  const renderTextWithBoldAndBaybayin = () => {
    const text = block?.text || ""
    const boldWords = block?.boldWords || []
    const baybayinWords = block?.baybayinWords || {}

    const escapeRegex = (str) => str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")

    let content = [text]
    boldWords.forEach((word) => {
      content = content.flatMap((fragment, index) =>
        typeof fragment === "string"
          ? fragment
              .split(new RegExp(`(${escapeRegex(word)})`, "gi"))
              .map((part, partIndex) =>
                part.toLowerCase() === word.toLowerCase() ? (
                  <strong key={`${word}-${index}-${partIndex}`}>{part}</strong>
                ) : (
                  part
                ),
              )
          : fragment,
      )
    })

    content = content.flatMap((fragment, index) =>
      typeof fragment === "string"
        ? fragment.split(/(\b\w+\b|\([^)]+\))/).map((part, partIndex) =>
            baybayinWords[part] ? (
              <span
                key={`${part}-${index}-${partIndex}`}
                style={{ fontFamily: "BaybayinNeue" }}
              >
                {mapToBaybayinCustomFont(baybayinWords[part])}
              </span>
            ) : (
              part
            ),
          )
        : fragment,
    )

    return content
  }

  return (
    <div style={{ marginBottom: "15px" }}>
      <p style={{ fontSize }}>{renderTextWithBoldAndBaybayin()}</p>
      {showLine && <hr style={{ borderColor: "#6C6C6C", marginTop: "5px" }} />}
    </div>
  )
}

TextBlock.propTypes = {
  block: PropTypes.shape({
    text: PropTypes.string,
    boldWords: PropTypes.arrayOf(PropTypes.string),
    baybayinWords: PropTypes.object,
  }),
  showLine: PropTypes.bool,
  fontSize: PropTypes.string,
}

TextBlock.defaultProps = {
  block: { text: "", boldWords: [], baybayinWords: {} },
  showLine: false,
  fontSize: "16px",
}

export default TextBlock