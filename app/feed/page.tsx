'use client'

import { useRef, useState } from 'react'
import LeftSidebar from '../components/sidebar/LeftSidebar'

/* ===== AD SLOT SIZE ===== */
const AD_SLOT_HEIGHT = 360

export default function FeedPage() {
  const artists = [
    { name: 'theBeebs', video: '/feed/thebeebs.mp4', locked: false },
    { name: 'Gaga', video: '/feed/gaga.mp4', locked: false },
    { name: 'Unc Snoop', video: '/feed/snoop.mp4', locked: false },
   {
  name: 'Amazon Music',
  image: '/feed/artist4.jpg',
  locked: true,
  doorCharge: 4.99,
  unlockRoute: '/groupie/billie-eilish',
},

  ]

  const liveNow = [
    { name: 'Drake', avatar: '/feed/drake.jpg' },
    { name: 'Billie', avatar: '/feed/billie.jpg' },
    { name: 'Posty', avatar: '/feed/posty.jpg' },
    { name: 'The Weeknd', avatar: '/feed/weeknd.jpg' },
    { name: 'Doja Cat', avatar: '/feed/doja.jpg' },
    { name: 'Bruno Mars', avatar: '/feed/bruno.jpg' },
    { name: 'Ariana', avatar: '/feed/ariana.jpg' },
    { name: 'Ed Sheeran', avatar: '/feed/ed.jpg' },
    { name: 'Rihanna', avatar: '/feed/rihanna.jpg' },
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
      <LeftSidebar />

      {/* CENTER FEED */}
      <main style={feedStyle}>
        {artists.map((artist, index) => (
          <FeedCard key={index} artist={artist} />
        ))}
      </main>

      {/* RIGHT SIDEBAR */}
      <aside style={rightSidebarStyle}>
        <div style={{ fontWeight: 800, marginBottom: 16 }}>
          🔴 LIVE WITH ME NOW
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {liveNow.map((user, index) => (
            <div
              key={index}
              style={{ display: 'flex', alignItems: 'center', gap: 12 }}
            >
              <div style={{ position: 'relative', width: 48, height: 48 }}>
                <img
                  src={user.avatar}
                  alt={user.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: '50%',
                    objectFit: 'cover',
                  }}
                />
                <span
                  style={{
                    position: 'absolute',
                    top: -1,
                    right: -1,
                    width: 12,
                    height: 12,
                    backgroundColor: '#ff2d2d',
                    borderRadius: '50%',
                    border: '2px solid white',
                  }}
                />
              </div>

              <div style={{ fontSize: 14, fontWeight: 600 }}>
                {user.name}
              </div>
            </div>
          ))}
        </div>

        <div style={{ flex: 1 }} />

        {/* ADS */}
        <AdSlot src="/ads/ad-right-1.jpg" />
        <AdSlot src="/ads/ad-right-2.jpg" />
        <AdSlot src="/ads/ad-right-0.jpg" />
      </aside>
    </div>
  )
}

/* ===== FEED CARD ===== */

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
    <div style={feedCardStyle}>
      {/* MEDIA */}
      <div style={{ position: 'relative' }}>
        {artist.locked ? (
          <>
            <img src={artist.image} alt={artist.name} style={videoStyle} />
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'rgba(0,0,0,0.45)',
              }}
            />
          </>
        ) : (
          <>
            <video ref={videoRef} src={artist.video} style={videoStyle} />
            <div onClick={togglePlay} style={overlayStyle}>
              {playing ? '⏸' : '▶'}
            </div>
          </>
        )}
      </div>

      {/* CONTENT */}
      <div style={{ padding: 18 }}>
        <strong>{artist.name}</strong>

        {artist.locked ? (
          <div style={{ marginTop: 14 }}>
            <div style={{ fontWeight: 600, marginBottom: 10 }}>
              🚪 Door Charge: ${artist.doorCharge}
            </div>

            <button
              style={{
                width: '100%',
                padding: '10px 0',
                borderRadius: 10,
                border: 'none',
                background: '#000',
                color: '#fff',
                fontWeight: 700,
                cursor: 'pointer',
              }}
            >
              Unlock Room
            </button>
          </div>
        ) : (
          <>
            <div style={{ fontSize: 13, opacity: 0.7, marginTop: 12 }}>
              Tip the artist
            </div>

            <div style={{ display: 'flex', gap: 10, marginTop: 8 }}>
              {[10, 20, 50, 100].map((amount) => (
                <button
                  key={amount}
                  onClick={() => handleTip(amount)}
                  style={tipButtonStyle}
                >
                  ${amount}
                </button>
              ))}
            </div>

            {tip && (
              <div style={tipThanksStyle}>
                💛 Thanks for tipping ${tip}!
              </div>
            )}
          </>
        )}
      </div>
    </div>
  )
}

/* ===== ADS ===== */

function AdSlot({ src }: { src: string }) {
  return (
    <div
      style={{
        width: '100%',
        height: AD_SLOT_HEIGHT,
        borderRadius: 16,
        background: '#111',
        padding: 12,
        marginTop: 18,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <img
        src={src}
        alt="Advertisement"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'contain',
          borderRadius: 12,
        }}
      />
    </div>
  )
}

/* ===== STYLES ===== */

const feedStyle = {
  flex: 1,
  padding: '32px 24px',
  maxWidth: 720,
  margin: '0 auto',
}

const rightSidebarStyle = {
  width: 300,
  background: '#fff',
  borderLeft: '1px solid #eee',
  padding: 24,
  display: 'flex',
  flexDirection: 'column' as const,
}

const feedCardStyle = {
  background: '#fff',
  borderRadius: 16,
  marginBottom: 32,
  overflow: 'hidden',
  boxShadow: '0 12px 30px rgba(0,0,0,0.08)',
}

const videoStyle = {
  width: '100%',
  height: 320,
  objectFit: 'cover' as const,
  background: '#000',
}

const overlayStyle = {
  position: 'absolute' as const,
  inset: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: 32,
  color: '#fff',
  cursor: 'pointer',
  background: 'rgba(0,0,0,0.3)',
}

const tipButtonStyle = {
  flex: 1,
  padding: '8px 0',
  borderRadius: 10,
  border: '1px solid #ddd',
  background: '#fff',
  fontWeight: 600,
  cursor: 'pointer',
}

const tipThanksStyle = {
  marginTop: 10,
  fontSize: 14,
  fontWeight: 600,
  color: '#0a7',
}
