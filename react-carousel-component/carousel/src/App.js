import './App.css';
import Carousel from './Carousel';

const images = [
  '/images/U.png',
  '/images/B.png',
  '/images/R.png',
  '/images/G.png',
  '/images/W.png',
];

function App() {
  return (
    <div className="container">
      <Carousel images={images} />
    </div>
  );
}

export default App;
