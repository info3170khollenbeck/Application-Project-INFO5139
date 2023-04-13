import React, { useState } from 'react';
import './styles.scss';

const ToggleFont = ({ children, isLargeFont, setIsLargeFont }) => {
  const toggleFont = () => {
    setIsLargeFont(!isLargeFont);
  };

  return (
    <div className={isLargeFont ? 'large-font' : ''}>
      <button onClick={toggleFont}>Toggle Font Size</button>
      {children}
    </div>
  );
};

export default ToggleFont;
