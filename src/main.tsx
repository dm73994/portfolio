import React from 'react'
import ReactDOM from 'react-dom/client'
import { I18nextProvider } from 'react-i18next';
import i18next from './pages/configs/Translate'
import App from './pages/App'
import { BrowserRouter, RouterProvider } from 'react-router-dom';
import Router from './pages/Router';
import './css/styles.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <I18nextProvider i18n={i18next}>        
        <App /> 
      </I18nextProvider>
    </BrowserRouter>
  </React.StrictMode>
)
