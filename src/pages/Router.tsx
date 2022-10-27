import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from './views/about'
import Projects from './views/projects'
import Skills from './views/skills'

const Router = () => {
  return (
    <Routes>
      <Route index element={<About />} />
      <Route path='me' element={<About />} />
      <Route path='skills' element={<Skills />} />
      <Route path='projects' element={<Projects />} />
      <Route path="*" element={<h1>404</h1>} />
    </Routes>
  )
}

export default Router