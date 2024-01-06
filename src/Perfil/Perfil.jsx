import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../Services/firebaseConfig';
import { avatar1, avatar2, avatar3, avatar4, avatar5, album, cancion1, cancion2, cancion3, cancion4 } from '../Services/assets';
import './Perfil.css';

export function Perfil() {
  const currentUser = auth.currentUser;
  const navigate = useNavigate();
  const [notificacionesActivadas, setNotificacionesActivadas] = useState(true);
  const [showMenu, setShowMenu] = useState(false);
  const [selectedAvatar, setSelectedAvatar] = useState(avatar1);
  const [musicBoxImages, setMusicBoxImages] = useState([album , album , album , album]); // Establece canción1 como imagen por defecto
  const [showMenus, setShowMenus] = useState([false, false, false, false]);

  const handleLogout = async () => {
    try {
      await auth.signOut();
      navigate('/InicioSeccion');
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
    }
  };

  const toggleNotificaciones = () => {
    setNotificacionesActivadas(!notificacionesActivadas);
  };

  const getUserNameFromEmail = (email) => {
    const name = email.split('@')[0];
    return name.charAt(0).toUpperCase() + name.slice(1);
  };
  const changeAvatar = (newAvatar) => {
    setSelectedAvatar(newAvatar); // Cambia el avatar seleccionado al hacer clic en una opción del menú
    setShowMenu(false); // Oculta el menú después de seleccionar un nuevo avatar
  };
  const changeMusicBoxImage = (index, newImage) => {
    const updatedImages = [...musicBoxImages];
    updatedImages[index] = newImage;
    setMusicBoxImages(updatedImages);
  };

  const toggleMenu = (index) => {
    const updatedMenus = [...showMenus];
    updatedMenus[index] = !updatedMenus[index];
    setShowMenus(updatedMenus);
  };

  return (
    <div className="Perfilcontainer">
      <h2>Perfil de Usuario</h2>
      {currentUser && (
        <div>
          {/* Galería de imágenes */}
          <div className="image-gallery">
            <img src={selectedAvatar} alt="Avatar" onClick={() => setShowMenu(!showMenu)} />
            {showMenu && (
              <div className="avatar-options">
                <p>Selecciona un avatar:</p>
                <div>
                  <img src={avatar1} alt="Avatar 1" onClick={() => changeAvatar(avatar1)} />
                  <img src={avatar2} alt="Avatar 2" onClick={() => changeAvatar(avatar2)} />
                  <img src={avatar3} alt="Avatar 3" onClick={() => changeAvatar(avatar3)} />
                  <img src={avatar4} alt="Avatar 3" onClick={() => changeAvatar(avatar4)} />
                  <img src={avatar5} alt="Avatar 3" onClick={() => changeAvatar(avatar5)} />
                  
                </div>
              </div>
            )}
          </div>
          <br />
          <p className='negrita'> Bienvenido, {getUserNameFromEmail(currentUser.email)}</p>
          <p className='usuario'>Correo: {currentUser.email}</p>
          
          <p>Géneros favoritos: Pop, Rock</p>

          
          <div className="settings">
            <p>Configuraciones:</p>
            <ul>
              <li>Notificaciones: {notificacionesActivadas ? 'Activadas' : 'Desactivadas'}
                <br /><button onClick={toggleNotificaciones}>
                  Cambiar
                </button></li>
              <li><p>Fecha de registro: {currentUser.metadata.creationTime}</p></li>
            </ul>
          </div>

          
          <div className="activity-history">
            <p>Historial de actividades:</p>
            <ul>
              <li>Última canción escuchada: "Canción A"</li>
              <li>Acción reciente: Agregó "Canción B" a la lista de reproducción</li>
            </ul>
            <p>Lista de reproducción</p>
          </div>
          <div className="music-boxes">
        {musicBoxImages.map((image, index) => (
          <div className="music-box" key={index}>
            <img
              src={image || cancion1} 
              alt={`Album ${index + 1}`}
              onClick={() => toggleMenu(index)}
            />
                {showMenus[index] && (
                  <div className="image-options">
                    <p>Selecciona una imagen:</p>
          <div>
            <img
              src={cancion1}
              alt="Canción 1"
              onClick={() => {
                changeMusicBoxImage(index, cancion1);
                toggleMenu(index);
              }}
            />
            <img
              src={cancion2}
              alt="Canción 2" 
              onClick={() => {
                changeMusicBoxImage(index, cancion2);
                toggleMenu(index);
              }}
            />
            <img
              src={cancion3}
              alt="Canción 3" 
              onClick={() => {
                changeMusicBoxImage(index, cancion3);
                toggleMenu(index);
              }}
            />
            <img
              src={cancion4}
              alt="Canción 4" 
              onClick={() => {
                changeMusicBoxImage(index, cancion4);
                toggleMenu(index);
              }}
            />
            {/* Agrega más imágenes para elegir aquí */}
          </div>
        </div>
      )}
    </div>
  ))}
</div>
<p>Agregar música</p>
<br /><br />
          
          <button onClick={handleLogout}>Cerrar Sesión</button>
        </div>
      )}
    </div>
  );
}