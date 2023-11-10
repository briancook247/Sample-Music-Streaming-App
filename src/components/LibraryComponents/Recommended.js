import React, { useState } from 'react';
import './Recommended.css'; // Import the CSS for the Recommended component

function Recommended() {
  const [recommended, setRecommended] = useState([
    {
      id: 1,
      title: 'Recommended 1',
      image: '/path-to-recommended-image-1.jpg', // Use the relative path to your recommended image
    },
    {
      id: 2,
      title: 'Recommended 2',
      image: '/path-to-recommended-image-2.jpg', // Use the relative path to your recommended image
    },
    // Add more recommended items as needed
  ]);

  return (
    <div className="recommended">
      <h2>Recommended</h2>
      <div className="recommended-list">
        {recommended.map((item) => (
          <div className="recommended-item" key={item.id}>
            <div className="recommended-image">
              <img src={item.image} alt={item.title} />
            </div>
            <span className="recommended-title">{item.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Recommended;
