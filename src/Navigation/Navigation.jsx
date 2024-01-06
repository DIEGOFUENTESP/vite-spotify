import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

export const Navigation = () => {
    return (
      <div className="navigation">
        <Link to="/Registrarse" className="navigation-link">
          <button className="register-button">Registrarse</button>
        </Link>
        <Link to="/InicioSeccion" className="navigation-link">
          <button className="login-button">Iniciar sesión</button>
        </Link>
      </div>
    );
  };