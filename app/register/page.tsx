'use client'

import { useRouter } from 'next/navigation'

export default function RegisterPage() {
  const router = useRouter()

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
          width: 320,
          padding: 24,
          borderRadius: 12,
          background: '#fff',
          boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
          textAlign: 'center',
        }}
      >
        <h2 style={{ marginBottom: 16 }}>Register</h2>

        <input placeholder="Email" style={inputStyle} />
        <input placeholder="Password" type="password" style={inputStyle} />

        <button
          onClick={() => router.push('/feed')}
          style={{
            width: '100%',
            padding: '12px',
            borderRadius: 8,
            border: 'none',
            background: '#000',
            color: '#fff',
            fontWeight: 600,
            cursor: 'pointer',
          }}
        >
          Create Account
        </button>
      </div>
    </div>
  )
}

const inputStyle = {
  width: '100%',
  padding: '10px',
  marginBottom: 12,
  borderRadius: 8,
  border: '1px solid #ddd',
}
