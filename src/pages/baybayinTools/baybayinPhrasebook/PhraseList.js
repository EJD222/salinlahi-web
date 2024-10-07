import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSwipeable } from 'react-swipeable';  // Import react-swipeable for swipe functionality
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'; // MUI icon
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'; // MUI icon
import jsonData from '../../../assets/json/BaybayinPhrasebook.json';
import '../../../styles/baybayinTools/baybayinPhrasebook/PhraseList.css';

function PhraseList() {
  const { category } = useParams();
  const navigate = useNavigate();
  
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  
  useEffect(() => {
    // Find the category data from the JSON based on the URL parameter
    const categoryData = jsonData.find(cat => cat.route.includes(category));
    
    // If no category is found, redirect to the main phrasebook page
    if (!categoryData) {
      navigate('/baybayin-tools/baybayin-phrasebook');
    } else {
      setSelectedCategory(categoryData);
    }
  }, [category, navigate]);

  // Swipe handlers using react-swipeable (should not be inside a conditional)
  const handlers = useSwipeable({
    onSwipedLeft: () => nextCard(),
    onSwipedRight: () => prevCard(),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true, // For mouse as well as touch
  });

  const phrases = selectedCategory ? selectedCategory.phrases : [];
  const totalPhrases = phrases.length;

  const nextCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalPhrases);
  };

  const prevCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalPhrases) % totalPhrases);
  };

  if (!selectedCategory) return null; // Wait until category is loaded

  return (
    <div className="phrase-list-container">
      <p className="selected-category-title">{selectedCategory.categoryTitle}</p>

      <div className="flashcard-navigation-wrapper" {...handlers}>
        {/* Hide arrows on smaller screens with media query */}
        <button onClick={prevCard} className="prev-btn hide-on-mobile">
          <ArrowBackIosNewIcon />
        </button>

        <div className="flashcard-container">
          <div className="phrase-item">
            <p className="latin-script">{phrases[currentIndex]?.phraseInLatinScript}</p>
            <p className="baybayin-script">{phrases[currentIndex]?.phraseInBaybayin}</p>
          </div>
        </div>

        <button onClick={nextCard} className="next-btn hide-on-mobile">
          <ArrowForwardIosIcon />
        </button>
      </div>

      <div className="dot-indicator">
        {phrases.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default PhraseList;
