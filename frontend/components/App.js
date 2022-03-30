import React from 'react'
import { NavLink, Routes, Route } from 'react-router-dom'
import LoginForm from './LoginForm'

export default function App() {
  return (
    <React.StrictMode>
      <button id="logout">Logout from app</button>
      <div id="wrapper">
        <h1>Codealong Fullstack Project</h1>
        <nav>
          <NavLink id="loginScreen" to="/">Login</NavLink>
        </nav>
        <Routes>
          <Route path="/" element={<LoginForm />} />
        </Routes>
        <footer>Bloom Institute of Technology 2022</footer>
      </div>
    </React.StrictMode>
  )
}
