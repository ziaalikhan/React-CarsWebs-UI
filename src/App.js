import React from 'react';
import './App.css';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';


const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Home />
    </div>
  )
}

export default App;
