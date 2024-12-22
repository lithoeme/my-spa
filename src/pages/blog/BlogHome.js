
// src/pages/blog/BlogHome.js
import React from 'react';
import { Link } from 'react-router-dom';

function BlogHome() {
    return (
        <div>
            <h1>Welcome to the Blog</h1>
            <p>Explore our latest articles and updates.</p>
            <p></p>
            <nav>
                <Link to="/">Home</Link> | <Link to="/about">About Us</Link>
            </nav>
        </div>
    );
}

export default BlogHome;
