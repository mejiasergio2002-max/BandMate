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
    // for now, just route to feed (replace with real auth later)
    router.push('/feed')
  }

  const onSignup = (e: React.FormEvent) => {
    e.preventDefault()
    // for now, route to your existing register page
    router.push('/register')
  }

  return (
    <div style={{ minHeight: '100vh', background: '#edf0f5', fontFamily: 'system-ui, -apple-system' }}>
      {/* TOP BAR (facebook-style) */}
      <header
        style={{
          background: '#3b5998',
          color: '#fff',
          height: 88,
          display: 'flex',
          alignItems: 'center',
          padding: '0 28px',
          boxSizing: 'border-box',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, flex: 1 }}>
          <img
            src="/logo.png"
            alt="BandMate"
            style={{
              height: 34,
              width: 'auto',
              objectFit: 'contain',
              filter: 'brightness(0) invert(1)', // makes dark logo appear white-ish on blue (remove if you want original)
            }}
          />
        </div>

        {/* LOGIN FORM (top right) */}
        <form onSubmit={onLogin} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            <label style={topLabel}>Email</label>
            <input
              value={loginEmail}
              onChange={(e) => setLoginEmail(e.target.value)}
              placeholder=""
              style={topInput}
            />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            <label style={topLabel}>Password</label>
            <input
              value={loginPassword}
              onChange={(e) => setLoginPassword(e.target.value)}
              type="password"
              placeholder=""
              style={topInput}
            />
          </div>

          <button type="submit" style={loginBtn}>
            Log In
          </button>
        </form>
      </header>

      {/* BODY */}
      <main
        style={{
          maxWidth: 980,
          margin: '0 auto',
          padding: '34px 18px',
          display: 'grid',
          gridTemplateColumns: '1.2fr 1fr',
          gap: 34,
          boxSizing: 'border-box',
        }}
      >
        {/* LEFT SIDE */}
        <section>
          <h2 style={{ margin: '0 0 14px 0', color: '#1d2a5b', fontSize: 24, fontWeight: 800 }}>
            BandMate helps you connect and share with the people in your life.
          </h2>

          {/* This is your “world-map” equivalent */}
          <img
            src="/landing.jpg"
            alt="BandMate Landing"
            style={{
              width: '100%',
              height: 260,
              objectFit: 'cover',
              borderRadius: 8,
              border: '1px solid rgba(0,0,0,0.08)',
              background: '#fff',
            }}
          />
        </section>

        {/* RIGHT SIDE (Sign Up) */}
        <section
          style={{
            background: 'transparent',
          }}
        >
          <div
            style={{
              background: '#fff',
              borderRadius: 10,
              padding: 18,
              border: '1px solid rgba(0,0,0,0.08)',
            }}
          >
            <h2 style={{ margin: 0, fontSize: 28, fontWeight: 900, color: '#111' }}>Sign Up</h2>
            <div style={{ marginTop: 6, opacity: 0.75 }}>It’s free and anyone can join</div>

            <form onSubmit={onSignup} style={{ marginTop: 14 }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
                <input
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="First name"
                  style={bigInput}
                />
                <input
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="Last name"
                  style={bigInput}
                />
              </div>

              <div style={{ marginTop: 10 }}>
                <input
                  value={signupEmail}
                  onChange={(e) => setSignupEmail(e.target.value)}
                  placeholder="Email"
                  style={bigInput}
                />
              </div>

              <div style={{ marginTop: 10 }}>
                <input
                  value={signupPassword}
                  onChange={(e) => setSignupPassword(e.target.value)}
                  type="password"
                  placeholder="New password"
                  style={bigInput}
                />
              </div>

              <button type="submit" style={signupBtn}>
                Sign Up
              </button>

              <div style={{ marginTop: 10, fontSize: 12, opacity: 0.7 }}>
                By clicking Sign Up, you agree to BandMate’s Terms.
              </div>

              <button
                type="button"
                onClick={() => router.push('/register')}
                style={altLinkBtn}
              >
                Already have a register page? Continue →
              </button>
            </form>
          </div>
        </section>
      </main>
    </div>
  )
}

/* ===== STYLES ===== */

const topLabel: React.CSSProperties = {
  fontSize: 12,
  opacity: 0.95,
}

const topInput: React.CSSProperties = {
  width: 170,
  height: 28,
  borderRadius: 3,
  border: '1px solid rgba(0,0,0,0.25)',
  padding: '0 8px',
  outline: 'none',
}

const loginBtn: React.CSSProperties = {
  height: 30,
  padding: '0 12px',
  borderRadius: 3,
  border: '1px solid rgba(0,0,0,0.25)',
  background: '#4c70ba',
  color: '#fff',
  fontWeight: 700,
  cursor: 'pointer',
  marginTop: 18,
}

const bigInput: React.CSSProperties = {
  width: '100%',
  height: 40,
  borderRadius: 6,
  border: '1px solid rgba(0,0,0,0.18)',
  padding: '0 12px',
  fontSize: 14,
  outline: 'none',
  boxSizing: 'border-box',
}

const signupBtn: React.CSSProperties = {
  width: '100%',
  height: 42,
  borderRadius: 8,
  border: 'none',
  background: '#42b72a',
  color: '#fff',
  fontWeight: 900,
  cursor: 'pointer',
  marginTop: 12,
  fontSize: 16,
}

const altLinkBtn: React.CSSProperties = {
  marginTop: 12,
  width: '100%',
  height: 38,
  borderRadius: 8,
  border: '1px solid rgba(0,0,0,0.12)',
  background: '#fff',
  cursor: 'pointer',
  fontWeight: 700,
}