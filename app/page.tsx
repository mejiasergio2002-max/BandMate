'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'

const THEME = {
  bg: '#0b0b10',
  glow1: 'rgba(255,45,45,0.22)',
  glow2: 'rgba(126,87,255,0.18)',
  panel: 'rgba(255,255,255,0.06)',
  panel2: 'rgba(255,255,255,0.04)',
  border: 'rgba(255,255,255,0.10)',
  text: '#ffffff',
  subtext: 'rgba(255,255,255,0.72)',
  muted: 'rgba(255,255,255,0.55)',
  accent: '#ff2d2d',
}

export default function LandingPage() {
  const router = useRouter()

  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const [first, setFirst] = useState('')
  const [last, setLast] = useState('')
  const [regEmail, setRegEmail] = useState('')
  const [regPass, setRegPass] = useState('')

  return (
    <div style={wrap}>
      <div style={glowBg} />

      <div style={container}>
        {/* LEFT HERO */}
        <div style={left}>
          <div style={logoRow}>
            <img
              src="/logo.png"
              alt="BandMate"
              style={logoImg}
            />
          </div>

          <h1 style={headline}>
            The social stage for bands,
            <br />
            artists, and fans.
          </h1>

          <p style={sub}>
            Go live, drop sessions, get tipped, and unlock exclusive rooms.
            Built for music — designed to feel premium and fast.
          </p>

          <div style={pillRow}>
            <Pill label="🎥 Live sessions" />
            <Pill label="💸 Tips + Wallet" />
            <Pill label="🚪 Groupie rooms" />
            <Pill label="💬 Live chat" />
          </div>

          <div style={ctaRow}>
            <button style={primaryBtn} onClick={() => router.push('/feed')}>
              Enter Feed
            </button>
            <button style={secondaryBtn} onClick={() => router.push('/register')}>
              Create Account
            </button>
          </div>

          <div style={note}>
            Demo navigation for now — auth wiring later.
          </div>
        </div>

        {/* RIGHT AUTH */}
        <div style={right}>
          <AuthCard
            title="Sign In"
            button="Sign In"
            accent
            onClick={() => router.push('/feed')}
          >
            <input
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={input}
            />
            <input
              placeholder="Password"
              type="password"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              style={input}
            />
          </AuthCard>

          <AuthCard
            title="Sign Up"
            subtitle="It’s free. Fans and artists welcome."
            button="Create Account"
            onClick={() => router.push('/feed')}
          >
            <div style={{ display: 'flex', gap: 10 }}>
              <input
                placeholder="First name"
                value={first}
                onChange={(e) => setFirst(e.target.value)}
                style={input}
              />
              <input
                placeholder="Last name"
                value={last}
                onChange={(e) => setLast(e.target.value)}
                style={input}
              />
            </div>

            <input
              placeholder="Email"
              value={regEmail}
              onChange={(e) => setRegEmail(e.target.value)}
              style={input}
            />
            <input
              placeholder="Password"
              type="password"
              value={regPass}
              onChange={(e) => setRegPass(e.target.value)}
              style={input}
            />
          </AuthCard>
        </div>
      </div>
    </div>
  )
}

/* ===== COMPONENTS ===== */

function Pill({ label }: { label: string }) {
  return <div style={pill}>{label}</div>
}

function AuthCard({
  title,
  subtitle,
  button,
  accent,
  onClick,
  children,
}: any) {
  return (
    <div style={card}>
      <div style={cardTitle}>{title}</div>
      {subtitle && <div style={cardSub}>{subtitle}</div>}
      {children}
      <button
        style={accent ? signInBtn : createBtn}
        onClick={onClick}
      >
        {button}
      </button>
    </div>
  )
}

/* ===== STYLES ===== */

const wrap: React.CSSProperties = {
  minHeight: '100vh',
  background: THEME.bg,
  position: 'relative',
  overflow: 'hidden',
  fontFamily: 'system-ui, -apple-system',
  color: THEME.text,
}

const glowBg: React.CSSProperties = {
  position: 'absolute',
  inset: 0,
  background: `radial-gradient(900px 600px at 18% 35%, ${THEME.glow2}, transparent 60%),
              radial-gradient(900px 600px at 92% 20%, ${THEME.glow1}, transparent 55%)`,
  zIndex: 0,
}

const container: React.CSSProperties = {
  position: 'relative',
  zIndex: 1,
  maxWidth: 1200,
  margin: '0 auto',
  padding: '60px 28px',
  display: 'grid',
  gridTemplateColumns: '1.1fr 0.9fr',
  gap: 40,
}

const left: React.CSSProperties = {}

const logoRow: React.CSSProperties = {
  width: 160,
  height: 100,
  borderRadius: 14,
  background: '#ffffff',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: 24,
}

const logoImg: React.CSSProperties = {
  width: 140, // 🔥 Bigger logo now
  height: 'auto',
  objectFit: 'contain',
}

const headline: React.CSSProperties = {
  fontSize: 56,
  fontWeight: 900,
  lineHeight: 1.05,
  margin: '0 0 14px 0',
}

const sub: React.CSSProperties = {
  fontSize: 16,
  lineHeight: 1.6,
  color: THEME.subtext,
  fontWeight: 600,
  maxWidth: 540,
}

const pillRow: React.CSSProperties = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: 10,
  marginTop: 18,
}

const pill: React.CSSProperties = {
  borderRadius: 999,
  border: `1px solid ${THEME.border}`,
  background: 'rgba(255,255,255,0.05)',
  padding: '8px 12px',
  fontSize: 13,
  fontWeight: 700,
}

const ctaRow: React.CSSProperties = {
  display: 'flex',
  gap: 12,
  marginTop: 18,
}

const primaryBtn: React.CSSProperties = {
  padding: '12px 16px',
  borderRadius: 12,
  border: 'none',
  background: THEME.accent,
  color: '#fff',
  fontWeight: 900,
  cursor: 'pointer',
}

const secondaryBtn: React.CSSProperties = {
  padding: '12px 16px',
  borderRadius: 12,
  border: `1px solid ${THEME.border}`,
  background: 'rgba(255,255,255,0.06)',
  color: THEME.text,
  fontWeight: 900,
  cursor: 'pointer',
}

const note: React.CSSProperties = {
  marginTop: 10,
  fontSize: 12,
  color: THEME.muted,
}

const right: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: 16,
}

const card: React.CSSProperties = {
  borderRadius: 18,
  border: `1px solid ${THEME.border}`,
  background: THEME.panel,
  padding: 18,
  backdropFilter: 'blur(10px)',
}

const cardTitle: React.CSSProperties = {
  fontWeight: 900,
  marginBottom: 10,
}

const cardSub: React.CSSProperties = {
  fontSize: 12,
  color: THEME.muted,
  marginBottom: 10,
}

const input: React.CSSProperties = {
  width: '100%',
  padding: '12px 12px',
  borderRadius: 12,
  border: `1px solid ${THEME.border}`,
  background: 'rgba(0,0,0,0.30)',
  color: THEME.text,
  outline: 'none',
  marginBottom: 10,
}

const signInBtn: React.CSSProperties = {
  width: '100%',
  padding: '12px',
  borderRadius: 12,
  border: 'none',
  background: THEME.accent,
  color: '#fff',
  fontWeight: 900,
  cursor: 'pointer',
}

const createBtn: React.CSSProperties = {
  width: '100%',
  padding: '12px',
  borderRadius: 12,
  border: `1px solid ${THEME.border}`,
  background: 'rgba(255,255,255,0.06)',
  color: THEME.text,
  fontWeight: 900,
  cursor: 'pointer',
}