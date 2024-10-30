import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import "../../../styles/baybayinTools/baybayinGuide/BaybayinGuide.css"
import { mapToBaybayinCustomFont } from "../../../utils/MapToBaybayinCustomFont"
import categoriesData from "../../../json/BaybayinGuide.json"

function BaybayinGuide() {
  const [categories] = useState(categoriesData)
  const navigate = useNavigate()

  const handleCategoryClick = (category) => {
    navigate(`/baybayin-tools/baybayin-guide/${category.categoryNumber}`, {
      state: { ...category },
    })
  }

  return (
    <div className="baybayin-guide-container">
      <div className="text-details">
        <p>
          Anong gusto mong <b>matutunan ngayon?</b>
        </p>
        <h4>Mga Kategorya</h4>
      </div>
      <div className="categories-grid">
        {categories.map((category) => {
          const imagePath = `/assets/icons/baybayin_guide_icons/${category.image}`

          return (
            <div
              key={category.categoryNumber}
              className="category-card"
              onClick={() => handleCategoryClick(category)}
            >
              <div className="category-card-link">
                <div className="category-card-text">
                  <p className="baybayin-text">
                    {mapToBaybayinCustomFont(category.categoryTitleBaybayin)}
                  </p>
                  <p className="category-text">{category.categoryTitle}</p>
                </div>
                <div className="category-image">
                  <img src={imagePath} alt={category.categoryTitle} />
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default BaybayinGuide