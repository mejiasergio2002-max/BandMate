'use client'

import { useState } from 'react'
import LeftSidebar from '../components/sidebar/LeftSidebar'

export default function MyProfilePage() {
  const [isEditing, setIsEditing] = useState(false)

  const user = {
    name: 'Your Name',
    username: '@bandmateuser',
    avatar: '/feed/ariana.jpg',
    bio: 'Artist • Music Lover • BandMate Creator',
    followers: 1280,
    following: 312,
  }

  return (
    <div
      style={{
        display: 'flex',
        minHeight: '100vh',
        background: '#f6f6f6',
        fontFamily: 'system-ui, -apple-system',
      }}
    >
      <LeftSidebar />

      <main style={{ flex: 1, padding: 40 }}>
        <div
          style={{
            background: '#fff',
            borderRadius: 16,
            padding: 32,
            boxShadow: '0 12px 30px rgba(0,0,0,0.08)',
            maxWidth: 900,
          }}
        >
          <div style={{ display: 'flex', gap: 32 }}>
            <img
              src={user.avatar}
              alt="Profile"
              style={{
                width: 140,
                height: 140,
                borderRadius: '50%',
                objectFit: 'cover',
              }}
            />

            <div>
              <h1 style={{ margin: 0 }}>{user.name}</h1>
              <div style={{ opacity: 0.6 }}>{user.username}</div>

              <p style={{ marginTop: 12 }}>{user.bio}</p>

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

              <button
                onClick={() => setIsEditing(!isEditing)}
                style={{
                  marginTop: 20,
                  padding: '10px 20px',
                  borderRadius: 999,
                  border: 'none',
                  background: '#000',
                  color: '#fff',
                  fontWeight: 600,
                  cursor: 'pointer',
                }}
              >
                {isEditing ? 'Save Profile' : 'Edit Profile'}
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
