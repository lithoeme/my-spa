
// src/pages/AboutPage.js
import React from 'react';
import { Link } from 'react-router-dom';

function AboutPage() {
    return (
        <div>
            <h1>About Us</h1>
            <p>We are passionate about building awesome React applications.</p>
            <nav>
                <Link to="/">Home</Link> | <Link to="/blog">Blog</Link>
            </nav>
        </div>
    );
}

export default AboutPage;
