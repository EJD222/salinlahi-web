import React, { useState } from "react"
import jsonData from "../../../json/BaybayinCharacters.json"
import { mapToBaybayinCustomFont } from "../../../utils/MapToBaybayinCustomFont"
import "../../../styles/baybayinTools/baybayinCharacters/BaybayinCharacters.css"

function BaybayinCharacters() {
  const [activeCategory, setActiveCategory] = useState(jsonData[0])

  const handleCategoryClick = (category) => {
    setActiveCategory(category)
  }

  return (
    <div className="character-list-container">
      <div className="category-tabs">
        {jsonData.map((category) => (
          <button
            key={category.categoryNumber}
            className={`tab ${category === activeCategory ? "active-tab" : ""}`}
            onClick={() => handleCategoryClick(category)}
          >
            {category.categoryTitle}
          </button>
        ))}
      </div>

      <div className="category-header">
        <h2>{activeCategory.categoryTitle}</h2>
        <p className="baybayin-title">
          {mapToBaybayinCustomFont(activeCategory.categoryTitle)}
        </p>
      </div>

      <div className="character-grid">
        {activeCategory.characters.map((charObj, index) => (
          <div key={index} className="character-box">
            <div className="baybayin-character">
              {mapToBaybayinCustomFont(charObj.character)}
            </div>
            <p className="character-label">{charObj.characterLabel}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default BaybayinCharacters