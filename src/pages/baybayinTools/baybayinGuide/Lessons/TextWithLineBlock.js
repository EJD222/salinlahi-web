import React from 'react';
import PropTypes from 'prop-types';

const TextWithLineBlock = ({ text, showLine = true }) => {
  return (
    <div style={{ marginBottom: '15px' }}>
      <div style={{
        fontFamily: "Inter",
        fontWeight: 700,
        fontSize: '18px',
        lineHeight: 1.2,
      }}>
        {text}
      </div>
      {showLine && (
        <div style={{
          marginTop: '5px',
          height: '1px',
          backgroundColor: '#A9A9A9', // Replace with AppColors.darkGrayColor if available
        }} />
      )}
    </div>
  );
};

TextWithLineBlock.propTypes = {
  text: PropTypes.string.isRequired,
  showLine: PropTypes.bool,
};

export default TextWithLineBlock;
