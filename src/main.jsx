import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// Polyfill Buffer for libraries expecting Node.js Buffer in the browser
import { Buffer } from 'buffer'
if (typeof window !== 'undefined' && !window.Buffer) {
  window.Buffer = Buffer
}
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
