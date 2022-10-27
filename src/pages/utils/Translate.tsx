import React from 'react'
import { useTranslation } from 'react-i18next';

interface props {
    text: string
}

const Translate = ({text}: props) => {
    const {t} = useTranslation("global")
    return t(text)
}

export default Translate