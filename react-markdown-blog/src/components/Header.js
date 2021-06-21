import React from 'react';
import "./components.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="Header">
      <h1>David Anthony</h1>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </div>
  );
}

export default Header
