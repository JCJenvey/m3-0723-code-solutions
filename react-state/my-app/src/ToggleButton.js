import './ToggleButton.css';
import { useState } from 'react';

export default function ToggleButton({ text, color }) {
  const [isClicked, setIsClicked] = useState(false);
  console.log('useState', isClicked);

  const handleClick = () => {
    console.log('before setter', isClicked);
    setIsClicked(isClicked ? false : true);
    console.log('after setter', isClicked);
  };

  if (isClicked === false) {
    color = null;
  }

  return (
    <>
      <button className={color} onClick={handleClick}>
        {text}
      </button>
    </>
  );
}
