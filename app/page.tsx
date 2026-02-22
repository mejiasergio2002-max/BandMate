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
              src="/bandmate-landing.jpg"
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
            Go live, drop sessions, get tipped, and unlock exclusive rooms. Built for music — designed to feel premium and fast.
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
          {/* SIGN IN */}
          <div style={card}>
            <div style={cardTitle}>Sign In</div>

            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              style={input}
            />
            <input
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              placeholder="Password"
              type="password"
              style={input}
            />

            <button
              style={signInBtn}
              onClick={() => router.push('/feed')}
            >
              Sign In
            </button>

            <div style={tinyLink} onClick={() => alert('Forgot password flow next')}>
              Forgot password? (next)
            </div>
          </div>

          {/* SIGN UP */}
          <div style={card}>
            <div style={cardTitle}>Sign Up</div>
            <div style={cardSub}>It’s free. Fans and artists welcome.</div>

            <div style={{ display: 'flex', gap: 10 }}>
              <input
                value={first}
                onChange={(e) => setFirst(e.target.value)}
                placeholder="First name"
                style={input}
              />
              <input
                value={last}
                onChange={(e) => setLast(e.target.value)}
                placeholder="Last name"
                style={input}
              />
            </div>

            <input
              value={regEmail}
              onChange={(e) => setRegEmail(e.target.value)}
              placeholder="Email"
              style={input}
            />
            <input
              value={regPass}
              onChange={(e) => setRegPass(e.target.value)}
              placeholder="Password"
              type="password"
              style={input}
            />

            <button
              style={createBtn}
              onClick={() => router.push('/feed')}
            >
              Create Account
            </button>

            <div style={cardFoot}>
              By signing up, you agree to BandMate Terms. (later)
            </div>
          </div>

          {/* BOTTOM INFO */}
          <div style={infoCard}>
            <div style={infoIcon}>🎵</div>
            <div>
              <div style={infoTitle}>Tip-powered creator economy</div>
              <div style={infoSub}>Fans tip directly, artists earn instantly (payments next).</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ===== SMALL COMPONENTS ===== */

function Pill({ label }: { label: string }) {
  return (
    <div style={pill}>
      {label}
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
  maxWidth: 1240,
  margin: '0 auto',
  padding: '56px 28px',
  display: 'grid',
  gridTemplateColumns: '1.1fr 0.9fr',
  gap: 36,
  alignItems: 'start',
}

const left: React.CSSProperties = {
  paddingTop: 10,
}

const logoRow: React.CSSProperties = {
  width: 140,
  height: 90,
  borderRadius: 14,
  background: 'rgba(255,255,255,0.95)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: 20,
  border: '1px solid rgba(0,0,0,0.06)',
}

const logoImg: React.CSSProperties = {
  // ✅ BIGGER LOGO (your request)
  width: 110, // bump this up/down anytime (110–160 looks great)
  height: 'auto',
  objectFit: 'contain',
  userSelect: 'none',
  filter: 'drop-shadow(0 10px 26px rgba(255,45,45,0.18))',
}

const headline: React.CSSProperties = {
  fontSize: 56,
  lineHeight: 1.05,
  margin: '0 0 14px 0',
  fontWeight: 950,
  letterSpacing: '-0.02em',
}

const sub: React.CSSProperties = {
  margin: 0,
  maxWidth: 560,
  fontSize: 16,
  lineHeight: 1.6,
  color: THEME.subtext,
  fontWeight: 700,
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
  fontWeight: 850,
  color: THEME.text,
}

const ctaRow: React.CSSProperties = {
  display: 'flex',
  gap: 12,
  marginTop: 18,
  alignItems: 'center',
}

const primaryBtn: React.CSSProperties = {
  padding: '12px 16px',
  borderRadius: 12,
  border: 'none',
  background: THEME.accent,
  color: '#fff',
  fontWeight: 1000,
  cursor: 'pointer',
  boxShadow: '0 14px 34px rgba(255,45,45,0.20)',
}

const secondaryBtn: React.CSSProperties = {
  padding: '12px 16px',
  borderRadius: 12,
  border: `1px solid ${THEME.border}`,
  background: 'rgba(255,255,255,0.06)',
  color: THEME.text,
  fontWeight: 1000,
  cursor: 'pointer',
}

const note: React.CSSProperties = {
  marginTop: 10,
  fontSize: 12,
  fontWeight: 750,
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
  boxShadow: '0 18px 50px rgba(0,0,0,0.35)',
  backdropFilter: 'blur(10px)',
}

const cardTitle: React.CSSProperties = {
  fontSize: 18,
  fontWeight: 1000,
  marginBottom: 10,
}

const cardSub: React.CSSProperties = {
  fontSize: 12,
  fontWeight: 800,
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
  fontWeight: 800,
  marginBottom: 10,
}

const signInBtn: React.CSSProperties = {
  width: '100%',
  padding: '12px 14px',
  borderRadius: 12,
  border: 'none',
  background: THEME.accent,
  color: '#fff',
  fontWeight: 1000,
  cursor: 'pointer',
  marginTop: 4,
}

const createBtn: React.CSSProperties = {
  width: '100%',
  padding: '12px 14px',
  borderRadius: 12,
  border: `1px solid ${THEME.border}`,
  background: 'rgba(255,255,255,0.06)',
  color: THEME.text,
  fontWeight: 1000,
  cursor: 'pointer',
  marginTop: 4,
}

const tinyLink: React.CSSProperties = {
  marginTop: 10,
  fontSize: 12,
  fontWeight: 850,
  color: THEME.muted,
  textAlign: 'center',
  cursor: 'pointer',
}

const cardFoot: React.CSSProperties = {
  marginTop: 10,
  fontSize: 11,
  fontWeight: 750,
  color: THEME.muted,
}

const infoCard: React.CSSProperties = {
  borderRadius: 18,
  border: `1px solid ${THEME.border}`,
  background: THEME.panel2,
  padding: 16,
  display: 'flex',
  gap: 12,
  alignItems: 'center',
  backdropFilter: 'blur(10px)',
}

const infoIcon: React.CSSProperties = {
  width: 40,
  height: 40,
  borderRadius: 12,
  border: `1px solid ${THEME.border}`,
  background: 'rgba(255,255,255,0.06)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: 18,
}

const infoTitle: React.CSSProperties = {
  fontWeight: 1000,
  fontSize: 14,
}

const infoSub: React.CSSProperties = {
  fontWeight: 800,
  fontSize: 12,
  color: THEME.muted,
  marginTop: 2,
}