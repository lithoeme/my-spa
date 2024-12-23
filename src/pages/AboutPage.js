
// src/pages/AboutPage.js
import React from 'react';
import { Link } from 'react-router-dom';

function AboutPage() {
    return (
        <div>
            <h1>About Us</h1>
            <p>Passionate about building an awesome browser blockchain technology.</p>
            <nav>
                <Link to="/">Home</Link> | <Link to="/blog">Blog</Link>
            </nav>
        </div>
    );
}

export default AboutPage;
