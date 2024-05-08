import React from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import HomePage from './Pages/HomePage';
import About from './Pages/About';
import ProjectsPage from './Pages/Projects';
import {Helmet} from "react-helmet";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/projects" element={<ProjectsPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
