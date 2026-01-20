'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function RegisterPage() {
  const router = useRouter()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'system-ui',
      }}
    >
      <div
        style={{
          width: 360,
          padding: 28,
          borderRadius: 14,
          background: '#fff',
          boxShadow: '0 12px 30px rgba(0,0,0,0.2)',
        }}
      >
        <h2 style={{ marginBottom: 16 }}>Create Account</h2>

        <input
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={inputStyle}
        />

        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={inputStyle}
        />

        <input
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={inputStyle}
        />

        <button
          onClick={() => router.push('/feed')}
          style={buttonStyle}
        >
          Register
        </button>
      </div>
    </div>
  )
}

const inputStyle = {
  width: '100%',
  padding: '12px',
  marginBottom: 12,
  borderRadius: 8,
  border: '1px solid #ddd',
}

const buttonStyle = {
  width: '100%',
  padding: '12px',
  borderRadius: 8,
  border: 'none',
  background: '#000',
  color: '#fff',
  fontWeight: 600,
  cursor: 'pointer',
}
