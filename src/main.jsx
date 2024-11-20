import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AuthProvider from '../src/components/context/AuthProvider.jsx'
import { TaskProvider } from './components/context/TaskContext.jsx'




createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <AuthProvider>
    <TaskProvider>
      <App />
      </TaskProvider>
    </AuthProvider>

  </StrictMode>,
)
