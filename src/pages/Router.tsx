import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from './views/about'
import Projects from './views/projects'
import Skills from './views/skills'

const Router = () => {
  return (
    <Routes>
        <Route path='me' element={<About />} />
        <Route path='skills' element={<Skills />} />
        <Route path='projects' element={<Projects />} />
    </Routes>
  )
}

export default Router