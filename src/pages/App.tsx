import React from 'react'
import Translate from './utils/Translate'
import { useTranslation } from 'react-i18next';
import Router from './Router';
import NavigationBar from './components/NavigationBar';
import { RouterProvider } from 'react-router-dom';

const App = () => {
  return (
    <>
      <NavigationBar />
      <Router />
    </>
  )
}

export default App