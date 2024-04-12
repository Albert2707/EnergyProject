import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.scss'
import ScrollContextProvider from './context/scrollContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ScrollContextProvider>
      <App />
    </ScrollContextProvider>
  </React.StrictMode>,
)
