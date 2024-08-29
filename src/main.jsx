import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import CvSection from './cv-section.jsx'
import FormSection from './form-section.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <div className="container">
      <FormSection />
      <CvSection />
    </div>
  </StrictMode>,
)
