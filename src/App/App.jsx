import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Menu } from '../Menu/Menu';
import { Home } from '../Home/Home';
import { Artistas } from '../Artista/Artistas';
import { Contact } from '../Contact/Contact';
import { Search } from '../Search/Search';
import { InicioSeccion } from '../InicioSeccion/InicioSeccion';
import { Registrarse } from '../Registrarse/Registrarse';
import { Perfil } from '../Perfil/Perfil';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Menu />}>
          <Route index element={<Home />} />
          <Route path="/artistas/:id" element={<Artistas />} />          
          <Route path="contact" element={<Contact />} />
          <Route path="search" element={<Search />} />
          <Route path="InicioSeccion" element={<InicioSeccion />} />
          <Route path="Registrarse" element={<Registrarse />} />
          <Route path="Perfil" element={<Perfil />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;