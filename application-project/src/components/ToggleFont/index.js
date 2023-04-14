import { useState } from 'react';

function ToggleFont({ onChange }) {
  const [isLargeFont, setIsLargeFont] = useState(false);

  const toggleFontSize = () => {
    setIsLargeFont(!isLargeFont);
    onChange && onChange(!isLargeFont);
  };

  return (
    <button className='fontSizeButton' onClick={toggleFontSize}>
      {isLargeFont ? 'Small' : 'Large'} Font
    </button>
  );
}

export default ToggleFont;
