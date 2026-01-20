'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function RegisterPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  const handleRegister = () => {
    setLoading(true)

    // fake submit (safe placeholder)
    setTimeout(() => {
      router.push('/feed')
    }, 800)
  }

  return (
    <div
      style={{
        minHeight: '100vh',
        background: '#0f0f0f',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'system-ui, -apple-system',
      }}
    >
      <div
        style={{
          width: 380,
          padding: 32,
          borderRadius: 18,
          background: '#fff',
          boxShadow: '0 20px 50px rgba(0,0,0,0.4)',
        }}
      >
        <h2 style={{ marginBottom: 6 }}>Create your account</h2>
        <p style={{ opacity: 0.6, marginBottom: 24 }}>
          Join BandMate and start playing.
        </p>

        <input placeholder="Full Name" style={inputStyle} />
        <input placeholder="Artist / Band Name" style={inputStyle} />
        <input placeholder="Email" type="email" style={inputStyle} />
        <input placeholder="Password" type="password" style={inputStyle} />

        <select style={inputStyle}>
          <option value="">I am a…</option>
          <option value="artist">Artist</option>
          <option value="viewer">Viewer</option>
        </select>

        <button
          onClick={handleRegister}
          disabled={loading}
          style={{
            width: '100%',
            marginTop: 16,
            padding: '12px 0',
            borderRadius: 10,
            border: 'none',
            background: '#000',
            color: '#fff',
            fontWeight: 600,
            cursor: 'pointer',
          }}
        >
          {loading ? 'Creating account…' : 'Create Account'}
        </button>

        <div style={{ marginTop: 16, fontSize: 14, opacity: 0.6 }}>
          Already have an account?{' '}
          <span
            style={{ textDecoration: 'underline', cursor: 'pointer' }}
            onClick={() => router.push('/')}
          >
            Sign in
          </span>
        </div>
      </div>
    </div>
  )
}

const inputStyle = {
  width: '100%',
  padding: '12px',
  marginBottom: 12,
  borderRadius: 10,
  border: '1px solid #ddd',
  fontSize: 14,
}

