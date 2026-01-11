'use client'

const artists = [
  { name: 'theBeebs', image: '/feed/artist1.jpg', locked: false },
  { name: 'Gaga', image: '/feed/artist2.jpg', locked: false },
  { name: 'Unc Snoop', image: '/feed/artist3.jpg', locked: true },
  { name: 'Bob Marley', image: '/feed/artist4.jpg', locked: true },
]

export default function FeedPage() {
  return (
    <div
      style={{
        maxWidth: 600,
        margin: '40px auto',
        fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont',
      }}
    >
      <h2 style={{ marginBottom: 24 }}>BandMate Feed</h2>

      {artists.map((artist, i) => (
        <div
          key={i}
          style={{
            background: '#fff',
            borderRadius: 14,
            marginBottom: 24,
            overflow: 'hidden',
            boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
          }}
        >
          {/* IMAGE */}
          <img
            src={artist.image}
            alt={artist.name}
            style={{
              width: '100%',
              height: 280,
              objectFit: 'cover',
            }}
          />

          {/* CONTENT */}
          <div style={{ padding: 16 }}>
            <strong style={{ fontSize: 16 }}>{artist.name}</strong>

            <div style={{ marginTop: 8, opacity: 0.7 }}>
              {artist.locked ? '🔒 Locked room' : '🎤 Live now'}
            </div>

            <div
              style={{
                marginTop: 12,
                display: 'flex',
                gap: 16,
                fontSize: 14,
                opacity: 0.6,
              }}
            >
              ❤️ Like 💬 Comment 🎁 Tip
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

