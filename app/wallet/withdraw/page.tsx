'use client'

import { useRouter } from 'next/navigation'

export default function WithdrawPage() {
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
          padding: 24,
          boxShadow: '0 12px 30px rgba(0,0,0,0.08)',
        }}
      >
        <h1>Withdraw Funds</h1>

        <p style={{ opacity: 0.7, marginBottom: 20 }}>
          Withdrawals will be sent to your linked payment method.
        </p>

        <button
          onClick={() => router.push('/wallet')}
          style={{
            marginTop: 20,
            padding: '10px 16px',
            borderRadius: 10,
            border: '1px solid #ddd',
            background: '#fff',
            cursor: 'pointer',
            fontWeight: 600,
          }}
        >
          ← Back to Wallet
        </button>
      </div>
    </div>
  )
}
