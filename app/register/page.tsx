'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function RegisterPage() {
  const router = useRouter()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault()

    // TODO: connect real auth later
    router.push('/feed')
  }

  return (
    <div
      style={{
        minHeight: '100vh',
        background: '#f6f6f6',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'system-ui, -apple-system',
      }}
    >
      <form
        onSubmit={handleRegister}
        style={{
          width: 360,
          background: '#fff',
          padding: 32,
          borderRadius: 16,
          boxShadow: '0 12px 30px rgba(0,0,0,0.08)',
          display: 'flex',
          flexDirection: 'column',
          gap: 16,
        }}
      >
        <h1 style={{ marginBottom: 8 }}>Create account</h1>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={inputStyle}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={inputStyle}
        />

        <button type="submit" style={primaryButton}>
          Register
        </button>

        <button
          type="button"
          onClick={() => router.push('/')}
          style={secondaryButton}
        >
          Back
        </button>
      </form>
    </div>
  )
}

const inputStyle = {
  padding: '10px 12px',
  borderRadius: 8,
  border: '1px solid #ddd',
  fontSize: 14,
}

const primaryButton = {
  padding: '10px',
  borderRadius: 8,
  border: 'none',
  background: '#000',
  color: '#fff',
  fontWeight: 600,
  cursor: 'pointer',
}

const secondaryButton = {
  padding: '10px',
  borderRadius: 8,
  border: '1px solid #ddd',
  background: '#fff',
  fontWeight: 600,
  cursor: 'pointer',
}
