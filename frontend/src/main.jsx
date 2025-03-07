import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; 
import App from './App.jsx';
import { ToastContainer } from 'react-toastify';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <ToastContainer
        position="top-right"
        autoClose={1400}
        theme="colored"
      />
      <App />
    </BrowserRouter>
  </StrictMode>
);
