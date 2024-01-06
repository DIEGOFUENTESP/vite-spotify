import React from 'react';
import { Navigation } from '../Navigation/Navigation';
import './Contact.css';

export const Contact = () => {
  return (
    <div>
      <Navigation /><br /><br /><br /><br />
    <div className="contactContainer">
      <h2>Contacto</h2>
      <p>Estamos aquí para ayudarte. Contáctanos si tienes alguna pregunta o inquietud:</p>
      <ul>
        <li><strong>Email:</strong> info@spotsound.com</li>
        <li><strong>Teléfono:</strong> 123-456-789</li>
        <li><strong>Redes Sociales:</strong></li>
        <ul>
          <li>Twitter: <a href="https://twitter.com/SpotSound">@SpotSound</a></li>
          <li>Facebook: <a href="https://facebook.com/SpotSound">SpotSound</a></li>
          <li>Instagram: <a href="https://instagram.com/SpotSound">@SpotSound</a></li>
        </ul>
        <li><strong>Dirección:</strong> 123 Calle Principal, Ciudad, País</li>
      </ul>
    </div>
    </div>
  );
}