import React from 'react';
import "./components.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="Header">
      <Link to="/">
        <h1>David Anthony</h1>
      </Link>
      
    </div>
  );
}

export default Header;
