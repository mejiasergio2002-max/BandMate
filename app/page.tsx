'use client'

import { useRouter } from 'next/navigation'

// ===== THEME (LOCAL) =====
const THEME = {
  bg: '#0b0b10',
  glow1: 'rgba(255,45,45,0.22)',
  glow2: 'rgba(126,87,255,0.18)',
  panel: 'rgba(255,255,255,0.06)',
  border: 'rgba(255,255,255,0.10)',
  text: '#ffffff',
  subtext: 'rgba(255,255,255,0.72)',
  muted: 'rgba(255,255,255,0.55)',
  accent: '#ff2d2d',
}

export default function LandingPage() {
  const router = useRouter()

  return (
    <div style={wrap}>
      <div style={glowBg} />

      <div style={grid}>
        {/* LEFT */}
        <div style={{ padding: 18, position: 'relative', zIndex: 1 }}>
          <img
            src="/logo.png"
            alt="BandMate"
            style={{
              height: 64,
              width: 'auto',
              objectFit: 'contain',
              display: 'block',
              marginBottom: 16,
              filter: 'drop-shadow(0 14px 30px rgba(0,0,0,0.18))',
            }}
          />

          <h1 style={h1}>
            The social stage for bands, artists, and fans.
          </h1>

          <p style={p}>
            Go live, drop sessions, get tipped, and unlock exclusive rooms.
            Built for music — designed to feel premium and fast.
          </p>

          <div style={{ marginTop: 18, display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            <Pill>🎥 Live sessions</Pill>
            <Pill>💸 Tips + Wallet</Pill>
            <Pill>🚪 Groupie rooms</Pill>
            <Pill>🗨️ Live chat</Pill>
          </div>

          <div style={{ marginTop: 22, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <button onClick={() => router.push('/feed')} style={btnPrimary}>
              Enter Feed
            </button>
            <button onClick={() => router.push('/register')} style={btnGhost}>
              Create Account
            </button>
          </div>

          <div style={{ marginTop: 12, color: THEME.muted, fontSize: 12 }}>
            Demo navigation for now — auth wiring later.
          </div>
        </div>

        {/* RIGHT */}
        <div style={{ display: 'grid', gap: 14, position: 'relative', zIndex: 1 }}>
          <div style={card}>
            <div style={cardTitle}>Sign In</div>

            <div style={{ display: 'grid', gap: 10 }}>
              <Input placeholder="Email" />
              <Input placeholder="Password" type="password" />
              <button onClick={() => router.push('/feed')} style={{ ...btnPrimary, width: '100%' }}>
                Sign In
              </button>
              <div style={{ fontSize: 12, color: THEME.muted, textAlign: 'center' }}>
                Forgot password? (next)
              </div>
            </div>
          </div>

          <div style={card}>
            <div style={cardTitle}>Sign Up</div>
            <div style={{ color: THEME.subtext, fontSize: 12, marginBottom: 12 }}>
              It’s free. Fans and artists welcome.
            </div>

            <div style={{ display: 'grid', gap: 10 }}>
              <div style={{ display: 'flex', gap: 10 }}>
                <Input placeholder="First name" />
                <Input placeholder="Last name" />
              </div>

              <Input placeholder="Email" />
              <Input placeholder="Password" type="password" />

              <button onClick={() => router.push('/register')} style={{ ...btnGhost, width: '100%' }}>
                Create Account
              </button>

              <div style={{ fontSize: 12, color: THEME.muted }}>
                By signing up, you agree to BandMate Terms. (later)
              </div>
            </div>
          </div>

          <div style={{ ...card, padding: 16, display: 'flex', gap: 12, alignItems: 'center' }}>
            <div
              style={{
                width: 44,
                height: 44,
                borderRadius: 12,
                background: 'rgba(255,255,255,0.06)',
                border: `1px solid ${THEME.border}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 1000,
              }}
            >
              🎵
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 900, color: THEME.text }}>Tip-powered creator economy</div>
              <div style={{ color: THEME.subtext, fontSize: 12 }}>
                Fans tip directly, artists earn instantly (payments next).
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        padding: '8px 12px',
        borderRadius: 999,
        border: `1px solid ${THEME.border}`,
        background: 'rgba(255,255,255,0.06)',
        color: THEME.text,
        fontWeight: 800,
        fontSize: 12,
      }}
    >
      {children}
    </div>
  )
}

function Input(props: any) {
  return (
    <input
      {...props}
      style={{
        width: '100%',
        padding: '12px 12px',
        borderRadius: 12,
        border: `1px solid ${THEME.border}`,
        background: 'rgba(0,0,0,0.35)',
        color: THEME.text,
        outline: 'none',
        fontWeight: 650,
      }}
    />
  )
}

/* ===== STYLES ===== */

const wrap: React.CSSProperties = {
  minHeight: '100vh',
  background: THEME.bg,
  position: 'relative',
  overflow: 'hidden',
  fontFamily: 'system-ui, -apple-system',
}

const glowBg: React.CSSProperties = {
  position: 'absolute',
  inset: 0,
  background: `radial-gradient(900px 600px at 15% 20%, ${THEME.glow2}, transparent 60%),
              radial-gradient(900px 600px at 85% 10%, ${THEME.glow1}, transparent 55%)`,
  zIndex: 0,
}

const grid: React.CSSProperties = {
  position: 'relative',
  zIndex: 1,
  minHeight: '100vh',
  display: 'grid',
  gridTemplateColumns: '1.25fr 1fr',
  gap: 28,
  padding: 32,
  alignItems: 'center',
  maxWidth: 1200,
  margin: '0 auto',
}

const h1: React.CSSProperties = {
  margin: 0,
  fontSize: 46,
  lineHeight: 1.05,
  fontWeight: 1000,
  letterSpacing: -0.8,
  color: THEME.text,
}

const p: React.CSSProperties = {
  marginTop: 14,
  color: THEME.subtext,
  fontSize: 16,
  maxWidth: 520,
}

const card: React.CSSProperties = {
  borderRadius: 18,
  border: `1px solid ${THEME.border}`,
  background: THEME.panel,
  padding: 18,
  boxShadow: '0 16px 40px rgba(0,0,0,0.35)',
  backdropFilter: 'blur(10px)',
}

const cardTitle: React.CSSProperties = {
  fontWeight: 1000,
  fontSize: 16,
  marginBottom: 10,
  color: THEME.text,
}

const btnPrimary: React.CSSProperties = {
  padding: '12px 16px',
  borderRadius: 12,
  border: 'none',
  background: THEME.accent,
  color: '#fff',
  fontWeight: 1000,
  cursor: 'pointer',
  boxShadow: '0 12px 30px rgba(255,45,45,0.22)',
}

const btnGhost: React.CSSProperties = {
  padding: '12px 16px',
  borderRadius: 12,
  border: `1px solid ${THEME.border}`,
  background: 'rgba(255,255,255,0.06)',
  color: THEME.text,
  fontWeight: 1000,
  cursor: 'pointer',
}