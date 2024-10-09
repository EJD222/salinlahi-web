import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import '../../../styles/baybayinTools/baybayinGuide/LessonList.css';
import { mapToBaybayinCustomFont } from '../../../assets/utils/MapToBaybayinCustomFont';

function LessonList() {
  const location = useLocation();
  const { categoryTitle, categoryTitleBaybayin, image2, lessons } = location.state;

  return (
    <div className="lesson-list-container">
      <div className="lesson-header">
        <div className="lesson-text">
            <h2 className="category-text-2">{categoryTitle}</h2>
            <p className="baybayin-text-2">{mapToBaybayinCustomFont(categoryTitleBaybayin)}</p>
        </div>
        <img src={require(`../../../assets/icons/baybayin_guide_icons/${image2}`)} alt={categoryTitle} />
      </div>
      <h4 className="mga-aralin">Mga Aralin</h4>
      <div className="lesson-list">
        {lessons.map((lesson) => (
          <div key={lesson.lessonNumber} className="lesson-item">
            <div className="lesson-number">
              {lesson.lessonNumber}
            </div>
            <div className="lesson-title">
              <Link to={lesson.route}>{lesson.lessonTitle}</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LessonList;
