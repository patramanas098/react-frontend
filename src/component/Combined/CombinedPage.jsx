import React, { useState } from 'react';
import axios from 'axios';
import Map from '../Location/Map';
import './Combinedpage.css'; 
import {BASE_URL} from "./Helper.jsx";


function CombinedPage() {
  const [credentials, setCredentials] = useState({ name: '', email: '', image: null, location: null });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('image', credentials.image);
    formData.append('name', credentials.name);
    formData.append('email', credentials.email);
    formData.append('location', JSON.stringify(credentials.location));

    try {
      const response = await axios.post(`${BASE_URL}/register`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      const json = await response.data;
      console.log(json);
      alert(json.message);

      if (!json.success) {
        alert('Error registering user');
      }

      setCredentials({ name: '', email: '', image: null, location: null });
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Error submitting form');
    }
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setCredentials({ ...credentials, image: file });
  };

  const handleSaveLocation = (location) => {
    setCredentials({ ...credentials, location });
  };

  return (
    <div className="container">
     
      <form onSubmit={handleSubmit}>
      <h2>User Registration</h2>
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" value={credentials.name} onChange={(e) => setCredentials({ ...credentials, name: e.target.value })} required />

        <br />

        <label htmlFor="email">Email:</label>
        <input type="email" name="email" value={credentials.email} onChange={(e) => setCredentials({ ...credentials, email: e.target.value })} required />

        <br />

        <label htmlFor="image">Profile Image:</label>
        <input type="file" name="image" accept="image/*" onChange={handleImageChange} required />

        <br />

        <Map onSave={handleSaveLocation} className="map"/>

        <br />

    
      </form>
    </div>
  );
}

export default CombinedPage;
