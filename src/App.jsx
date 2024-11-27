import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Biography from './components/Biography';
import ResearchInterests from './components/ResearchInterests';
import ResearchProjects from './components/ResearchProjects';
import Publications from './components/Publications';
import Books from './components/Books';
import News from './components/News';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={
              <>
                <Biography />
                <ResearchInterests />
              </>
            } />
            <Route path="/research" element={<ResearchProjects />} />
            <Route path="/publications" element={<Publications />} />
            <Route path="/teaching" element={<Books />} />
            <Route path="/news" element={<News />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;