import { FaChevronLeft } from 'react-icons/fa';
import { FaChevronRight } from 'react-icons/fa';
import { FaCircle } from 'react-icons/fa';
import { FaRegCircle } from 'react-icons/fa';
import './Carousel.css';
import { useState } from 'react';
import { useEffect } from 'react';

export default function Carousel({ images }) {
  const [currentImage, setCurrentImage] = useState(0);
  useEffect(() => {
    let imgViewID = setInterval(
      imgIntervalCallback,
      3000,
      images.length,
      currentImage,
      setCurrentImage
    );
    return () => clearInterval(imgViewID);
  }, [setCurrentImage, currentImage, images.length]);

  const handleSelect = (e) => setCurrentImage(Number(e.target.id));
  const handleIncrement = () =>
    setCurrentImage((currentImage + 1) % images.length);
  const handleDecrement = () =>
    setCurrentImage((currentImage - 1 + images.length) % images.length);

  return (
    <>
      <FaChevronLeft className="arrow" onClick={handleDecrement} />
      <div className="carousel">
        <Image images={images} currentImage={currentImage} />
        <Circles
          numImages={images.length}
          currentImage={currentImage}
          onSelect={handleSelect}
        />
      </div>
      <FaChevronRight className="arrow" onClick={handleIncrement} />
    </>
  );
}

function Image({ images, currentImage }) {
  const carouselImages = [];
  for (let i = 0; i < images.length; i++) {
    if (currentImage === i) {
      carouselImages.push(<img src={images[i]} alt="Carousel Item" key={i} />);
    } else {
      carouselImages.push(
        <img src={images[i]} alt="Carousel Item" className="hidden" key={i} />
      );
    }
  }
  return <>{carouselImages}</>;
}

function Circles({ numImages, currentImage, onSelect }) {
  const carouselCircles = [];
  for (let i = 0; i < numImages; i++) {
    if (currentImage === i) {
      carouselCircles.push(
        <FaCircle className="dot" key={i} id={i} onClick={onSelect} />
      );
    } else {
      carouselCircles.push(
        <FaRegCircle className="dot" key={i} id={i} onClick={onSelect} />
      );
    }
  }
  return <div className="progress-dot">{carouselCircles}</div>;
}

function imgIntervalCallback(numImages, currentImage, setCurrentImage) {
  setCurrentImage((currentImage + 1) % numImages);
}
