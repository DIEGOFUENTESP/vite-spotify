import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { auth,  signInWithEmailAndPassword} from '../Services/firebaseConfig';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faFacebookSquare } from '@fortawesome/free-brands-svg-icons'; 
import './InicioSeccion.css';


export function InicioSeccion() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    try {
      await signInWithEmailAndPassword(auth, email, password);

      showSuccessAlert(`Ha iniciado sesión con el correo: ${email}. Espera un momento mientras carga la página`);

      // Redirigir después del inicio de sesión
      navigate('/perfil'); // Usamos navigate en lugar de Redirect
    } catch (error) {
      // Handle authentication errors
      if (error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password') {
        showWarningAlert('Credenciales inválidas. Por favor, verifica tu correo y contraseña.');
      } else {
        showWarningAlert('Credenciales inválidas. Por favor, verifica tu correo y contraseña.');
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
    showWarningAlert('Continuar con Google está actualmente deshabilitado.');
  };

  const handleFacebookRegister = () => {
    showWarningAlert('Continuar con Facebook está actualmente deshabilitado.');
  };

  const showWarningAlert = (message) => {
    Swal.fire({
      title: 'SpotSound',
      text: message,
      icon: 'error',
      confirmButtonText: 'Aceptar',
    });
  };

  const handlePasswordReset = async () => {
    const { value: userEmail } = await Swal.fire({
      title: "Ingrese su correo",
      input: "email",
      inputLabel: "",
      inputPlaceholder: "Enter your email address",
    });

    if (userEmail) {
      Swal.fire(`Se enviaron las intrucciones al: ${userEmail}`);
      // Aquí podrías enviar userEmail a tu backend para iniciar el proceso de recuperación de contraseña
    }
  };
  

  return (
    <div className="InicioSeccionContainer">
      <h2>Inicia sesión en SpotSound</h2>
      <button className="GoogleButton" onClick={handleGoogleRegister}>
        <FontAwesomeIcon icon={faGoogle} className="iconSpacing" />
        Continuar con Google
      </button><br />
      <hr />
      <button className="FacebookButton" onClick={handleFacebookRegister}>
        <FontAwesomeIcon icon={faFacebookSquare} className="iconSpacing" />
        Continuar con Facebook
      </button><hr /><br />
      <form onSubmit={handleSubmit}>
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
        <button type="submit">Iniciar Seccion</button><br />
        <p onClick={handlePasswordReset} className="passwordResetLink">
          ¿Has olvidado tu contraseña?
        </p>
        <p>
          ¿No tienes cuenta? <Link to="/Registrarse" className="navigation-link">
            Regístrate en SpotSound
          </Link>
        </p>
      </form>
    </div>
  );
}