import './CustomButton.css';

export default function CustomButton({ text, color, onCustomClick }) {
  function handleClick() {
    onCustomClick(text);
  }
  return (
    <>
      <button className={color} onClick={handleClick}>
        {text}
      </button>
    </>
  );
}
