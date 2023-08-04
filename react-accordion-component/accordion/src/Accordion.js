import './Accordion.css';
import { useState } from 'react';

export default function Accordion({ topics }) {
  const [shownText, setShownText] = useState(0);

  const handleClick = (e) => {
    if (Number(e.target.id) === shownText) {
      setShownText(0);
    } else {
      setShownText(Number(e.target.id));
    }
  };
  const topicList = topics.map((topic) => {
    let displayText = 'text hide';
    topic.displayText = displayText;
    if (shownText === topic.id) {
      topic.displayText = 'text';
    }
    return (
      <li key={topic.id}>
        <button id={topic.id} onClick={handleClick}>
          {topic.topic}
        </button>
        <p className={topic.displayText}>{topic.text}</p>
      </li>
    );
  });
  return (
    <>
      <ul>{topicList}</ul>
    </>
  );
}
