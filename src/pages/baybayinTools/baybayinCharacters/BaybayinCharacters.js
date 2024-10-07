import React, { useState } from 'react';
import jsonData from '../../../assets/json/BaybayinCharacters.json'; // Adjust path to your JSON file
import { mapToBaybayinCustomFont } from '../../../assets/utils/MapToBaybayinCustomFont';
import '../../../styles/baybayinTools/baybayinCharacters/BaybayinCharacters.css';

function BaybayinCharacters() {
  const [activeCategory, setActiveCategory] = useState(jsonData[0]); // Default to the first category

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  return (
    <div className="character-list-container">
      {/* Tab container with a yellow background */}
      <div className="category-tabs">
        {jsonData.map((category) => (
          <button
            key={category.categoryNumber}
            className={`tab ${category === activeCategory ? 'active-tab' : ''}`}
            onClick={() => handleCategoryClick(category)}
          >
            {category.categoryTitle}
          </button>
        ))}
      </div>

      {/* Category Title and Baybayin Title */}
      <div className="category-header">
        <h2>{activeCategory.categoryTitle}</h2>
        <p className="baybayin-title">
          {mapToBaybayinCustomFont(activeCategory.categoryTitle)}
        </p>
      </div>

      {/* Character grid */}
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
  );
}

export default BaybayinCharacters;
