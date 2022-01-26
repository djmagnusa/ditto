import React, {useState} from 'react';
import About from './components/About';


const App = () => {
 
  return (
    <div className="app">
      <h1>Tell us about you</h1>
      <p>We need to know few details to get you started on your customized plan</p>
      <About />
    </div>
  )
};

export default App;
