import React from 'react';
import"./Photochild.css"

const Photochild = () => {
  const profiles = [
    {
      name: 'John Doe',
      age: 25,
      description: 'I love hiking and photography.',
      image: 'https://example.com/john-doe.jpg',
    },
    {
      name: 'Jane Smith',
      age: 30,
      description: 'Passionate about cooking and traveling.',
      image: 'https://example.com/jane-smith.jpg',
    },
    {
      name: 'Jane Smith',
      age: 30,
      description: 'Passionate about cooking and traveling.',
      image: 'https://example.com/jane-smith.jpg',
    }, {
      name: 'Jane Smith',
      age: 30,
      description: 'Passionate about cooking and traveling.',
      image: 'https://example.com/jane-smith.jpg',
    }, {
      name: 'Jane Smith',
      age: 30,
      description: 'Passionate about cooking and traveling.',
      image: 'https://example.com/jane-smith.jpg',
    },
    // Add more profiles as needed
  ];

  return (
    <div className="shop-profiles">
      <h1>Shop Profiles</h1>
      <div className="profile-cards">
        {profiles.map((profile, index) => (
          <div key={index} className="profile-card">
            <img src={profile.image} alt={profile.name} className="profile-image" />
            <div className="profile-info">
              <h2>{profile.name}</h2>
              <p>Age: {profile.age}</p>
              <p className="profile-description">{profile.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Photochild;
