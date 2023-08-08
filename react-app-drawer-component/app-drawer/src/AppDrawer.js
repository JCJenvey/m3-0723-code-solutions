import './AppDrawer.css';
import { SlMenu } from 'react-icons/sl';
import { useState } from 'react';

export default function AppDrawer({ menu, items }) {
  const [menuOpen, setMenuOpen] = useState(false);
  let backgroundClass = 'background hide';
  let drawerClass = 'drawer closed';

  const handleClick = () => setMenuOpen(!menuOpen);

  const listItems = items.map((menuItem) => (
    <li key={menuItem.id}>
      <button className="menuItem" onClick={handleClick}>
        {menuItem.item}
      </button>
    </li>
  ));

  if (menuOpen) {
    backgroundClass = 'background';
    drawerClass = 'drawer open';
  } else {
    backgroundClass = 'background hide';
    drawerClass = 'drawer closed';
  }

  return (
    <>
      <button className="menuButton" onClick={handleClick}>
        <SlMenu />
      </button>
      <div className={backgroundClass} onClick={handleClick}></div>
      <div className={drawerClass}>
        <h3>{menu}</h3>
        <ul className="menu">{listItems}</ul>
      </div>
    </>
  );
}
