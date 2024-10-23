import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx'; // Assicurati che il percorso sia corretto
import { BrowserRouter } from 'react-router-dom';
import './index.css';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)