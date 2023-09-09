import React from 'react'
import ReactDOM from 'react-dom/client';

// importing AuthO
import { Auth0Provider } from '@auth0/auth0-react';

// importing React-toastify
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

// importing styles and components
import './assets/styles/index.css'
import { App } from './components';


ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  // Providing Auth Access
  <Auth0Provider
    domain="dev-ijkuzfimp1b5u4ij.us.auth0.com"
    clientId={import.meta.env.VITE_CLI}
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
    {/* Providing  toastify access */}
    <ToastContainer />
  </Auth0Provider>
  // </React.StrictMode>
,)
