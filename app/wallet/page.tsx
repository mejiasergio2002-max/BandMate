'use client'

import { useRouter } from 'next/navigation'

export default function WalletPage() {
  const router = useRouter()

  // mock balance for now
  const balance = 128.45

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
          maxWidth: 600,
          margin: '0 auto',
          background: '#fff',
          borderRadius: 16,
          padding: 28,
          boxShadow: '0 12px 30px rgba(0,0,0,0.08)',
        }}
      >
        <h1 style={{ marginBottom: 16 }}>My Wallet</h1>

        {/* BALANCE */}
        <div
          style={{
            fontSize: 32,
            fontWeight: 800,
            marginBottom: 32,
          }}
        >
          ${balance.toFixed(2)}
        </div>

        {/* ACTION BUTTONS */}
        <div
          style={{
            display: 'flex',
            gap: 12,
          }}
        >
          {/* TOP UP */}
          <button
            onClick={() => router.push('/wallet/topup')}
            style={{
              flex: 1,
              padding: '14px 0',
              borderRadius: 12,
              border: 'none',
              background: '#000',
              color: '#fff',
              fontSize: 16,
              fontWeight: 700,
              cursor: 'pointer',
            }}
          >
            Top Up
          </button>

          {/* WITHDRAW */}
          <button
            onClick={() => router.push('/wallet/withdraw')}
            style={{
              flex: 1,
              padding: '14px 0',
              borderRadius: 12,
              border: '1px solid #ddd',
              background: '#fff',
              fontSize: 16,
              fontWeight: 700,
              cursor: 'pointer',
            }}
          >
            Withdraw
          </button>
        </div>
      </div>
    </div>
  )
}
