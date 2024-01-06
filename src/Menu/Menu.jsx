// Menu.jsx
import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { Search } from '../Search/Search';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faEnvelope, faMusic, faHeadphones } from '@fortawesome/free-solid-svg-icons';
import { ArtistasDropdown } from '../Artista/ArtistasDropdown';
import './Menu.css';

export const Menu = () => {
  return (
    <>
      <nav className="main-nav">
        <h1 className="logo">
          <Link to="/" className="logo-link">
            <FontAwesomeIcon icon={faHeadphones} />
            {' '}
            SpotSound
          </Link>
        </h1>
        <ul className="nav-links">
          <li>
            <Link to="/">
              <FontAwesomeIcon icon={faHome} />
              {' '}
              Home
            </Link>
          </li>
          <li>
            {/* Aquí se muestra el componente ArtistasDropdown */}
            <ArtistasDropdown />
          </li>
          <li>
            <Link to="/contact">
              <FontAwesomeIcon icon={faEnvelope} />
              {' '}
              Contact
            </Link>
          </li>
          <li>
            <Search />
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};
