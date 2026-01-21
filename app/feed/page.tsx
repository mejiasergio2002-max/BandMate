'use client'

import { useRef, useState } from 'react'
import { useRouter } from 'next/navigation'

export default function FeedPage() {
  const router = useRouter()

  const artists = [
    { name: 'theBeebs', video: '/feed/thebeebs.mp4', locked: false },
    { name: 'Gaga', video: '/feed/gaga.mp4', locked: false },
    { name: 'Unc Snoop', video: '/feed/snoop.mp4', locked: false },
    { name: 'Bob Marley', image: '/feed/artist4.jpg', locked: true },
  ]

  const liveNow = [
    { name: 'Drake', avatar: '/feed/drake.jpg' },
    { name: 'Billie', avatar: '/feed/billie.jpg' },
    { name: 'Posty', avatar: '/feed/posty.jpg' },
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
          width: 260,
          background: '#fff',
          borderRight: '1px solid #eee',
          padding: 20,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {/* TOP CONTENT */}
        <div>
          <div
            onClick={() => router.push('/feed')}
            style={{
              fontSize: 22,
              fontWeight: 800,
              marginBottom: 24,
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
        </div>

        {/* PUSH ADS TO BOTTOM */}
        <div style={{ flex: 1 }} />

        {/* STACKED LEFT ADS */}
        <AdStack>
          <VerticalAd src="/ads/ad-left-1.jpg" />
          <VerticalAd src="/ads/ad-left-2.jpg" />
        </AdStack>
      </aside>

      {/* CENTER FEED */}
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
          width: 300,
          background: '#fff',
          borderLeft: '1px solid #eee',
          padding: 24,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {/* TOP CONTENT */}
        <div>
          <div style={{ fontWeight: 800, marginBottom: 16 }}>
            🔴 LIVE WITH ME NOW
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {liveNow.map((user, index) => (
              <LiveProfile key={index} user={user} />
            ))}
          </div>
        </div>

        {/* PUSH ADS TO BOTTOM */}
        <div style={{ flex: 1 }} />

        {/* STACKED RIGHT ADS */}
        <AdStack>
          <VerticalAd src="/ads/ad-right-1.jpg" />
          <VerticalAd src="/ads/ad-right-2.jpg" />
        </AdStack>
      </aside>
    </div>
  )
}

/* ---------- HELPERS ---------- */

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

function AdStack({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 12,
      }}
    >
      {children}
    </div>
  )
}

function VerticalAd({ src }: { src: string }) {
  return (
    <img
      src={src}
      alt="Advertisement"
      style={{
        width: '100%',
        borderRadius: 12,
        objectFit: 'cover',
      }}
    />
  )
}

function LiveProfile({ user }: any) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
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
      <strong>{user.name}</strong>
    </div>
  )
}

function FeedCard({ artist }: any) {
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const [playing, setPlaying] = useState(false)
  const [tip, setTip] = useState<number | null>(null)

  const togglePlay = () => {
    if (!videoRef.current) return
    playing ? videoRef.current.pause() : videoRef.current.play()
    setPlaying(!playing)
  }

  const handleTip = (amount: number) => {
    setTip(amount)
    setTimeout(() => setTip(null), 3000)
  }

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
          <div style={{ marginTop: 14 }}>
            <div style={{ fontSize: 13, opacity: 0.7, marginBottom: 8 }}>
              Tip the artist
            </div>

            <div style={{ display: 'flex', gap: 10 }}>
              {[10, 20, 50, 100].map((amount) => (
                <button
                  key={amount}
                  onClick={() => handleTip(amount)}
                  style={{
                    flex: 1,
                    padding: '8px 0',
                    borderRadius: 10,
                    border: '1px solid #ddd',
                    background: '#fff',
                    fontWeight: 600,
                    cursor: 'pointer',
                  }}
                >
                  ${amount}
                </button>
              ))}
            </div>

            {tip && (
              <div
                style={{
                  marginTop: 10,
                  fontSize: 14,
                  fontWeight: 600,
                  color: '#0a7',
                }}
              >
                💛 Thanks for tipping ${tip}!
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

