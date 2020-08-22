import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../../assets/images/crwn.svg';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__search">
        <input
          type="text"
          placeholder="Search tours"
          className="navbar__search-input"
        />
        <button className="navbar__search-btn">Search</button>
      </div>
      <a className="navbar__logo-container">
        <Logo className="navbar__logo" />
      </a>
      <ul className="navbar__options">
        <li className="navbar__options-item">
          <a className="navbar__options-link">ALL TOURS</a>
        </li>
        <li className="navbar__options-item">
          <a className="navbar__options-link">LOGIN</a>
        </li>
        <li className="navbar__options-item">
          <a className="navbar__options-link navbar__options-link--signup">
            SIGN UP
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
