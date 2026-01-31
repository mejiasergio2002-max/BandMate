'use client'

import { useRouter } from 'next/navigation'

export default function TopUpPage() {
  const router = useRouter()

  return (
    <div
      style={{
        minHeight: '100vh',
        background: '#f6f6f6',
        padding: 40,
        fontFamily: 'system-ui, -apple-system',
      }}
    >
      <div
        style={{
          maxWidth: 500,
          margin: '0 auto',
          background: '#fff',
          borderRadius: 16,
          padding: 28,
          boxShadow: '0 12px 30px rgba(0,0,0,0.08)',
        }}
      >
        <h1>Top Up Wallet</h1>

        <p style={{ opacity: 0.7, marginBottom: 24 }}>
          Add funds to your BandMate wallet.
        </p>

        <button
          onClick={() => alert('Payment flow coming next')}
          style={{
            width: '100%',
            padding: '14px 0',
            borderRadius: 12,
            border: 'none',
            background: '#000',
            color: '#fff',
            fontWeight: 700,
            cursor: 'pointer',
          }}
        >
          Continue to Payment
        </button>

        <button
          onClick={() => router.push('/wallet')}
          style={{
            marginTop: 16,
            background: 'none',
            border: 'none',
            color: '#555',
            fontWeight: 600,
            cursor: 'pointer',
          }}
        >
          ← Back to Wallet
        </button>
      </div>
    </div>
  )
}
