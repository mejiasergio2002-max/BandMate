'use client'

export default function FeedPage() {
  const artists = [
    {
      name: 'theBeebs',
      video: '/feed/thebeebs.mp4',
      locked: false,
    },
    {
      name: 'Gaga',
      video: '/feed/gaga.mp4',
      locked: false,
    },
    {
      name: 'Unc Snoop',
      video: '/feed/snoop.mp4',
      locked: false,
    },
    {
      name: 'Bob Marley',
      image: '/feed/artist4.jpg',
      locked: true,
    },
  ]

  return (
    <div
      style={{
        maxWidth: 640,
        margin: '40px auto',
        fontFamily: 'system-ui, -apple-system',
      }}
    >
      <h2 style={{ marginBottom: 24 }}>BandMate Feed</h2>

      {artists.map((artist, index) => (
        <div
          key={index}
          style={{
            background: '#fff',
            borderRadius: 16,
            marginBottom: 28,
            overflow: 'hidden',
            boxShadow: '0 12px 30px rgba(0,0,0,0.1)',
          }}
        >
          {/* MEDIA */}
          <div style={{ position: 'relative' }}>
            {!artist.locked ? (
              <>
                <video
                  src={artist.video}
                  autoPlay
                  muted
                  loop
                  playsInline
                  style={{
                    width: '100%',
                    height: 320,
                    objectFit: 'cover',
                    display: 'block',
                  }}
                />

                {/* LIVE BADGE */}
                <div
                  style={{
                    position: 'absolute',
                    top: 12,
                    left: 12,
                    background: 'red',
                    color: 'white',
                    padding: '4px 10px',
                    borderRadius: 8,
                    fontSize: 12,
                    fontWeight: 700,
                    letterSpacing: 0.5,
                  }}
                >
                  LIVE
                </div>
              </>
            ) : (
              <>
                <img
                  src={artist.image}
                  alt={artist.name}
                  style={{
                    width: '100%',
                    height: 320,
                    objectFit: 'cover',
                    filter: 'grayscale(100%)',
                    display: 'block',
                  }}
                />

                {/* LOCK OVERLAY */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'rgba(0,0,0,0.6)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: 18,
                    fontWeight: 600,
                  }}
                >
                  🔒 Locked Room
                </div>
              </>
            )}
          </div>

          {/* INFO */}
          <div style={{ padding: 16 }}>
            <strong style={{ fontSize: 16 }}>{artist.name}</strong>

            <div style={{ marginTop: 6, opacity: 0.7 }}>
              {artist.locked ? 'Premium session' : 'Live performance'}
            </div>

            <div
              style={{
                marginTop: 12,
                display: 'flex',
                gap: 18,
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

