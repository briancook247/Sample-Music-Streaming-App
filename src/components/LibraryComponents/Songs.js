import React, { useState } from 'react';
import './Songs.css'; // Import the CSS for the Songs component

function Songs() {
  const [songs, setSongs] = useState([
    {
      id: 1,
      title: 'Flawlëss (feat. Lil Uzi Vert)',
      artist: 'Yeat',
      image: '/yeat1.jpg', // Use the relative path to your album image
    },
    {
      id: 2,
      title: 'No morë talk',
      artist: 'Yeat',
      image: '/yeat2.jpg', // Use the relative path to your album image
    },
    // Add more songs as needed
  ]);

  return (
    <div className="songs">
      <h2>Songs</h2>
      <div className="songs-list">
        {songs.map((song) => (
          <div className="song" key={song.id}>
            <div className="album-image">
              <img src={song.image} alt={song.title} />
            </div>
            <div className="song-details">
              <span className="song-title">{song.title}</span>
              <span className="song-artist">{song.artist}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Songs;
