import React from "react"
import { useLocation, Link } from "react-router-dom"
import "../../../styles/baybayinTools/baybayinGuide/LessonList.css"
import { mapToBaybayinCustomFont } from "../../../utils/MapToBaybayinCustomFont"

function LessonList() {
  const location = useLocation()
  const { categoryTitle, categoryTitleBaybayin, image2, lessons } =
    location.state
  const imagePath = `/assets/icons/baybayin_guide_icons/${image2}`

  return (
    <div className="lesson-list-container">
      <div className="lesson-header">
        <div className="lesson-text">
          <h2 className="category-text-2">{categoryTitle}</h2>
          <p className="baybayin-text-2">
            {mapToBaybayinCustomFont(categoryTitleBaybayin)}
          </p>
        </div>
        <img src={imagePath} alt={categoryTitle} />
      </div>
      <h4 className="mga-aralin">Mga Aralin</h4>
      <div className="lesson-list">
        {lessons.map((lesson) => (
          <Link
            to={lesson.route}
            key={lesson.lessonNumber}
            className="lesson-item-link"
          >
            <div className="lesson-item">
              <div className="lesson-number">{lesson.lessonNumber}</div>
              <div className="lesson-title">{lesson.lessonTitle}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default LessonList