import React, { useState, useEffect } from 'react';
import {useNavigate } from 'react-router-dom';  // import useNavigate
import jsonData from '../../../assets/json/BaybayinGuide.json'; // Import the JSON data
import { mapToBaybayinCustomFont } from '../../../assets/utils/MapToBaybayinCustomFont';
import '../../../styles/baybayinTools/baybayinGuide/BaybayinGuide.css';

function BaybayinGuide() {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate(); // Initialize navigate

  useEffect(() => {
    setCategories(jsonData); // Load categories from JSON
  }, []);

  const handleCategoryClick = (category) => {
    // Navigate to the LessonList page and pass category data as state
    navigate(`/baybayin-tools/baybayin-guide/${category.categoryNumber}`, { state: { ...category } });
  };

  return (
    <div className="baybayin-guide-container">
      <div className="text-details">
        <p>Anong gusto mong <b>matutunan ngayon?</b></p>
        <h4>Mga Kategorya</h4>
      </div>
      <div className="categories-grid">
        {categories.map((category) => (
          <div
            key={category.categoryNumber}
            className="category-card"
            onClick={() => handleCategoryClick(category)} // Pass category on click
          >
            <div className="category-card-link">
              <div className="category-card-text">
                <p className="baybayin-text">{mapToBaybayinCustomFont(category.categoryTitleBaybayin)}</p> 
                <p className="category-text">{category.categoryTitle}</p>
              </div>
              <div className="category-image">
                <img
                  src={require(`../../../assets/icons/baybayin_guide_icons/${category.image}`)}
                  alt={category.categoryTitle}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BaybayinGuide;
