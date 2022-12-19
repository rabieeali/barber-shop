import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Login from './pages/Login'
import Receipt from './pages/Receipt'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Router>

      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/receipt" element={<Receipt />} />
        <Route path="/history" />
        <Route path="/*" element={<App />} />
      </Routes>
    </Router>

  </React.StrictMode>,
)
