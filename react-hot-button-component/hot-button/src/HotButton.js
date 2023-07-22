import './HotButton.css';
import { useState } from 'react';

export default function HotButton() {
  let heat = 'cold';
  let [numClicks, setNumClicks] = useState(0);

  const handleCLick = () => {
    setNumClicks(numClicks + 1);
  };

  if (numClicks >= 15) {
    heat = 'superhot';
  } else if (numClicks >= 12) {
    heat = 'hot';
  } else if (numClicks >= 9) {
    heat = 'warm';
  } else if (numClicks >= 6) {
    heat = 'lukewarm';
  } else if (numClicks >= 3) {
    heat = 'cool';
  }

  return (
    <>
      <button className={heat} onClick={handleCLick}>
        Hot Button
      </button>
      <p>Clicks: {numClicks}</p>
    </>
  );
}
