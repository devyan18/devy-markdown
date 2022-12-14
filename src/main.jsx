import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Preview from './components/Preview'
import './style.css'

const element = document.getElementById('root')

ReactDOM.createRoot(element).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/:doc/preview' element={<Preview />} />
        <Route path='/:doc' element={<App />} />
        <Route path='/*' element={<App />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
