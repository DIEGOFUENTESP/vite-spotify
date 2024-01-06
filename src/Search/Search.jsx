import React from 'react';
import './Search.css';

export const Search = () => {
  const handleSearch = (event) => {
    event.preventDefault();
    // Aquí puedes agregar la lógica para manejar la búsqueda
    // Por ejemplo, obtener el valor del input y realizar alguna acción
  };

  return (
    <form onSubmit={handleSearch} className="search-form">
      <input
        className="search-input"
        type="text"
        placeholder="Buscar"
        aria-label="Search"
      />
      
    </form>
  );
};