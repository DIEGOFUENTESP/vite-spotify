import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { obtenerCanciones } from '../Services/token.js';
import { Navigation } from '../Navigation/Navigation';
import './Artistas.css';

export const Artistas = () => {
  const { id } = useParams();
  const [canciones, setCanciones] = useState(null);
  const [carga, setCarga] = useState(true);
  const [bannerImage, setBannerImage] = useState('');
  const [bannerTitle, setBannerTitle] = useState('');

  useEffect(() => {
    obtenerCanciones(id)
      .then((respuestaDelBack) => {
        setCanciones(respuestaDelBack);
        setCarga(false);
        // Aquí obtén la imagen y el título del artista
        // Supongamos que estos datos están en respuestaDelBack, ajusta según tu respuesta real
        setBannerImage(respuestaDelBack.bannerImage);
        setBannerTitle(respuestaDelBack.bannerTitle);
      })
      .catch((respuestaerror) => {
        console.error(respuestaerror);
        setCarga(false);
      });
  }, [id]);

  if (carga) {
    return (
      <div>
        <h3>Cargando...</h3>
      </div>
    );
  } else if (!canciones || canciones.tracks.length === 0) {
    return (
      <div>
        <h3>No se encontraron canciones</h3>
      </div>
    );
  } else {
    return (
      <div>
      <Navigation /><br /><br /><br /><br />
      <div className="container">
        <div className="banner">
          <img src={bannerImage} alt="Banner" className="banner-img" />
          <h2 className="banner-title">{bannerTitle}</h2>
        </div>

        <div className="row">
          {canciones.tracks.map((cancion) => (
            <div className="col" key={cancion.id}>
              <div className="card">
                <h3>{cancion.name}</h3>
                {cancion.album.images.length > 0 && (
                  <img src={cancion.album.images[0].url} alt="" className="img-fluid" />
                )}
                {cancion.preview_url && (
                  <audio src={cancion.preview_url} controls className="w-100"></audio>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
    );
  }
};