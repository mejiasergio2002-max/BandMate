'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function LeftSidebar() {
  const router = useRouter()
  const [tipped, setTipped] = useState<number | null>(null)

  const handleTip = (amount: number) => {
    setTipped(amount)
    setTimeout(() => setTipped(null), 2500)
  }

  return (
    <aside
      style={{
        width: 260,
        background: '#ffffff',
        borderRight: '1px solid #e5e5e5',
        padding: 20,
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        position: 'sticky',
        top: 0,
        boxSizing: 'border-box',
      }}
    >
      {/* LOGO */}
      <div
        onClick={() => router.push('/feed')}
        style={{
          marginBottom: 28,
          cursor: 'pointer',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <img
          src="/logo.png"
          alt="BandMate"
          style={{
            height: 125,
            width: 'auto',
            objectFit: 'contain',
          }}
        />
      </div>

      {/* NAVIGATION */}
      <nav style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        <SidebarItem label="🏠 Home" onClick={() => router.push('/feed')} />
        <SidebarItem label="👤 My Profile" onClick={() => router.push('/profile')} />
        <SidebarItem label="💰 My Wallet" onClick={() => router.push('/wallet')} />
        <SidebarItem label="⚙️ Settings" onClick={() => router.push('/settings')} />
        <SidebarItem label="🚪 Log out" onClick={() => router.push('/')} />
      </nav>

      {/* SPACER */}
      <div style={{ flex: 1 }} />

      {/* TIP JAR */}
      <div
        style={{
          borderTop: '1px solid #eee',
          paddingTop: 16,
        }}
      >
        <div
          style={{
            fontWeight: 700,
            marginBottom: 10,
            fontSize: 14,
          }}
        >
          💛 Tip the Artist
        </div>

        <div style={{ display: 'flex', gap: 8 }}>
          {[5, 10, 20].map((amount) => (
            <button
              key={amount}
              onClick={() => handleTip(amount)}
              style={{
                flex: 1,
                padding: '6px 0',
                borderRadius: 8,
                border: '1px solid #ddd',
                background: '#fff',
                fontWeight: 600,
                cursor: 'pointer',
              }}
            >
              ${amount}
            </button>
          ))}
        </div>

        {tipped && (
          <div
            style={{
              marginTop: 8,
              fontSize: 13,
              fontWeight: 600,
              color: '#0a7',
            }}
          >
            Thanks for tipping ${tipped}! 💚
          </div>
        )}
      </div>
    </aside>
  )
}

function SidebarItem({
  label,
  onClick,
}: {
  label: string
  onClick: () => void
}) {
  return (
    <div
      onClick={onClick}
      style={{
        padding: '10px 14px',
        borderRadius: 8,
        fontWeight: 600,
        cursor: 'pointer',
        transition: 'background-color 0.15s ease',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = '#f2f2f2'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = 'transparent'
      }}
    >
      {label}
    </div>
  )
}

