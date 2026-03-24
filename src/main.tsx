import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AppRouter from './router'
import { ToastContainer } from 'react-toastify'

createRoot(document.getElementById('root')!).render(
  
  <StrictMode>
    
    <AppRouter />
    <ToastContainer
      position='bottom-right'
    />
  </StrictMode>,
)
