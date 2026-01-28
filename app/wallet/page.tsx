'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function WalletPage() {
  const router = useRouter()
  const [balance, setBalance] = useState(12.5) // mock balance
  const [selected, setSelected] = useState<number | null>(null)

  const handleTopUp = () => {
    if (!selected) return
    setBalance((prev) => prev + selected)
    setSelected(null)
  }

  return (
    <div
      style={{
        minHeight: '100vh',
        background: '#f6f6f6',
        fontFamily: 'system-ui, -apple-system',
        padding: 32,
      }}
    >
      <div
        style={{
          maxWidth: 520,
          margin: '0 auto',
          background: '#fff',
          borderRadius: 16,
          padding: 32,
          boxShadow: '0 12px 30px rgba(0,0,0,0.08)',
        }}
      >
        <h1 style={{ marginBottom: 8 }}>💰 My Wallet</h1>
        <p style={{ opacity: 0.7, marginBottom: 24 }}>
          Use your balance for tips and door charges
        </p>

        {/* BALANCE */}
        <div
          style={{
            fontSize: 28,
            fontWeight: 800,
            marginBottom: 24,
          }}
        >
          ${balance.toFixed(2)}
        </div>

        {/* TOP UP OPTIONS */}
        <div style={{ display: 'flex', gap: 12, marginBottom: 20 }}>
          {[5, 10, 20, 50].map((amount) => (
            <button
              key={amount}
              onClick={() => setSelected(amount)}
              style={{
                flex: 1,
                padding: '10px 0',
                borderRadius: 10,
                border:
                  selected === amount ? '2px solid #000' : '1px solid #ddd',
                background: '#fff',
                fontWeight: 600,
                cursor: 'pointer',
              }}
            >
              ${amount}
            </button>
          ))}
        </div>

        {/* TOP UP BUTTON */}
        <button
          onClick={handleTopUp}
          disabled={!selected}
          style={{
            width: '100%',
            padding: '12px 0',
            borderRadius: 10,
            border: 'none',
            background: selected ? '#000' : '#ccc',
            color: '#fff',
            fontWeight: 700,
            cursor: selected ? 'pointer' : 'not-allowed',
          }}
        >
          Top Up Wallet
        </button>

        {/* NAV */}
        <button
          onClick={() => router.push('/feed')}
          style={{
            marginTop: 20,
            width: '100%',
            padding: '10px 0',
            borderRadius: 10,
            border: '1px solid #ddd',
            background: '#fff',
            fontWeight: 600,
            cursor: 'pointer',
          }}
        >
          ← Back to Feed
        </button>
      </div>
    </div>
  )
}
