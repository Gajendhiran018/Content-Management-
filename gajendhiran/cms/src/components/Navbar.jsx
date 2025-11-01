import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Navbar.css";

function Navbar() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <h1 className="title">Content Manager</h1>

      
      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

      <div className={`nav-buttons ${menuOpen ? "open" : ""}`}>
        <button className="home-btn" onClick={() => navigate("/")}>
          <span className="home-icon"><i class="fa-solid fa-house"></i></span> Home
        </button>
        <button className="create-btn" onClick={() => navigate("/create")}>
          <span className="plus-icon"> <i class="fa-solid fa-square-plus"></i></span> Create Post
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
