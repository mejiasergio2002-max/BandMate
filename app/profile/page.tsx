'use client'

import LeftSidebar from '../components/sidebar/LeftSidebar'

export default function ProfilePage() {
  const user = {
    name: 'BandMate User',
    username: '@bandmate',
    avatar: '/feed/ariana.jpg',
    bio: 'Artist • Music Lover • Creator',
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
      {/* LEFT SIDEBAR */}
      <LeftSidebar />

      {/* PROFILE CONTENT */}
      <main style={{ flex: 1, padding: 40 }}>
        <div
          style={{
            maxWidth: 900,
            background: '#fff',
            borderRadius: 16,
            padding: 32,
            boxShadow: '0 12px 30px rgba(0,0,0,0.08)',
          }}
        >
          {/* HEADER */}
          <div style={{ display: 'flex', gap: 32 }}>
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
            </div>
          </div>

          {/* CONTENT */}
          <div style={{ marginTop: 40 }}>
            <h2>My Videos</h2>

            <div
              style={{
                marginTop: 16,
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
      </main>
    </div>
  )
}
