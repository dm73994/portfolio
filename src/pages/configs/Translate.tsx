import i18next from 'i18next'
import React from 'react'
import { initReactI18next } from 'react-i18next'
import en from '../../lang/en.json'
import es from '../../lang/es.json'

i18next.use(initReactI18next)
.init({
  lng: "es",
  interpolation: { escapeValue: false },
  resources: {
    en: {
      global: en
    },
    es: {
      global: es
    }
  }
})


export default i18next