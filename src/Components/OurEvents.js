import React from "react";
import { Link } from "react-router-dom";
import App from "../App";

function OurEvents() {
  return (
    <>
      <h1>Decoration Packages</h1>

      <Link to="/Rentals/1">Wedding</Link>
      <br />
      <Link to="/Rentals/2">Birthday Party</Link>
      <br />
      <Link to="/Rentals/3">Corperate Events</Link>
    </>
  );
}

export default OurEvents;
