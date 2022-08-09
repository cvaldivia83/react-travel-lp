import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../fontawesome";

export default function Navbar() {
  return (
    <nav className="navbar">
      <span className="navbar--icon">
        <FontAwesomeIcon icon="fa-solid fa-earth-americas" />
      </span>
      <h1 className="navbar--title">my travel journal.</h1>
    </nav>
  );
}
