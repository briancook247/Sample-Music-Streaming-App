import React, { useState } from 'react';
import './Genres.css'; // Import the CSS for the Genres component

function Genres() {
  const [genres, setGenres] = useState([
    {
      id: 1,
      name: 'Hip-Hop',
      image: '/hiphop.png', // Use the relative path to your genre image
    },
    {
      id: 2,
      name: 'RnB',
      image: '/rnb.png', // Use the relative path to your genre image
    },
    {
      id: 3,
      name: 'EDM',
      image: '/edm.png', // Use the relative path to your genre image
    },
    {
      id: 4,
      name: 'Country',
      image: '/country.png', // Use the relative path to your genre image
    },
    {
      id: 5,
      name: 'Holidays',
      image: '/Holidays.png', // Use the relative path to your genre image
    },
    {
      id: 6,
      name: 'Party',
      image: '/party.png', // Use the relative path to your genre image
    },
    {
      id: 7,
      name: 'Classical',
      image: '/Classical.png', // Use the relative path to your genre image
    },
    {
      id: 8,
      name: 'Indie Alternative',
      image: '/Indie.png', // Use the relative path to your genre image
    },
    // Add more genres as needed
  ]);

  return (
    <div className="genres">
      <h2>Genres</h2>
      <div className="genres-list">
        {genres.map((genre) => (
          <div className="genre" key={genre.id}>
            <div className="genre-image">
              <img src={genre.image} alt={genre.name} />
            </div>
            <span className="genre-name">{genre.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Genres;
