'use client'

import { useRouter } from 'next/navigation'

export default function SettingsPage() {
  const router = useRouter()

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
          maxWidth: 640,
          margin: '0 auto',
          background: '#fff',
          borderRadius: 16,
          padding: 32,
          boxShadow: '0 12px 30px rgba(0,0,0,0.08)',
        }}
      >
        <h1 style={{ marginBottom: 24 }}>⚙️ Settings</h1>

        {/* ACCOUNT */}
        <Section title="Account">
          <Row label="Change Username" />
          <Row label="Change Email" />
          <Row label="Change Password" />
        </Section>

        {/* PRIVACY */}
        <Section title="Privacy">
          <Row label="Private Profile" />
          <Row label="Blocked Users" />
        </Section>

        {/* NOTIFICATIONS */}
        <Section title="Notifications">
          <Row label="Push Notifications" />
          <Row label="Email Notifications" />
        </Section>

        {/* ACTIONS */}
        <div style={{ marginTop: 32 }}>
          <button
            onClick={() => router.push('/feed')}
            style={{
              width: '100%',
              padding: '12px 0',
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
    </div>
  )
}

/* ===== UI COMPONENTS ===== */

function Section({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <div style={{ marginBottom: 24 }}>
      <h3 style={{ marginBottom: 12 }}>{title}</h3>
      <div
        style={{
          border: '1px solid #eee',
          borderRadius: 12,
          overflow: 'hidden',
        }}
      >
        {children}
      </div>
    </div>
  )
}

function Row({ label }: { label: string }) {
  return (
    <div
      style={{
        padding: '14px 16px',
        borderBottom: '1px solid #eee',
        fontWeight: 500,
        cursor: 'pointer',
      }}
      onMouseEnter={(e) =>
        (e.currentTarget.style.backgroundColor = '#f7f7f7')
      }
      onMouseLeave={(e) =>
        (e.currentTarget.style.backgroundColor = '#fff')
      }
    >
      {label}
    </div>
  )
}
