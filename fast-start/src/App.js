import React from 'react';
import './App.css';
import HomePage from './HomePage.js';
import CountryPage from './CountryPage.js';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />}>
            <Route path="/country" element={<CountryPage />}>
              {/* <Route path=":countryId" element={<Country />} /> */}
            </Route>
          </Route>
        </Routes>            
      </div>
    </Router>
  );
}

export default App;
