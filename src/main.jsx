import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

/* Archivo bootstrap para css */
import "bootstrap/dist/css/bootstrap.min.css";

/* Archivo bootstrap para js */
import "bootstrap/dist/js/bootstrap.bundle.js";

import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
