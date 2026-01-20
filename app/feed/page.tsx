'use client'

import { useRef, useState } from 'react'

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
        <FeedCard key={index} artist={artist} />
      ))}
    </div>
  )
}

function FeedCard({ artist }: any) {
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const [playing, setPlaying] = useState(false)

  const togglePlay = () => {
    if (!videoRef.current) return

    if (playing) {
      videoRef.current.pause()
      setPlaying(false)
    } else {
      videoRef.current.play()
      setPlaying(true)
      videoRef.current.controls = false
    }
  }

  return (
    <div
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
              ref={videoRef}
              src={artist.video}
              playsInline
              preload="metadata"
              onEnded={() => setPlaying(false)}
              style={{
                width: '100%',
                height: 320,
                objectFit: 'cover',
                display: 'block',
                background: '#000',
              }}
            />

            {/* PLAY / PAUSE BUTTON */}
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
          {artist.locked ? 'Premium session' : playing ? 'Playing' : 'Paused'}
        </div>
      </div>
    </div>
  )
}

