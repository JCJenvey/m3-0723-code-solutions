import React from 'react';
import { useState } from 'react';

/**
 * A container of items.
 * One item is displayed at a time, with buttons to flip through them:
 * - Next and Prev scroll forward and backward one item
 * - An array of buttons scroll to a specific item
 * TODO: The buttons don't work!
 */
export default function Container({ items }) {
  let [activeItem, setActiveItem] = useState(0);
  const handleSelect = (e) => setActiveItem(Number(e.target.textContent));
  const handleIncrement = () => setActiveItem((activeItem + 1) % items.length);
  const handleDecrement = () =>
    setActiveItem((activeItem - 1 + items.length) % items.length);
  return (
    <div>
      <div>{items[activeItem]}</div>
      <div>
        <CustomButton text="Prev" onClick={handleDecrement} color="white" />
        <Indicators
          count={items.length}
          onSelect={handleSelect}
          selectedItem={activeItem}
        />
        <CustomButton text="Next" onClick={handleIncrement} color="white" />
      </div>
    </div>
  );
}

/**
 * A component that wraps a DOM button.
 * Props:
 *   text: The button's text
 *
 * TODO: Make the background color a prop, default white.
 * TODO: When clicked, the parent needs to be notified.
 */
function CustomButton({ text, onClick, color }) {
  return (
    <button onClick={onClick} style={{ backgroundColor: color }}>
      {text}
    </button>
  );
}

/**
 * An array of indicators (buttons).
 * Props:
 *   count: The number of indicators to display
 *
 * TODO: When an indicator is selected, the active item in the Container
 *       should switch to the index of the selected indicator.
 *       To avoid confusion, use `onSelect` for the event prop name.
 * TODO: Highlight the active indicator lightblue.
 */
function Indicators({ count, onSelect, selectedItem }) {
  const buttons = [];
  for (let i = 0; i < count; i++) {
    let color = 'white';
    if (selectedItem === i) color = 'lightblue';
    buttons.push(
      <CustomButton key={i} text={i} onClick={onSelect} color={color} />
    );
  }
  return <div>{buttons}</div>;
}
