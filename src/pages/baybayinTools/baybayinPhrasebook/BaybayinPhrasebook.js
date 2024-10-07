import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import jsonData from '../../../assets/json/BaybayinPhrasebook.json';
import '../../../styles/baybayinTools/baybayinPhrasebook/BaybayinPhrasebook.css';
import ChildStepping from '../../../assets/icons/baybayin_phrasebook_icons/child_stepping_on_books.png';

function BaybayinPhrasebook() {
  const [categories, setCategories] = useState([]);

  // Load the categories from the JSON data
  useEffect(() => {
    setCategories(jsonData);
  }, []);

  return (
    <div className="baybayin-phrasebook-container">
      <div className="halimbawa-ng-pagsalin-section">
        <p>Mga halimbawa ng pagsalin sa Baybayin.</p>
        <img src={ChildStepping} alt="Salinlahi Mascot" className="salinlahi-mascot" />
      </div>
      <div className='mga-kategorya-container'>
        <h4 className='mga-kategorya'>Mga Kategorya</h4>
      </div>
      <div className="phrasebook-categories-grid">
        {categories.map((category) => (
          <div key={category.categoryNumber} className="phrasebook-category-card">
            {/* Link to the dynamic route based on the category */}
            <Link 
              to={`/baybayin-tools/baybayin-phrasebook${category.route}`} 
              className="phrasebook-category-card-link"
            >
              <div>
                <h3>{category.categoryTitle}</h3>
                <div className="phrasebook-category-image">
                  <img
                    src={require(`../../../${category.image}`)} // Adjust to correct image path
                    alt={category.categoryTitle}
                  />
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BaybayinPhrasebook;
