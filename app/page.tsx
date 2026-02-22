'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function LandingPage() {
  const router = useRouter()

  const [loginEmail, setLoginEmail] = useState('')
  const [loginPassword, setLoginPassword] = useState('')

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [signupEmail, setSignupEmail] = useState('')
  const [signupPassword, setSignupPassword] = useState('')

  const onLogin = (e: React.FormEvent) => {
    e.preventDefault()
    router.push('/feed')
  }

  const onSignup = (e: React.FormEvent) => {
    e.preventDefault()
    router.push('/register')
  }

  return (
    <div style={page}>
      {/* BACKGROUND GLOW */}
      <div style={glowA} />
      <div style={glowB} />

      <header style={header}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <img
            src="/logo.png"
            alt="BandMate"
            style={{ height: 38, width: 'auto', objectFit: 'contain' }}
          />
          <div style={{ lineHeight: 1.05 }}>
            <div style={{ fontWeight: 900, letterSpacing: 0.2 }}>BandMate</div>
            <div style={{ fontSize: 12, opacity: 0.75 }}>
              Live sessions • Tips • Groupie rooms
            </div>
          </div>
        </div>

        <button
          onClick={() => router.push('/feed')}
          style={ghostBtn}
          type="button"
        >
          Explore Feed →
        </button>
      </header>

      <main style={main}>
        {/* LEFT HERO */}
        <section style={hero}>
          <h1 style={heroTitle}>
            Your stage.
            <br />
            Your crowd.
            <br />
            Your money.
          </h1>

          <p style={heroSub}>
            BandMate is where bands go live, fans tip in real-time, and exclusive
            rooms unlock the best moments.
          </p>

          {/* IMAGE - GUARANTEED NOT CROPPED */}
          <div style={heroMedia}>
            <img
              src="/landing.jpg"
              alt="BandMate Landing"
              style={heroImg}
              onError={(e) => {
                // if the image path is wrong, show an obvious fallback
                ;(e.currentTarget as HTMLImageElement).style.display = 'none'
              }}
            />
            <div style={heroMediaHint}>
              If you don’t see the image, confirm it’s at <b>public/landing.jpg</b>
            </div>
          </div>

          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            <button
              onClick={() => router.push('/register')}
              style={primaryBtn}
              type="button"
            >
              Create account
            </button>
            <button
              onClick={() => router.push('/feed')}
              style={secondaryBtn}
              type="button"
            >
              Watch sessions
            </button>
          </div>
        </section>

        {/* RIGHT AUTH */}
        <section style={authCol}>
          {/* SIGN IN */}
          <div style={card}>
            <div style={cardTitle}>Sign In</div>
            <div style={cardSub}>Welcome back. Let’s get you in.</div>

            <form onSubmit={onLogin} style={{ marginTop: 14 }}>
              <label style={label}>Email</label>
              <input
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
                style={input}
                placeholder="you@example.com"
              />

              <label style={{ ...label, marginTop: 10 }}>Password</label>
              <input
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
                style={input}
                type="password"
                placeholder="••••••••"
              />

              <button type="submit" style={{ ...primaryBtn, width: '100%', marginTop: 12 }}>
                Sign In
              </button>
            </form>
          </div>

          {/* SIGN UP */}
          <div style={card}>
            <div style={cardTitle}>Sign Up</div>
            <div style={cardSub}>It’s free. Start performing today.</div>

            <form onSubmit={onSignup} style={{ marginTop: 14 }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
                <div>
                  <label style={label}>First name</label>
                  <input
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    style={input}
                    placeholder="Sergio"
                  />
                </div>
                <div>
                  <label style={label}>Last name</label>
                  <input
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    style={input}
                    placeholder="Mejia"
                  />
                </div>
              </div>

              <label style={{ ...label, marginTop: 10 }}>Email</label>
              <input
                value={signupEmail}
                onChange={(e) => setSignupEmail(e.target.value)}
                style={input}
                placeholder="you@example.com"
              />

              <label style={{ ...label, marginTop: 10 }}>Password</label>
              <input
                value={signupPassword}
                onChange={(e) => setSignupPassword(e.target.value)}
                style={input}
                type="password"
                placeholder="Create a password"
              />

              <button type="submit" style={{ ...primaryBtn, width: '100%', marginTop: 12 }}>
                Create account
              </button>

              <div style={{ marginTop: 10, fontSize: 12, opacity: 0.75 }}>
                By signing up, you agree to BandMate’s Terms.
              </div>
            </form>
          </div>
        </section>
      </main>
    </div>
  )
}

/* ===== STYLES ===== */

const page: React.CSSProperties = {
  minHeight: '100vh',
  background: '#070A12',
  color: '#fff',
  fontFamily: 'system-ui, -apple-system',
  position: 'relative',
  overflow: 'hidden',
}

const glowA: React.CSSProperties = {
  position: 'absolute',
  width: 700,
  height: 700,
  borderRadius: 999,
  background: 'rgba(0, 255, 170, 0.18)',
  filter: 'blur(90px)',
  top: -240,
  left: -220,
  pointerEvents: 'none',
}

const glowB: React.CSSProperties = {
  position: 'absolute',
  width: 760,
  height: 760,
  borderRadius: 999,
  background: 'rgba(110, 70, 255, 0.22)',
  filter: 'blur(95px)',
  bottom: -300,
  right: -260,
  pointerEvents: 'none',
}

const header: React.CSSProperties = {
  height: 76,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '0 22px',
  borderBottom: '1px solid rgba(255,255,255,0.08)',
  background: 'rgba(7,10,18,0.7)',
  backdropFilter: 'blur(10px)',
  position: 'sticky',
  top: 0,
  zIndex: 5,
}

const main: React.CSSProperties = {
  maxWidth: 1100,
  margin: '0 auto',
  padding: '34px 18px 54px',
  display: 'grid',
  gridTemplateColumns: '1.2fr 1fr',
  gap: 18,
  boxSizing: 'border-box',
}

const hero: React.CSSProperties = {
  padding: 22,
}

const heroTitle: React.CSSProperties = {
  margin: 0,
  fontSize: 44,
  lineHeight: 1.02,
  fontWeight: 950,
  letterSpacing: -0.8,
}

const heroSub: React.CSSProperties = {
  marginTop: 12,
  marginBottom: 18,
  maxWidth: 520,
  opacity: 0.82,
  lineHeight: 1.45,
}

const heroMedia: React.CSSProperties = {
  marginTop: 14,
  marginBottom: 18,
  width: '100%',
  maxWidth: 640,
  borderRadius: 16,
  border: '1px solid rgba(255,255,255,0.10)',
  background: 'rgba(255,255,255,0.05)',
  overflow: 'hidden',
  padding: 14,
  boxSizing: 'border-box',
}

const heroImg: React.CSSProperties = {
  width: '100%',
  height: 320,
  objectFit: 'contain', // ✅ NO CROPPING
  borderRadius: 12,
  background: 'rgba(0,0,0,0.22)',
}

const heroMediaHint: React.CSSProperties = {
  marginTop: 10,
  fontSize: 12,
  opacity: 0.75,
}

const authCol: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: 14,
  padding: 22,
}

const card: React.CSSProperties = {
  borderRadius: 16,
  padding: 18,
  border: '1px solid rgba(255,255,255,0.10)',
  background: 'rgba(255,255,255,0.06)',
  boxShadow: '0 18px 55px rgba(0,0,0,0.35)',
}

const cardTitle: React.CSSProperties = {
  fontSize: 18,
  fontWeight: 900,
}

const cardSub: React.CSSProperties = {
  marginTop: 6,
  fontSize: 13,
  opacity: 0.78,
}

const label: React.CSSProperties = {
  display: 'block',
  fontSize: 12,
  opacity: 0.78,
  marginBottom: 6,
}

const input: React.CSSProperties = {
  width: '100%',
  height: 40,
  borderRadius: 10,
  border: '1px solid rgba(255,255,255,0.12)',
  background: 'rgba(0,0,0,0.25)',
  color: '#fff',
  padding: '0 12px',
  outline: 'none',
  boxSizing: 'border-box',
}

const primaryBtn: React.CSSProperties = {
  height: 44,
  padding: '0 16px',
  borderRadius: 999,
  border: 'none',
  cursor: 'pointer',
  fontWeight: 900,
  background: 'linear-gradient(90deg, #00ffad, #6e46ff)',
  color: '#0b0f1a',
}

const secondaryBtn: React.CSSProperties = {
  height: 44,
  padding: '0 16px',
  borderRadius: 999,
  border: '1px solid rgba(255,255,255,0.16)',
  cursor: 'pointer',
  fontWeight: 800,
  background: 'rgba(255,255,255,0.06)',
  color: '#fff',
}

const ghostBtn: React.CSSProperties = {
  height: 40,
  padding: '0 14px',
  borderRadius: 999,
  border: '1px solid rgba(255,255,255,0.16)',
  background: 'rgba(255,255,255,0.06)',
  color: '#fff',
  fontWeight: 800,
  cursor: 'pointer',
}