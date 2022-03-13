import React from 'react';
import './App.css';
import HomePage from './HomePage.js';
import CountryPage from './CountryPage.js';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path=":country" element={<CountryPage />} />
      </Routes>            
    </Router>
  );
}

export default App;
