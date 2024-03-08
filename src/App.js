import React from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import HomePage from './Pages/HomePage';
import About from './Pages/About';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>} />
      </Routes>
    </Router>
  );
}

export default App;
