import React from 'react';
import { Outlet, Link } from "react-router-dom";
import { Navigation } from '../Navigation/Navigation';
import './Home.css';

export const Home = () => {
  
  return (
    <div>
      <Navigation /><br /><br /><br /><br />
    <div className="spotSoundDescription">      
      <h1>Bienvenido a SpotSound: Tu Destino Musical Definitivo</h1>
      <p>
        En SpotSound, estamos dedicados a proporcionarte acceso ilimitado a la música que amas. ¿Qué ofrecemos?
      </p>
      <ul>
        <li><strong>La Mejor Biblioteca Musical:</strong> Explora un vasto catálogo de canciones de todos los géneros, desde clásicos atemporales hasta los últimos éxitos. ¡Descubre y redescubre tu música favorita!</li>
        <li><strong>Personalización Total:</strong> Crea listas de reproducción personalizadas para cada estado de ánimo, actividad o momento especial. Nuestro algoritmo inteligente también te ofrece recomendaciones adaptadas a tus gustos.</li>
        <li><strong>Escucha en Todas Partes:</strong> Disfruta de tu música en cualquier lugar. Con nuestra aplicación móvil y acceso web, tu biblioteca musical está siempre al alcance de tus manos.</li>
        <li><strong>Calidad Premium:</strong> Sumérgete en una experiencia sonora de alta calidad con reproducción sin anuncios y descarga de canciones para disfrutarlas incluso sin conexión.</li>
        <li><strong>Planes de Suscripción Flexibles:</strong> Elige entre nuestras suscripciones mensuales o anuales, diseñadas para adaptarse a tu estilo de vida y presupuesto. ¡Música ilimitada a tu alcance por un precio accesible!</li>
        <li><strong>Soporte al Cliente 24/7:</strong> Nuestro equipo está aquí para asegurarse de que tu experiencia musical sea perfecta. Estamos disponibles en cualquier momento para resolver tus preguntas o inquietudes.</li>
      </ul>
      <p>¡Únete a SpotSound hoy mismo y sumérgete en un mundo de música sin límites!</p>
        
      
    </div>
    </div>
  );
} 