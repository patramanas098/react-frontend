import React, { useEffect, useState } from "react";
import "./Displayuser.css";
import {BASE_URL} from "./Helper.jsx"
import Display from "./Displayuserchild.jsx";


export default function ShopServices() {
  const [register, setRegister] = useState([]);
  

  const loadData = async () => {
    try {
      const response = await fetch(`${BASE_URL}/userlist`, {
        method: "POST",
        header: {
          'Content-Type': 'application/json'
        }
      });

      const data = await response.json();
      setRegister(data[0]);
    
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className="Displayuser">
      {register.length > 0 ? (
        register.map((food) => (
          <div key={food.id}>
            <Display className="Displayusercontainer"
              bname={food.name}
              bemail={food.email}
              imgSrc= {`data:${food.image.mimetype};base64,${food.image.data}`}
              blatitude={food.location.latitude}
              blongitude={food.location.longitude}
             
            />
          
            
          </div>
        ))
      ) : (
        <div>No food items available</div>
      )}
    </div>
  );
}
