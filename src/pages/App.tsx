import React from 'react'
import i18next from './configs/Translate'
import Translate from './utils/Translate'
import { useTranslation } from 'react-i18next';

const App = () => {
  return (
    <div> {Translate({text: 'general.about'})} </div>
  )
}

export default App