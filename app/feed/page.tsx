'use client'

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

      {[
        { name: 'theBeebs', locked: false },
        { name: 'Gaga', locked: false },
        { name: 'Unc Snoop', locked: true },
        { name: 'Bob Marley', locked: true },
      ].map((artist, i) => (
        <div
          key={i}
          style={{
            background: '#fff',
            borderRadius: 12,
            padding: 16,
            marginBottom: 16,
            boxShadow: '0 8px 24px rgba(0,0,0,0.06)',
          }}
        >
          <strong>{artist.name}</strong>
          <div style={{ marginTop: 8, opacity: 0.7 }}>
            {artist.locked ? '🔒 Locked room' : '🎤 Live now'}
          </div>
        </div>
      ))}
    </div>
  )
}

