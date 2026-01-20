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

  const liveNow = [
    {
      name: 'Drake',
      avatar: '/feed/drake.jpg',
    },
    {
      name: 'Billie',
      avatar: '/feed/billie.jpg',
    },
    {
      name: 'Posty',
      avatar: '/feed/posty.jpg',
    },
  ]

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
      <aside
        style={{
          width: 220,
          background: '#fff',
          borderRight: '1px solid #eee',
          padding: 20,
        }}
      >
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

        <nav style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          <NavItem label="📻 Radio Feed" />
          <NavItem label="🔥 Live Now" />
          <NavItem label="⭐ Favorites" />
          <NavItem label="💸 Top Tipped" />
        </nav>
      </aside>

      {/* MAIN FEED */}
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

      {/* RIGHT SIDEBAR */}
      <aside
        style={{
          width: 260,
          background: '#fff',
          borderLeft: '1px solid #eee',
          padding: 24,
        }}
      >
        <div style={{ fontWeight: 800, marginBottom: 16 }}>
          🔴 LIVE WITH ME NOW
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {liveNow.map((user, index) => (
            <LiveProfile key={index} user={user} />
          ))}
        </div>
      </aside>
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
      }}
    >
      {label}
    </div>
  )
}

function LiveProfile({ user }: any) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        cursor: 'pointer',
      }}
    >
      <div style={{ position: 'relative' }}>
        <img
          src={user.avatar}
          alt={user.name}
          style={{
            width: 52,
            height: 52,
            borderRadius: '50%',
            objectFit: 'cover',
          }}
        />

        {/* LIVE DOT */}
        <span
          style={{
            position: 'absolute',
            top: 2,
            right: 2,
            width: 12,
            height: 12,
            background: 'red',
            borderRadius: '50%',
            border: '2px solid #fff',
          }}
        />
      </div>

      <div style={{ fontWeight: 600 }}>{user.name}</div>
    </div>
  )
}

function FeedCard({ artist }: any) {
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const [playing, setPlaying] = useState(false)
  const [tipped, setTipped] = useState<number | null>(null)

  const togglePlay = () => {
    if (!videoRef.current) return
    playing ? videoRef.current.pause() : videoRef.current.play()
    setPlaying(!playing)
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
      <div style={{ position: 'relative' }}>
        {!artist.locked ? (
          <>
            <video
              ref={videoRef}
              src={artist.video}
              playsInline
              preload="metadata"
              style={{
                width: '100%',
                height: 320,
                objectFit: 'cover',
                background: '#000',
              }}
            />

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
        )}
      </div>

      <div style={{ padding: 18 }}>
        <strong>{artist.name}</strong>

        {!artist.locked && (
          <div style={{ marginTop: 14, display: 'flex', gap: 10 }}>
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
                }}
              >
                ${amount}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

