import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function Nav() {

  const navStyle = {
      color: 'white',
      decoration: 'none'
  }
  return (
    <div className="App">
      <nav>
          <h3>SAFARI</h3>

          <ul className="nav-links">
            <Link style={navStyle} to="/">
              <li>Home</li>
            </Link>

            <Link style={navStyle} to="/nationalPark">
              <li>National Park</li>
            </Link>

            <Link style={navStyle} to="/gameReserve">
              <li>Game Reserve</li>
            </Link>

            <Link style={navStyle} to="/contact">
              <li>Contact</li>
            </Link>              
          </ul>
      </nav>
    </div>
  );
}

export default Nav;
