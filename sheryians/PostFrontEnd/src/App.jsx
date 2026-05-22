import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import CreatePost from './pages/CreatePost';
import ViewPost from './pages/ViewPost';
import './App.css';

// A simple navigation component
const Navigation = () => {
  const location = useLocation();
  
  return (
    <nav className="navbar">
      <Link 
        to="/create-post" 
        className={`nav-link ${location.pathname === '/create-post' ? 'active' : ''}`}
      >
        Create Post
      </Link>
      <Link 
        to="/view-post" 
        className={`nav-link ${location.pathname === '/view-post' ? 'active' : ''}`}
      >
        View Post
      </Link>
    </nav>
  );
};

const App = () => {
  return (
    <div className='app-container'>
      <Router>
        <Navigation />
        <main className="main-content">
          <Routes>
            <Route path='/create-post' element={<CreatePost />} />
            <Route path="/view-post" element={<ViewPost />} />
            {/* Redirect root to create-post for convenience */}
            <Route path="/" element={<CreatePost />} />
          </Routes>
        </main>
      </Router>
    </div>
  )
}

export default App