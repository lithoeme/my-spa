
// src/pages/blockchain/BlockchainHomePage.js
import React from 'react';
import { Link } from 'react-router-dom';

function BlockchainHomePage() {
    return (
        <div>
            <h1>About Us</h1>
            <p>Passionate about building an awesome browser blockchain technology.</p>
            <nav>
                <Link to="/">Home</Link>
            </nav>
        </div>
    );
}

export default BlockchainHomePage;