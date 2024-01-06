import React from 'react';
import { createRoot } from 'react-dom/client'; // Importa createRoot desde react-dom/client
import App from './App/App';
import './App/index.css'

const root = createRoot(document.getElementById('root'));
root.render(<App />);
