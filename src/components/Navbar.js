import React from 'react';
import './Navbar.css'; // Import the CSS for the Navbar component

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="/test1.png" alt="Your Logo" />
      </div>
      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/library">Library</a></li>
        <li><a href="/discover">Discover</a></li>
        <li><a href="/profile">Profile</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
