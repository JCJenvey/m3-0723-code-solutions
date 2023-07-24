import './Switch.css';
import { useState } from 'react';

export default function Switch({ onChangeBackground }) {
  const [isClicked, setIsClicked] = useState(false);
  const state = isClicked ? 'ON' : 'OFF';

  const handleClick = () => {
    setIsClicked(!isClicked);
    onChangeBackground();
  };

  return (
    <div>
      <input type="checkbox" id="switch" />
      <label for="switch" className="switchlabel" onClick={handleClick}></label>
      <span className="gap">{state}</span>
    </div>
  );
}
