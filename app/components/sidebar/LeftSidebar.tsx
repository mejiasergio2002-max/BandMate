'use client'

import { useRouter } from 'next/navigation'

export default function LeftSidebar() {
  const router = useRouter()

  return (
    <aside
      style={{
        width: 260,
        background: '#fff',
        borderRight: '1px solid #eee',
        padding: 20,
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        position: 'sticky',
        top: 0,
      }}
    >
      {/* LOGO / HOME */}
      <div
        onClick={() => router.push('/feed')}
        style={{
          fontSize: 22,
          fontWeight: 800,
          marginBottom: 28,
          cursor: 'pointer',
        }}
      >
        🎵 BandMate
      </div>

      {/* NAVIGATION */}
      <nav style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
        <NavItem
          label="🏠 Home"
          onClick={() => router.push('/feed')}
        />

        <NavItem
          label="👤 My Profile"
          onClick={() => router.push('/profile')}
        />

        <NavItem
          label="💰 My Wallet"
          onClick={() => router.push('/wallet')}
        />

        <NavItem
          label="⚙️ Settings"
          onClick={() => router.push('/settings')}
        />

        <NavItem
          label="🚪 Log out"
          onClick={() => router.push('/')}
        />
      </nav>
    </aside>
  )
}

function NavItem({
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
        borderRadius: 10,
        fontWeight: 600,
        cursor: 'pointer',
        transition: 'background 0.15s',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = '#f2f2f2'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = 'transparent'
      }}
    >
      {label}
    </div>
  )
}

