import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css';

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Page1">Page 1</Link>
        </li>
        <li>
          <Link to="/Page2">Page 2</Link>
        </li>
        <li>
          <Link to="/Page3">Page 3</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;