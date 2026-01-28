'use client'

import { useRouter } from 'next/navigation'

export default function TipJarPage() {
  const router = useRouter()

  return (
    <div
      style={{
        minHeight: '100vh',
        background: '#f6f6f6',
        fontFamily: 'system-ui, -apple-system',
        padding: 40,
      }}
    >
      <div
        style={{
          maxWidth: 800,
          margin: '0 auto',
          background: '#fff',
          borderRadius: 16,
          padding: 32,
          boxShadow: '0 12px 30px rgba(0,0,0,0.08)',
        }}
      >
        <h1 style={{ marginBottom: 12 }}>🫙 Tip Jar</h1>
        <p style={{ opacity: 0.7, marginBottom: 24 }}>
          Incoming and outgoing tips will appear here.
        </p>

        {/* TRANSACTIONS (PLACEHOLDER) */}
        <div
          style={{
            borderTop: '1px solid #eee',
            paddingTop: 16,
            display: 'flex',
            flexDirection: 'column',
            gap: 12,
          }}
        >
          <Transaction label="Received from @fan123" amount="+$20" />
          <Transaction label="Sent to @theBeebs" amount="-$10" />
          <Transaction label="Received from @musiclover" amount="+$50" />
        </div>

        <button
          onClick={() => router.push('/feed')}
          style={{
            marginTop: 32,
            padding: '10px 16px',
            borderRadius: 8,
            border: '1px solid #ddd',
            background: '#fff',
            cursor: 'pointer',
            fontWeight: 600,
          }}
        >
          ← Back to Feed
        </button>
      </div>
    </div>
  )
}

function Transaction({
  label,
  amount,
}: {
  label: string
  amount: string
}) {
  const isPositive = amount.startsWith('+')

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        fontWeight: 600,
      }}
    >
      <span>{label}</span>
      <span style={{ color: isPositive ? '#0a7' : '#d33' }}>
        {amount}
      </span>
    </div>
  )
}
