import React from "react";
import "./Home.css";

export default function Home() {
  return (
    <div className="main">
      <div className="boxcontainer">
        <div className="homebox box-1">
          <img src="/img/medicine_store.png" className="medicinestore" alt="" />
          <p>Medicine stores</p>
        </div>
        <div className="homebox box-2">
          <img src="/img/SHOE.png" alt="" className="shoe" />
          <p>Shoe Shops</p>
        </div>
        <div className="homebox box-3">
          <img src="/img/HOTEL.png" alt="" className="hotel" />
          <p>Hotels and restaurants</p>
        </div>
        <div className="homebox box-4">
          <img src="/img/bettel.png" alt="" className="bettel" />
          <p>Bettel shops</p>
        </div>
        <div className="homebox box-5">
          <img src="/img/mobile.png" alt="" className="mobile" />
          <p>Mobile shops</p>
        </div>
        <div className="homebox box-6">
          <img src="/img/courior.png" alt="" className="courior" />
          <p>Courier</p>
        </div>
      </div>
    </div>
  );
}
