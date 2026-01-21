'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function MyProfilePage() {
  const router = useRouter()
  const [isEditing, setIsEditing] = useState(false)

  // mock user data (replace later with real data)
  const user = {
    name: 'Your Name',
    username: '@bandmateuser',
    avatar: '/feed/ariana.jpg', // placeholder
    bio: 'Artist • Music Lover • BandMate Creator',
    followers: 1280,
    following: 312,
  }

  return (
    <div
      style={{
        minHeight: '100vh',
        background: '#f6f6f6',
        fontFamily: 'system-ui, -apple-system',
      }}
    >
      <div
        style={{
          maxWidth: 900,
          margin: '0 auto',
          padding: '40px 24px',
        }}
      >
        {/* HEADER */}
        <div
          style={{
            background: '#fff',
            borderRadius: 16,
            padding: 32,
            display: 'flex',
            gap: 32,
            alignItems: 'center',
            boxShadow: '0 12px 30px rgba(0,0,0,0.08)',
          }}
        >
          {/* AVATAR */}
          <img
            src={user.avatar}
            alt="Profile avatar"
            style={{
              width: 140,
              height: 140,
              borderRadius: '50%',
              objectFit: 'cover',
              background: '#ddd',
            }}
          />

          {/* INFO */}
          <div style={{ flex: 1 }}>
            <h1 style={{ margin: 0 }}>{user.name}</h1>
            <div style={{ opacity: 0.6 }}>{user.username}</div>

            <p style={{ marginTop: 12 }}>{user.bio}</p>

            {/* STATS */}
            <div
              style={{
                display: 'flex',
                gap: 24,
                marginTop: 16,
                fontWeight: 600,
              }}
            >
              <div>{user.followers} followers</div>
              <div>{user.following} following</div>
            </div>

            {/* ACTIONS */}
            <div style={{ marginTop: 20, display: 'flex', gap: 12 }}>
              <button
                onClick={() => setIsEditing(!isEditing)}
                style={primaryButton}
              >
                {isEditing ? 'Save Profile' : 'Edit Profile'}
              </button>

              <button
                onClick={() => router.push('/feed')}
                style={secondaryButton}
              >
                Back to Feed
              </button>
            </div>
          </div>
        </div>

        {/* CONTENT SECTION */}
        <div style={{ marginTop: 40 }}>
          <h2 style={{ marginBottom: 16 }}>My Videos</h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
              gap: 16,
            }}
          >
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                style={{
                  height: 180,
                  borderRadius: 12,
                  background: '#ddd',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 600,
                }}
              >
                Video {i}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

/* ===== BUTTON STYLES ===== */

const primaryButton = {
  padding: '10px 20px',
  borderRadius: 999,
  border: 'none',
  background: '#000',
  color: '#fff',
  fontWeight: 600,
  cursor: 'pointer',
}

const secondaryButton = {
  padding: '10px 20px',
  borderRadius: 999,
  border: '1px solid #ddd',
  background: '#fff',
  fontWeight: 600,
  cursor: 'pointer',
}

