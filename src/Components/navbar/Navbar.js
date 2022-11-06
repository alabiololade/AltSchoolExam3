import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = ({ data }) => {
  return (
    <div className="navbar">
      <nav className="menu">
        <Link to="/">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/Rentals">OurEvents</Link>
        <Link to="/error">Error</Link>
        {data ? <p> Hi, {data.username} </p> : <Link to="/login">Login</Link>}
      </nav>
    </div>
  );
};
export default Navbar;
