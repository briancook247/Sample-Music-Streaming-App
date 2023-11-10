import React from 'react';
import Songs from './LibraryComponents/Songs'; // Corrected import paths
import Playlists from './LibraryComponents/Playlists'; // Corrected import paths
import Artists from './LibraryComponents/Artists'; // Corrected import paths
import Recommended from './LibraryComponents/Recommended'; // Corrected import paths
import Genres from './LibraryComponents/Genres'; // Corrected import paths
import './Library.css'; // Import the CSS file


function Library() {
  return (
    <div className="library-container">
      <h1>Your Library</h1>
      <Songs />
      <Playlists />
      <Artists />
      <Recommended />
      <Genres />
    </div>
  );
}

export default Library;
