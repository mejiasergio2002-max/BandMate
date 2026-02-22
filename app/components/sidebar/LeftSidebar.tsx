'use client'

import { useRouter } from 'next/navigation'

const SIDEBAR_THEME = {
  bg: '#0f0f16',
  panel: 'rgba(255,255,255,0.04)',
  border: 'rgba(255,255,255,0.08)',
  text: '#ffffff',
  muted: 'rgba(255,255,255,0.65)',
  accent: '#ff2d2d',
}

export default function LeftSidebar() {
  const router = useRouter()

  return (
    <aside
      style={{
        width: 260,
        background: SIDEBAR_THEME.bg,
        borderRight: `1px solid ${SIDEBAR_THEME.border}`,
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
            height: 100,
            width: 'auto',
            objectFit: 'contain',
            userSelect: 'none',
            filter: 'drop-shadow(0 6px 18px rgba(255,45,45,0.25))',
          }}
        />
      </div>

      {/* NAVIGATION */}
      <nav
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 10,
        }}
      >
        <Item label="🏠 Home" onClick={() => router.push('/feed')} />
        <Item label="👤 My Profile" onClick={() => router.push('/profile')} />
        <Item label="💰 My Wallet" onClick={() => router.push('/wallet')} />
        <Item label="⚙️ Settings" onClick={() => router.push('/settings')} />
        <Item label="🫙 Tip Jar" onClick={() => router.push('/tip-jar')} />

        <div style={{ flex: 1 }} />

        <Item label="🚪 Log out" onClick={() => router.push('/')} danger />
      </nav>
    </aside>
  )
}

function Item({
  label,
  onClick,
  danger = false,
}: {
  label: string
  onClick: () => void
  danger?: boolean
}) {
  return (
    <div
      onClick={onClick}
      style={{
        padding: '12px 16px',
        borderRadius: 12,
        fontWeight: 700,
        cursor: 'pointer',
        transition: 'all 0.15s ease',
        color: danger ? '#ff4d4d' : SIDEBAR_THEME.text,
        border: `1px solid ${SIDEBAR_THEME.border}`,
        background: SIDEBAR_THEME.panel,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.08)'
        e.currentTarget.style.transform = 'translateX(4px)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = SIDEBAR_THEME.panel
        e.currentTarget.style.transform = 'translateX(0px)'
      }}
    >
      {label}
    </div>
  )
}