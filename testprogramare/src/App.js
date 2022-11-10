import React from 'react';
import './App.css'
import Home from './page/Home';
import Navbar from './Navbar';
import { Route , Routes } from 'react-router-dom';
function App() {
  return (
    <div className='nav-bar'>
     <Navbar />
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/' element={<Home />} />
          <Route path='/' element={<Home />} />
          <Route path='/' element={<Home />} />
          <Route path='/' element={<Home />} />
          <Route path='/' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
