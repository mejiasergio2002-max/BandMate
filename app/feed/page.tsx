
'use client'

import { useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import LeftSidebar from '../components/sidebar/LeftSidebar'



/* ===== AD SLOT SIZE ===== */
const AD_SLOT_HEIGHT = 360

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
      <aside style={sidebarStyle('left')}>
        <SidebarTopLeft router={router} />
        <div style={{ flex: 1 }} />
        <AdStack>
          <AdSlot src="/ads/ad-left-1.jpg" />
          <AdSlot src="/ads/ad-left-2.jpg" />
        </AdStack>
      </aside>

      {/* CENTER FEED */}
      <main style={feedStyle}>
        {artists.map((artist, index) => (
          <FeedCard key={index} artist={artist} />
        ))}
      </main>

      {/* RIGHT SIDEBAR */}
      <aside style={sidebarStyle('right')}>
        <SidebarTopRight liveNow={liveNow} />
        <div style={{ flex: 1 }} />
        <AdStack>
          <AdSlot src="/ads/ad-right-1.jpg" />
          <AdSlot src="/ads/ad-right-2.jpg" />
        </AdStack>
      </aside>
    </div>
  )
}

/* ===== LEFT SIDEBAR ===== */

function SidebarTopLeft({ router }: any) {
  return (
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
        <NavItem label="🏠 Home" />
        <NavItem label="💰 My Wallet" />
        <NavItem label="⚙️ Settings" />
        <NavItem label="🚪 Log out" />
      </nav>
    </div>
  )
}

/* ===== RIGHT SIDEBAR ===== */

function SidebarTopRight({ liveNow }: any) {
  return (
    <div>
      <div style={{ fontWeight: 800, marginBottom: 16 }}>
        🔴 LIVE WITH ME NOW
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        {liveNow.map((user: any, index: number) => (
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
                  border: '2px solid #fff',
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
    </div>
  )
}

/* ===== ADS ===== */

function AdStack({ children }: any) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
      {children}
    </div>
  )
}

function AdSlot({ src }: { src: string }) {
  return (
    <div
      style={{
        width: '100%',
        height: AD_SLOT_HEIGHT,
        borderRadius: 16,
        background: '#111',
        padding: 12,
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

/* ===== FEED CARD (TIP JAR WORKING) ===== */

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
      <div style={{ position: 'relative' }}>
        {!artist.locked ? (
          <>
            <video ref={videoRef} src={artist.video} style={videoStyle} />
            <PlayOverlay playing={playing} onClick={togglePlay} />
          </>
        ) : (
          <img src={artist.image} alt={artist.name} style={videoStyle} />
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
          </div>
        )}
      </div>
    </div>
  )
}

/* ===== STYLES ===== */

const sidebarStyle = (side: 'left' | 'right') => ({
  width: side === 'left' ? 260 : 300,
  background: '#fff',
  borderRight: side === 'left' ? '1px solid #eee' : undefined,
  borderLeft: side === 'right' ? '1px solid #eee' : undefined,
  padding: side === 'left' ? 20 : 24,
  display: 'flex',
  flexDirection: 'column' as const,
})

const feedStyle = {
  flex: 1,
  padding: '32px 24px',
  maxWidth: 720,
  margin: '0 auto',
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

function PlayOverlay({ playing, onClick }: any) {
  return (
    <div onClick={onClick} style={overlayStyle(playing)}>
      <div style={playButtonStyle}>{playing ? '⏸' : '▶'}</div>
    </div>
  )
}

const overlayStyle = (playing: boolean) => ({
  position: 'absolute' as const,
  inset: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  background: playing ? 'rgba(0,0,0,0.15)' : 'rgba(0,0,0,0.35)',
})

const playButtonStyle = {
  width: 64,
  height: 64,
  borderRadius: '50%',
  background: 'rgba(255,255,255,0.9)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: 26,
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

function NavItem({ label }: { label: string }) {
  return (
    <div style={{ padding: '10px 12px', borderRadius: 10, fontWeight: 600 }}>
      {label}
    </div>
  )
}

