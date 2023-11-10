import React from 'react';

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li><a href="/">Library</a></li>
          <li><a href="/search">Search</a></li>
          <li><a href="/profile">Profile</a></li>
          <li><a href="/discover">Discover</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
