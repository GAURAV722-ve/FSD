import React, { useState, useEffect } from 'react';

const images = [
  'https://static.vecteezy.com/system/resources/thumbnails/083/933/835/small/beautiful-and-inspiring-picture-detailing-a-bright-hot-air-balloon-over-river-pure-cozy-perfect-for-creatives-moods-stock-image-free-photo.jpeg',
  'https://media.istockphoto.com/id/814423752/photo/eye-of-model-with-colorful-art-make-up-close-up.jpg?s=612x612&w=0&k=20&c=l15OdMWjgCKycMMShP8UK94ELVlEGvt7GmB_esHWPYE=',
  'https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXXhvcAMehMOgtrS4TAMkQ0VBId63cYx8chD1ffIODUrud1Q5jqvM8Orw&s=10'
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div style={{ textAlign: 'center', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ backgroundColor: 'black', color: 'white', padding: '10px' }}>
        Image Slider
      </h1>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '20px' }}>
        <button onClick={prevSlide} style={buttonStyle} aria-label="Previous slide">Prev</button>

        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          style={{
            width: '500px',
            height: '500px',
            objectFit: 'cover',
            borderRadius: '12px',
            boxShadow: '0 8px 20px rgba(0,0,0,0.2)'
          }}
        />

        <button onClick={nextSlide} style={buttonStyle} aria-label="Next slide">Next</button>
        </div>

      <div style={{ marginTop: '15px' }}>
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            style={{
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              border: 'none',
              backgroundColor: index === currentIndex ? 'black' : '#ccc',
              margin: '0 5px',
              cursor: 'pointer'
            }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

const buttonStyle = {
  padding: '10px 20px',
  backgroundColor: '#111',
  color: '#fff',
  border: 'none',
  borderRadius: '8px',
  cursor: 'pointer',
  fontSize: '16px'
};

export default ImageSlider;
