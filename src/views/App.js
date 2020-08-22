import React from 'react';

import Home from './pages/home/Home';
import Navbar from './components/navbar/Navbar';

const App = () => {
  return (
    <div className="container">
      <Navbar />
      <Home />
    </div>
  );
};

export default App;
