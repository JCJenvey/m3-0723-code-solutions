import './App.css';
import AppDrawer from './AppDrawer';

const menuItems = [
  { id: 1, item: 'About' },
  { id: 2, item: 'Get Started' },
  { id: 3, item: 'Sign In' },
];

function App() {
  return (
    <div>
      <AppDrawer menu="Menu" items={menuItems} />
    </div>
  );
}

export default App;
