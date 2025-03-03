import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Resume from './pages/Resume.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<App/>} />
              <Route path="/Resume" element={<Resume/>} />
          </Routes>
      </BrowserRouter>
  </StrictMode>,
)
