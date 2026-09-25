import React from 'react';
import ImageSlider from './ImageSlider';
import ImageRotation from './ImageRotation';
import Count from './Count';

const App = () => {
  return (
    <div>
      <Count />
      <ImageSlider />
      <ImageRotation />
    </div>
  );
};

export default App;