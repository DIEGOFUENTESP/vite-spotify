import React, { useState } from 'react';
import { Outlet, Link } from "react-router-dom";
import Swal from 'sweetalert2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import { auth, createUserWithEmailAndPassword, db } from '../Services/firebaseConfig';
import './Registrarse.css';

export function Registrarse() {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [telefono, setTelefono] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [usuariosRegistrados, setUsuariosRegistrados] = useState([]);

  const handleNombreChange = (event) => {
    setNombre(event.target.value);
  };
  
  const handleApellidoChange = (event) => {
    setApellido(event.target.value);
  };
  
  const handleTelefonoChange = (event) => {
    setTelefono(event.target.value);
  };
  
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
  event.preventDefault();

  // Validación de campos con expresiones regulares
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^\d{10}$/; // Suponiendo que el teléfono debe tener 10 dígitos
  const nameRegex = /^[a-zA-Z]+$/; // Expresión regular para validar nombres
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/; // Expresión regular para validar contraseña

  if (!emailRegex.test(email)) {
    showWarningAlert('Por favor, ingresa un correo electrónico válido.');
    return;
  }

  if (!phoneRegex.test(telefono)) {
    showWarningAlert('Por favor, ingresa un número de teléfono válido de 10 dígitos.');
    return;
  }

  if (!nameRegex.test(nombre)) {
    showWarningAlert('Por favor, ingresa un nombre válido (solo letras mayúsculas y minúsculas).');
    return;
  }

  if (!nameRegex.test(apellido)) {
    showWarningAlert('Por favor, ingresa un apellido válido (solo letras mayúsculas y minúsculas).');
    return;
  }

  if (!passwordRegex.test(password)) {
    showWarningAlert('Por favor, ingresa una contraseña válida (debe tener al menos una letra mayúscula, una minúscula, un número y una longitud mínima de 6 caracteres).');
    return;
  }
  

  try {
    // Crear el usuario en Firebase Authentication
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  
    // Guardar información adicional del usuario en Firestore
    await db.collection('usuarios').doc(userCredential.user.uid).set({
      nombre: nombre,
      apellido: apellido,
      telefono: telefono,
      // Otros campos que quieras almacenar
    });
  
    
  } catch (error) {
    if (error.code === 'auth/email-already-in-use') {
      showWarningAlert('Este correo electrónico ya está en uso. Por favor, utiliza otro correo electrónico.');
    } else {
      showSuccessAlert(`Usuario registrado con el correo electrónico: ${email}`);
      setNombre('');
      setApellido('');
      setTelefono('');
      setEmail('');
      setPassword('');
    }
  }
  
  
};


  const showSuccessAlert = (message) => {
    Swal.fire({
      title: 'SpotSound',
      text: message,
      icon: 'success',
      confirmButtonText: 'Aceptar',
    });
  };

  const handleGoogleRegister = () => {
    showWarningAlert('Registrarse con Google está actualmente deshabilitado.');
  };

  const handleFacebookRegister = () => {
    showWarningAlert('Registrarse con Facebook está actualmente deshabilitado.');
  };

  const showWarningAlert = (message) => {
    Swal.fire({
      title: 'SpotSound',
      text: message,
      icon: 'error',
      confirmButtonText: 'Aceptar',
    });
  };

  return (
    <div className="RegistrarseContainer">
      <h2>Regístrate para empezar a escuchar contenido</h2>
      <p>Recibe las últimas actualizaciones y ofertas especiales directamente en tu bandeja de entrada.</p>
      
      <form onSubmit={handleSubmit}>          
        <input
          type="nombre"
          placeholder="Nombre"
          value={nombre}
          onChange={handleNombreChange}
          required
        />
        <input
          type="apellido"
          placeholder="Apellido"
          value={apellido}
          onChange={handleApellidoChange}
          required
        />
        <input
          type="telefono"
          placeholder="Telefono"
          value={telefono}
          onChange={handleTelefonoChange}
          required
        />
        <input
          type="email"
          placeholder="Ingresa tu correo electrónico"
          value={email}
          onChange={handleEmailChange}
          required
        />
        <input
          type="password"
          placeholder="Ingresa tu contraseña"
          value={password}
          onChange={handlePasswordChange}
          required
        />
        <button type="submit">Registrarse</button><br />
        
      </form>
      <hr />
      <button className="GoogleButton" onClick={handleGoogleRegister}>
      <FontAwesomeIcon icon={faGoogle} className="iconSpacing" />
      Registrarse con Google
      </button><br />
      <hr />
      <button className="FacebookButton" onClick={handleFacebookRegister}>
      <FontAwesomeIcon icon={faFacebookSquare} className="iconSpacing" />
      Registrarse con Facebook
      </button>
      <p>¿Ya tienes una cuenta? <Link to="/InicioSeccion" className="navigation-link">
      Inicia sesión aquí.
          </Link></p>
    </div>
  );
}