import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
  once: true, // Ensures animations happen only once
  offset: 200, // Distance from the top before triggering animations
  duration: 1200, // Global animation duration
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
