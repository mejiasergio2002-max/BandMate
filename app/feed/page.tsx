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
        justifyContent: 'center',
        background: '#f6f6f6',
        minHeight: '100vh',
        fontFamily: 'system-ui, -apple-system',
      }}
    >
      {/* LEFT AD */}
      <aside style={adColumn}>
        <AdBanner src="/ads/ad-left.jpg" />
      </aside>

      {/* MAIN CONTENT */}
      <div style={centerColumn}>
        {/* HEADER */}
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

        {/* FEED */}
        {artists.map((artist, index) => (
          <FeedCard key={index} artist={artist} />
        ))}
      </div>

      {/* RIGHT COLUMN */}
      <aside style={rightColumn}>
        <div style={{ marginBottom: 24 }}>
          <strong>🔴 LIVE WITH ME NOW</strong>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {liveNow.map((user, index) => (
            <LiveProfile key={index} user={user} />
          ))}
        </div>

        <div style={{ marginTop: 'auto' }}>
          <AdBanner src="/ads/ad-right.jpg" />
        </div>
      </aside>
    </div>
  )
}

/* ---------- STYLES ---------- */

const adColumn: React.CSSProperties = {
  width: 200,
  padding: 16,
  display: 'flex',
  justifyContent: 'center',
}

const centerColumn: React.CSSProperties = {
  width: '100%',
  maxWidth: 720,
  padding: '24px 16px',
}

const rightColumn: React.CSSProperties = {
  width: 260,
  padding: 16,
  background: '#fff',
  borderLeft: '1px solid #eee',
  display: 'flex',
  flexDirection: 'column',
}

/* ---------- COMPONENTS ---------- */

function AdBanner({ src }: { src: string }) {
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

  const togglePlay = () => {
    if (!videoRef.current) return
    playing ? videoRef.current.pause() : videoRef.current.play()
    setPlaying(!playing)
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
      </div>
    </div>
  )
}
