/*
import React, { useState, useEffect } from 'react';
import { BASE_URL } from "../Combined/Helper.jsx";
import "./Location.css"

import Map from './Map';

function Location() {
  const [locations, setLocations] = useState([]);


  useEffect(() => {
    fetch('http://localhost:10000/api/locations')
      .then((response) => response.json())
      .then((data) => setLocations(data))
      .catch((error) => console.log('Error:', error));
  }, []);

  const handleSaveLocation = (location) => {
    fetch(`${BASE_URL}/locations`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(location),
    })
      .then((response) => response.json())
      .then((data) => {
        setLocations([...locations, data]);
        alert("Successfully Saveed Location ");
      })
      .catch((error) => console.log('Error:', error));
  };


  return (
    <div>
      
      
          <Map onSave={handleSaveLocation} />
       
      
    </div>
  );
}

export default Location;

*/