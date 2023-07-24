
import React, { useState, useEffect } from 'react';
import "./Map.css";

function Map({ onSave }) {
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);

  useEffect(() => {
    window.initMap = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;

            setLatitude(latitude);
            setLongitude(longitude);

            const map = new window.google.maps.Map(document.getElementById('map'), {
              center: { lat: latitude, lng: longitude },
              zoom: 8,
            });

            map.addListener('click', (event) => {
              const { latLng } = event;
              const lat = latLng.lat();
              const lng = latLng.lng();
              setLatitude(lat);
              setLongitude(lng);
            });
          },
          (error) => {
            console.log('Error retrieving user location:', error);
          }
        );
      } else {
        console.log('Geolocation is not supported by this browser.');
      }
    };

    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyA-q1i4pRJJbYMMFR6lO3Lo24z3t4zIVjE&libraries=places&callback=initMap`;
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const handleSaveClick = () => {
    onSave({ latitude, longitude });
  };

  return (
    <div>
      <h2>Map</h2>
      <p>Latitude: {latitude}</p>
      <p>Longitude: {longitude}</p>
      <div id="map" className='man' style={{ width: '400px', height: '300px' }}></div>
      <button onClick={handleSaveClick}>Register</button>
    </div>
  );
}

export default Map;

