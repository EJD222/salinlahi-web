import React from 'react';
import LessonContentBlock from './LessonContentBlock';
import '../../../../styles/baybayinTools/baybayinGuide/Lessons/LessonContentTemplate.css'

const LessonContentTemplate = ({ lessonData, onDropdownInteraction }) => {
  return (
    <div className="lesson-container">
      <h1>{lessonData.title}</h1>
      {lessonData.contentBlocks.map((block, idx) => (
        <LessonContentBlock
          key={idx}
          block={block}
          onDropdownInteraction={onDropdownInteraction}
        />
      ))}
    </div>
  );
};

export default LessonContentTemplate;
