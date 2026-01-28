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
            height: 125,
            width: 'auto',
            objectFit: 'contain',
            display: 'block',
          }}
        />
      </div>

      {/* NAVIGATION */}
      <nav style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        <SidebarItem label="🏠 Home" onClick={() => router.push('/feed')} />
        <SidebarItem label="👤 My Profile" onClick={() => router.push('/profile')} />
        <SidebarItem label="💰 My Wallet" onClick={() => router.push('/wallet')} />
        <SidebarItem label="⚙️ Settings" onClick={() => router.push('/settings')} />
      </nav>

      {/* SPACER */}
      <div style={{ flex: 1 }} />

      {/* TIP JAR LINK */}
      <div
        onClick={() => router.push('/tip-jar')}
        style={{
          borderTop: '1px solid #eee',
          paddingTop: 16,
          cursor: 'pointer',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            fontWeight: 700,
            fontSize: 15,
          }}
        >
          <span style={{ fontSize: 20 }}>🫙</span>
          <span>Tip Jar</span>
        </div>
      </div>

      {/* LOG OUT */}
      <div style={{ marginTop: 20 }}>
        <SidebarItem label="🚪 Log out" onClick={() => router.push('/')} />
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
