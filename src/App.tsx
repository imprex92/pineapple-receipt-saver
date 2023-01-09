import React from 'react'
import { Route, Routes } from 'react-router-dom'
import StartPage from 'pages/StartPage'
import HomePage from 'pages/HomePage'


const App:React.FC = () => (
  <Routes>
    <Route path="/" element={<StartPage />} />
    <Route path='/:id/home' element={<HomePage />} />
  </Routes>
)

export default App
