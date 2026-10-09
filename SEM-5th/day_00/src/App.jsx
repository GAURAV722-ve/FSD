import React from 'react';
import ChildComponent from './ChildComponent';

const App = () => {
  const user = {
    name: 'Gaurav Singh',
    age: 21,
    email: 'Gaurav@gmail.com',
  };

  return (
    <div>
      <ChildComponent user={user} />
    </div>
  );
};

export default App;