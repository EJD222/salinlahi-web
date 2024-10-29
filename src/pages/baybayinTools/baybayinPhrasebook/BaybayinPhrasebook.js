import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import jsonData from '../../../json/BaybayinPhrasebook.json';
import '../../../styles/baybayinTools/baybayinPhrasebook/BaybayinPhrasebook.css';

function BaybayinPhrasebook() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    setCategories(jsonData);
  }, []);

  const ChildStepping = '/assets/icons/baybayin_phrasebook_icons/child_stepping_on_books.png';

  return (
    <div className="baybayin-phrasebook-container">
      <div className="halimbawa-ng-pagsalin-section">
        <p>Mga halimbawa ng pagsalin sa Baybayin.</p>
        <img src={ChildStepping} alt="child-stepping" className="child-stepping" />
      </div>
      <div className='mga-kategorya-container'>
        <h4 className='mga-kategorya'>Mga Kategorya</h4>
      </div>
      <div className="phrasebook-categories-grid">
        {categories.map((category) => {
          const imagePath = `/assets/icons/baybayin_phrasebook_icons/${category.image}`; // Move imagePath inside map

          return (
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
                      src={imagePath} // Use the dynamically created imagePath
                      alt={category.categoryTitle}
                    />
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default BaybayinPhrasebook;
