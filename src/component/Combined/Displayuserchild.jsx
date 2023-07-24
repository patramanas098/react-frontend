import React from 'react';
import '../Photo/Photochild.css';
import locate from '../img/locate.png';
import contact from '../img/contact.png';

function Display(props) {
  const handleButtonClick = () => {
//   const latitude = 21.63986635879534 ; // Replace with your shop's latitude
 //   const longitude = 84.04608965882504 ; // Replace with your shop's longitude

    const url = `https://www.google.com/maps/dir/?api=1&destination=${props.blatitude},${props.blongitude}`;
    window.open(url, '_blank');
  };
  return (
    <div className="shop-profiles">
      <div className="profile-cards">
        <div className="profile-card">
          <img src={props.imgSrc} alt={props.name} className="profile-image" />
          <div className="profile-info">
            <h2>{props.bname}</h2>
            <p>Describe yourself in a short sentence.</p>
            <div className="contact-container">
              <img src={contact} alt="" className="contact-icon" />
              <p>9668202399</p>
            </div>
            <div className="locate-container">
              <img src={locate} alt="" onClick={handleButtonClick} className="locate-icon" />
              <p>Near NICET</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Display;
