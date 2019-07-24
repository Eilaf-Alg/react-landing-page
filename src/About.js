import React from 'react';
import NavBar from './NavBar';

const About = () => {
    return (
        <div className="About">
            <NavBar />
            <div className="container">
                <h1>The About Page</h1>
                <p>We are the ABC company...</p>
            </div>
        </div>
    )
}

export default About;