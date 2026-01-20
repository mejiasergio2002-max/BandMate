'use client'

import { useRef, useState } from 'react'
import { useRouter } from 'next/navigation'

export default function FeedPage() {
  const router = useRouter()

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
        display: 'flex',
        minHeight: '100vh',
        fontFamily: 'system-ui, -apple-system',
        background: '#f6f6f6',
      }}
    >
      {/* SIDEBAR */}
      <aside
        style={{
          width: 220,
          background: '#fff',
          borderRight: '1px solid #eee',
          padding: 20,
          position: 'sticky',
          top: 0,
          height: '100vh',
        }}
      >
        {/* LOGO / RADIO HOME */}
        <div
          onClick={() => router.push('/feed')}
          style={{
            fontSize: 22,
            fontWeight: 800,
            marginBottom: 32,
            cursor: 'pointer',
          }}
        >
          🎵 BandMate
        </div>

        {/* NAV */}
        <nav style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          <NavItem label="📻 Radio Feed" />
          <NavItem label="🔥 Live Now" />
          <NavItem label="⭐ Favorites" />
          <NavItem label="💸 Top Tipped" />
        </nav>
      </aside>

      {/* FEED */}
      <main
        style={{
          flex: 1,
          padding: '32px 24px',
          maxWidth: 720,
          margin: '0 auto',
        }}
      >
        {artists.map((artist, index) => (
          <FeedCard key={index} artist={artist} />
        ))}
      </main>
    </div>
  )
}

function NavItem({ label }: { label: string }) {
  return (
    <div
      style={{
        padding: '10px 12px',
        borderRadius: 10,
        cursor: 'pointer',
        fontWeight: 600,
        color: '#333',
      }}
    >
      {label}
    </div>
  )
}

function FeedCard({ artist }: any) {
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const [playing, setPlaying] = useState(false)
  const [tipped, setTipped] = useState<number | null>(null)

  const togglePlay = () => {
    if (!videoRef.current) return

    if (playing) {
      videoRef.current.pause()
      setPlaying(false)
    } else {
      videoRef.current.play()
      setPlaying(true)
    }
  }

  const tips = [10, 20, 50, 100]

  return (
    <div
      style={{
        background: '#fff',
        borderRadius: 16,
        marginBottom: 32,
        overflow: 'hidden',
        boxShadow: '0 12px 30px rgba(0,0,0,0.08)',
      }}
    >
      {/* MEDIA */}
      <div style={{ position: 'relative' }}>
        {!artist.locked ? (
          <>
            <video
              ref={videoRef}
              src={artist.video}
              playsInline
              preload="metadata"
              onEnded={() => setPlaying(false)}
              style={{
                width: '100%',
                height: 320,
                objectFit: 'cover',
                background: '#000',
              }}
            />

            {/* PLAY / PAUSE */}
            <div
              onClick={togglePlay}
              style={{
                position: 'absolute',
                inset: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                background: playing
                  ? 'rgba(0,0,0,0.15)'
                  : 'rgba(0,0,0,0.35)',
              }}
            >
              <div
                style={{
                  width: 64,
                  height: 64,
                  borderRadius: '50%',
                  background: 'rgba(255,255,255,0.9)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 26,
                  fontWeight: 700,
                }}
              >
                {playing ? '⏸' : '▶'}
              </div>
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
              }}
            />

            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'rgba(0,0,0,0.6)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
                fontSize: 18,
                fontWeight: 600,
              }}
            >
              🔒 Locked Room
            </div>
          </>
        )}
      </div>

      {/* INFO + TIP JAR */}
      <div style={{ padding: 18 }}>
        <strong style={{ fontSize: 16 }}>{artist.name}</strong>

        <div style={{ marginTop: 6, opacity: 0.7 }}>
          {artist.locked ? 'Premium session' : playing ? 'Playing' : 'Paused'}
        </div>

        {!artist.locked && (
          <div style={{ marginTop: 18 }}>
            <div style={{ marginBottom: 8, fontSize: 14, opacity: 0.7 }}>
              Tip the artist
            </div>

            <div style={{ display: 'flex', gap: 10 }}>
              {tips.map((amount) => (
                <button
                  key={amount}
                  onClick={() => setTipped(amount)}
                  style={{
                    flex: 1,
                    padding: '8px 0',
                    borderRadius: 10,
                    border:
                      tipped === amount
                        ? '2px solid #000'
                        : '1px solid #ddd',
                    background:
                      tipped === amount ? '#000' : '#fff',
                    color:
                      tipped === amount ? '#fff' : '#000',
                    fontWeight: 600,
                    cursor: 'pointer',
                  }}
                >
                  ${amount}
                </button>
              ))}
            </div>

            {tipped && (
              <div
                style={{
                  marginTop: 10,
                  fontSize: 14,
                  color: '#0a7',
                  fontWeight: 600,
                }}
              >
                💛 Thanks for the ${tipped} tip!
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

