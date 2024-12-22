// src/pages/blog/BlogPost.js
import React from 'react';
import { Link } from 'react-router-dom';

function BlogPost() {
    return (
        <div>
            <h1>Blog Post Title</h1>
            <p>This is the content of a blog post.</p>
            <nav>
                <Link to="/">Home</Link> | <Link to="/blog">Blog Home</Link> | <Link to="/about">About Us</Link>
            </nav>
        </div>
    );
}

export default BlogPost;
