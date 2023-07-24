
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/login/1");
  };

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 750) {
        closeMenu();
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <header className="header">
        <nav>
          <div className={`hamburger ${isMenuOpen ? "open" : ""}`} onClick={handleMenuToggle}>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>

          <ul className={`menu ${isMenuOpen ? "open" : ""}`}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Displayuser/1">Shops & Services</Link>
            </li>
            
            <li>
              <Link to="/Contact/1">Contact</Link>
            </li>
            <li>
              <Link to="/CombinedPage/1">CombinedPage</Link>
            </li>
            {!localStorage.getItem("authToken") ? (
              <li>
                <Link to="/Login/1">Login</Link>
              </li>
            ) : (
              <li onClick={handleLogout} className="navbtn">
                <button className="logout">Logout</button>
              </li>
            )}
          </ul>

          <div className="search-container">
            <input type="text" placeholder="Search" />
            <img src="../img/search.png" className="search-icon" alt="Search" />
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
