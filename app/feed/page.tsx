'use client'

import { useRef, useState } from 'react'
import { useRouter } from 'next/navigation'

/* ===== AD SLOT SIZE (ONE SOURCE OF TRUTH) ===== */
const AD_SLOT_HEIGHT = 360 // 👈 bigger, more readable posters

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

/* ===== SIDEBAR CONTENT ===== */

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
        <NavItem label="📻 Radio Feed" />
        <NavItem label="🔥 Live Now" />
        <NavItem label="⭐ Favorites" />
        <NavItem label="💸 Top Tipped" />
      </nav>
    </div>
  )
}

function SidebarTopRight({ liveNow }: any) {
  return (
    <div>
      <div style={{ fontWeight: 800, marginBottom: 16 }}>
        🔴 LIVE WITH ME NOW
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 12,
        }}
      >
        {liveNow.map((user: any, index: number) => (
          <img
            key={index}
            src={user.avatar}
            alt={user.name}
            title={user.name}
            style={{
              width: 64,
              height: 64,
              borderRadius: '50%',
              objectFit: 'cover',
              border: '3px solid #ff2d2d',
            }}
          />
        ))}
      </div>
    </div>
  )
}

/* ===== AD SYSTEM (IMPROVED READABILITY) ===== */

function AdStack({ children }: { children: React.ReactNode }) {
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
        padding: 12,                 // 👈 makes posters feel larger
        boxSizing: 'border-box',
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
          objectFit: 'contain',      // ✅ no cropping
          borderRadius: 12,
        }}
      />
    </div>
  )
}

/* ===== UI PIECES ===== */

function NavItem({ label }: { label: string }) {
  return (
    <div style={{ padding: '10px 12px', borderRadius: 10, fontWeight: 600 }}>
      {label}
    </div>
  )
}

/* ===== FEED CARD ===== */

function FeedCard({ artist }: any) {
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const [playing, setPlaying] = useState(false)

  const togglePlay = () => {
    if (!videoRef.current) return
    playing ? videoRef.current.pause() : videoRef.current.play()
    setPlaying(!playing)
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

