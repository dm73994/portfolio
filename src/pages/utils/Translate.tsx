import React from 'react'
import { useTranslation } from 'react-i18next';

const Translate = (text: string) => {
    const {t} = useTranslation("global")
    return t(text)
}

export default Translate