import React, { useState } from 'react';
import './Artists.css'; // Import the CSS for the Artists component

function Artists() {
  const [artists, setArtists] = useState([
    {
      id: 1,
      name: 'Drake',
      image: '/Drake.jpg', // Replace with your artist image path
    },
    {
      id: 2,
      name: 'Yeat',
      image: 'yeat.jpg', // Replace with your artist image path
    },
    {
      id: 3,
      name: 'Tame Impalla',
      image: 'Tameimpalla.jpg', // Replace with your artist image path
    },
    {
      id: 4,
      name: 'Playboi Carti',
      image: 'carti.jpg', // Replace with your artist image path
    },
    {
      id: 5,
      name: 'Radio Head',
      image: 'radiohead.jpg', // Replace with your artist image path
    },
    {
      id: 6,
      name: 'Grimzlee',
      image: 'Grimz.jpg', // Replace with your artist image path
    },
    {
      id: 7,
      name: 'Foo Fighters',
      image: 'foof.jpg', // Replace with your artist image path
    },
  ]);

  return (
    <div className="artists">
      <h2>Artists</h2>
      <div className="artists-list">
        {artists.map((artist) => (
          <div className="artist" key={artist.id}>
            <div className="artist-image">
              <img src={artist.image} alt={artist.name} />
            </div>
            <span className="artist-name">{artist.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Artists;
