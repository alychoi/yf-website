import React from 'react';
import './App.css';
import Home from './Home/home.js';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import "@fontsource/gothic-a1"; // Defaults to weight 400
import "@fontsource/gothic-a1/700.css"; // Specify weight

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
