// ArtistasDropdown.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { bannerData } from '../Services/token.js';

export const ArtistasDropdown = () => {
  return (
    <div className="dropdown">
      <span className="logo-link">Artistas</span>
      <div className="dropdown-content">
        {bannerData.map((artista) => (
          <Link to={`/artistas/${artista.id}`} key={artista.id}>{artista.bannerTitle}</Link>
        ))}
      </div>
    </div>
  );
};
