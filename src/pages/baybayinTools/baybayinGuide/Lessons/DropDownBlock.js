import React, { useState } from 'react';
import LessonContentBlock from './LessonContentBlock';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const DropdownBlock = ({ title, content, onDropdownInteraction }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
    onDropdownInteraction && onDropdownInteraction(title);
  };

  return (
    <div onClick={handleToggle} style={{ borderBottom: '1px solid #ccc', cursor: 'pointer' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <h4 style={{ margin: 0 }}>{title}</h4>
        <ArrowDropDownIcon
          style={{
            color: '#000000', // Black color for the icon
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 0.2s ease',
          }}
        />
      </div>
      {isOpen && (
        <div style={{ paddingTop: '10px' }}>
          {content.map((block, idx) => (
            <LessonContentBlock key={idx} block={block} />
          ))}
        </div>
      )}
    </div>
  );
};

export default DropdownBlock;
