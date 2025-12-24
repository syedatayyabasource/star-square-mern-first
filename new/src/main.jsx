import React from 'react';
import ReactDOM from 'react-dom/client';

// 1. Core Styles (Inka order bohat zaroori hai)
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap base
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Bootstrap JS (Navbar toggle ke liye zaroori hai)
import '../styles/main.css'; // Aapki apni external professional CSS
import './index.css'; // Global base styles

// 2. Component Import
import App from './App.jsx';

// 3. Root Rendering
const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    {/* Aapka main App component */}
    <App /> 
  </React.StrictMode>
);