'use client'

import { useRouter } from 'next/navigation'

export default function LeftSidebar() {
  const router = useRouter()

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
          marginBottom: 32,
          cursor: 'pointer',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <img
          src="/logo.png"
          alt="BandMate"
          style={{
            height: 100, // 3/4 size (stable)
            width: 'auto',
            objectFit: 'contain',
            userSelect: 'none',
          }}
        />
      </div>

      {/* NAVIGATION */}
      <nav
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 12,
        }}
      >
        <Item label="🏠 Home" onClick={() => router.push('/feed')} />
        <Item label="👤 My Profile" onClick={() => router.push('/profile')} />
        <Item label="💰 My Wallet" onClick={() => router.push('/wallet')} />
        <Item label="⚙️ Settings" onClick={() => router.push('/settings')} />

        {/* 👇 TIP JAR UNDER SETTINGS */}
        <Item label="🫙 Tip Jar" onClick={() => router.push('/tip-jar')} />

        <Item label="🚪 Log out" onClick={() => router.push('/')} />
      </nav>
    </aside>
  )
}

function Item({
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
