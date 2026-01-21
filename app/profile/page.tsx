'use client'

import { useState } from 'react'

export default function ProfilePage() {
  const [isFollowing, setIsFollowing] = useState(false)

  const profile = {
    name: 'Ariana Grande',
    username: '@ariana',
    avatar: '/feed/ariana.jpg',
    bio: 'Singer • Songwriter • Performer',
    genres: ['Pop', 'R&B'],
    followers: '98M',
    following: '1.2K',
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
            display: 'flex',
            gap: 32,
            alignItems: 'center',
            marginBottom: 32,
          }}
        >
          {/* AVATAR */}
          <img
            src={profile.avatar}
            alt={profile.name}
            style={{
              width: 160,
              height: 160,
              borderRadius: '50%',
              objectFit: 'cover',
              background: '#ddd',
            }}
          />

          {/* INFO */}
          <div style={{ flex: 1 }}>
            <h1 style={{ margin: 0 }}>{profile.name}</h1>

            <div style={{ opacity: 0.6, marginTop: 4 }}>
              {profile.username}
            </div>

            <p style={{ marginTop: 12 }}>{profile.bio}</p>

            {/* GENRES */}
            <div style={{ display: 'flex', gap: 8, marginTop: 8 }}>
              {profile.genres.map((genre) => (
                <span
                  key={genre}
                  style={{
                    padding: '4px 10px',
                    borderRadius: 999,
                    background: '#eaeaea',
                    fontSize: 13,
                    fontWeight: 600,
                  }}
                >
                  {genre}
                </span>
              ))}
            </div>

            {/* STATS */}
            <div style={{ display: 'flex', gap: 24, marginTop: 16 }}>
              <strong>{profile.followers} followers</strong>
              <span>{profile.following} following</span>
            </div>

            {/* ACTION */}
            <button
              onClick={() => setIsFollowing(!isFollowing)}
              style={{
                marginTop: 20,
                padding: '10px 22px',
                borderRadius: 999,
                border: 'none',
                background: isFollowing ? '#ddd' : '#000',
                color: isFollowing ? '#000' : '#fff',
                fontWeight: 600,
                cursor: 'pointer',
              }}
            >
              {isFollowing ? 'Following' : 'Follow'}
            </button>
          </div>
        </div>

        {/* CONTENT */}
        <h3 style={{ marginBottom: 16 }}>Videos</h3>

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
  )
}
