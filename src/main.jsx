import React from 'react'
import ReactDOM from 'react-dom/client';
import { App } from './components';
import './assets/styles/index.css'
import { Auth0Provider } from '@auth0/auth0-react';
ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <Auth0Provider
    domain="dev-ijkuzfimp1b5u4ij.us.auth0.com"
    clientId={import.meta.env.VITE_CLI}
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    {console.log(import.meta.env.VITE_CLI)}
    <App />
  </Auth0Provider>
  // </React.StrictMode>
,)
