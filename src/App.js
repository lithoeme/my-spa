import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import BlogHome from './pages/blog/BlogHome';
import BlogPost from './pages/blog/BlogPost';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/blog" element={<BlogHome />} />
                <Route path="/blog/:postId" element={<BlogPost />} /> {/* Dynamic route for individual blog posts */}
            </Routes>
        </Router>
    );
}

export default App;
