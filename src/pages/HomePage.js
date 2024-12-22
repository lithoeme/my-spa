// src/pages/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
    return (
        <div>
            <h1>Welcome to the Home Page</h1>
            <p>This is where your journey begins!</p>
            <nav>
                <Link to="/about">About Us</Link> | <Link to="/blog">Blog</Link> | <Link to="/blockchain">Blockchain</Link>
            </nav>
        </div>
    );
}

export default HomePage;