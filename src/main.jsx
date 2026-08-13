import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.jsx'
import './index.css'

import { CustomDataProvider } from './context/CustomDataContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CustomDataProvider>
      <App />
    </CustomDataProvider>
  </React.StrictMode>,
)