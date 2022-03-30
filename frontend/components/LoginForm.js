import React from 'react'

export default function LoginForm(props) {
  return (
    <form id="loginForm">
      <h2>Login</h2>
      <input
        maxLength={20}
        placeholder="Enter username"
        id="username"
      />
      <input
        maxLength={20}
        placeholder="Enter password"
        id="password"
      />
      <button id="submitCredentials">Submit credentials</button>
    </form>
  )
}
