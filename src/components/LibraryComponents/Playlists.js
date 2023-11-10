import React, { useState } from 'react';
import './Playlists.css'; // Import the CSS for the Playlist component

function Playlists() {
  const [playlists, setPlaylists] = useState([
    {
      id: 1,
      name: 'Up 2 me',
      image: '/yeat1.jpg', // Use the relative path to your playlist image
    },
    {
      id: 2,
      name: 'Playlist B',
      image: '/yeat2.jpg', // Use the relative path to your playlist image
    },
    // Add more playlists as needed
  ]);

  return (
    <div className="playlists">
      <h2>Playlists</h2>
      <div className="playlists-list">
        {playlists.map((playlist) => (
          <div className="playlist" key={playlist.id}>
            <div className="playlist-image">
              <img src={playlist.image} alt={playlist.name} />
            </div>
            <span className="playlist-name">{playlist.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Playlists;
