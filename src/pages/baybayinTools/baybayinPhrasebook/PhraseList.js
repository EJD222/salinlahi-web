import React, { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { useSwipeable } from "react-swipeable"
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew"
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos"
import jsonData from "../../../json/BaybayinPhrasebook.json"
import "../../../styles/baybayinTools/baybayinPhrasebook/PhraseList.css"

function PhraseList() {
  const { category } = useParams()
  const navigate = useNavigate()

  const [selectedCategory, setSelectedCategory] = useState(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {

    const categoryData = jsonData.find((cat) => cat.route.includes(category))

    if (!categoryData) {
      navigate("/baybayin-tools/baybayin-phrasebook")
    } else {
      setSelectedCategory(categoryData)
    }
  }, [category, navigate])

  const handlers = useSwipeable({
    onSwipedLeft: () => nextCard(),
    onSwipedRight: () => prevCard(),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  })

  const phrases = selectedCategory ? selectedCategory.phrases : []
  const totalPhrases = phrases.length

  const nextCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalPhrases)
  }

  const prevCard = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + totalPhrases) % totalPhrases,
    )
  }

  if (!selectedCategory) return null

  return (
    <div className="phrase-list-container">
      <p className="selected-category-title">
        {selectedCategory.categoryTitle}
      </p>

      <div className="flashcard-navigation-wrapper" {...handlers}>
        
        <button onClick={prevCard} className="prev-btn hide-on-mobile">
          <ArrowBackIosNewIcon />
        </button>

        <div className="flashcard-container">
          <div className="phrase-item">
            <p className="latin-script">
              {phrases[currentIndex]?.phraseInLatinScript}
            </p>
            <p className="baybayin-script">
              {phrases[currentIndex]?.phraseInBaybayin}
            </p>
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
            className={`dot ${index === currentIndex ? "active" : ""}`}
          ></span>
        ))}
      </div>
    </div>
  )
}

export default PhraseList