'use client'

import { useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import LeftSidebar from '../components/sidebar/LeftSidebar'

const AD_SLOT_HEIGHT = 360

// ===== THEME (LOCAL, SO NOTHING GOES RED) =====
const THEME = {
  bg: '#0b0b10',
  glow1: 'rgba(255,45,45,0.20)',
  glow2: 'rgba(126,87,255,0.16)',
  panel: 'rgba(255,255,255,0.06)',
  panelSolid: '#111118',
  border: 'rgba(255,255,255,0.10)',
  text: '#ffffff',
  subtext: 'rgba(255,255,255,0.72)',
  muted: 'rgba(255,255,255,0.55)',
  good: '#20d38a',
  accent: '#ff2d2d',
}

export default function FeedPage() {
  const router = useRouter()

  const artists = [
    { name: 'theBeebs', video: '/feed/thebeebs.mp4', locked: false },
    { name: 'Gaga', video: '/feed/gaga.mp4', locked: false },
    { name: 'Unc Snoop', video: '/feed/snoop.mp4', locked: false },
    {
      name: 'Amazon Music',
      image: '/feed/artist4.jpg',
      locked: true,
      doorCharge: 4.99,
      unlockRoute: '/groupie',
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
    <div style={wrap}>
      {/* background glow */}
      <div style={glowBg} />

      {/* LEFT SIDEBAR */}
      <LeftSidebar />

      {/* CENTER FEED */}
      <main style={center}>
        <div style={{ maxWidth: 760, margin: '0 auto' }}>
          <div style={{ marginBottom: 14, color: THEME.subtext, fontWeight: 800 }}>
            Your feed • Live clips • Tips • Groupie rooms
          </div>

          {artists.map((artist, index) => (
            <FeedCard key={index} artist={artist} router={router} />
          ))}
        </div>
      </main>

      {/* RIGHT SIDEBAR */}
      <aside style={right}>
        <div style={cardRight}>
          <div style={{ fontWeight: 1000, marginBottom: 10 }}>🔴 LIVE WITH ME NOW</div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {liveNow.map((user, idx) => (
              <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <div style={{ position: 'relative', width: 44, height: 44 }}>
                  <img
                    src={user.avatar}
                    alt={user.name}
                    style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover' }}
                  />
                  <span
                    style={{
                      position: 'absolute',
                      top: -1,
                      right: -1,
                      width: 12,
                      height: 12,
                      backgroundColor: THEME.accent,
                      borderRadius: '50%',
                      border: '2px solid white',
                    }}
                  />
                </div>

                <div style={{ fontSize: 14, fontWeight: 850, color: THEME.text }}>{user.name}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ flex: 1 }} />

        {/* ADS */}
        <AdSlot src="/ads/ad-right-1.jpg" />
        <AdSlot src="/ads/ad-right-2.jpg" />
        <AdSlot src="/ads/ad-right-0.jpg" />
      </aside>

      {/* RECORD SESSION BUTTON */}
      <button onClick={() => router.push('/record')} style={recordBtn}>
        🔴 Record Session
      </button>
    </div>
  )
}

/* ===== FEED CARD ===== */

function FeedCard({ artist, router }: any) {
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const [playing, setPlaying] = useState(false)
  const [tip, setTip] = useState<number | null>(null)

  const [comments, setComments] = useState<string[]>([])
  const [commentInput, setCommentInput] = useState('')

  const togglePlay = () => {
    if (!videoRef.current) return
    playing ? videoRef.current.pause() : videoRef.current.play()
    setPlaying(!playing)
  }

  return (
    <div style={card}>
      <div style={{ position: 'relative' }}>
        {artist.locked ? (
          <>
            <img src={artist.image} alt={artist.name} style={videoStyle} />
            <div style={lockedOverlay} />
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

      <div style={{ padding: 16 }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10 }}>
          <div style={{ fontWeight: 1000, fontSize: 16, color: THEME.text }}>{artist.name}</div>

          <button
            onClick={() => alert('Share flow next')}
            style={shareBtn}
          >
            Share
          </button>
        </div>

        {artist.locked ? (
          <div style={{ marginTop: 12 }}>
            <div style={{ fontWeight: 900, marginBottom: 10, color: THEME.subtext }}>
              Door Charge: ${artist.doorCharge}
            </div>

            <button style={unlockBtn} onClick={() => router.push(artist.unlockRoute)}>
              Unlock Room
            </button>
          </div>
        ) : (
          <>
            {/* TIP */}
            <div style={{ marginTop: 12, fontSize: 12, color: THEME.subtext, fontWeight: 800 }}>
              Tip the artist
            </div>

            <div style={{ display: 'flex', gap: 8, marginTop: 8 }}>
              {[10, 20, 50, 100].map((amt) => (
                <button
                  key={amt}
                  onClick={() => {
                    setTip(amt)
                    setTimeout(() => setTip(null), 1800)
                  }}
                  style={tipBtn}
                >
                  ${amt}
                </button>
              ))}
            </div>

            {tip && <div style={{ marginTop: 10, fontWeight: 900, color: THEME.good }}>💛 Thanks for tipping ${tip}</div>}

            {/* COMMENTS */}
            <div style={{ marginTop: 18 }}>
              <div style={{ fontWeight: 1000, marginBottom: 8, color: THEME.text }}>Comments</div>

              {comments.length === 0 && (
                <div style={{ color: THEME.muted, fontSize: 13, marginBottom: 8 }}>
                  Be the first to comment.
                </div>
              )}

              {comments.map((c, i) => (
                <div key={i} style={commentRow}>
                  <span style={{ color: THEME.text }}>{c}</span>
                  <button style={commentTipBtn} onClick={() => alert('Tip comment flow next')}>
                    Tip $5
                  </button>
                </div>
              ))}

              <div style={{ display: 'flex', gap: 8, marginTop: 10 }}>
                <input
                  value={commentInput}
                  onChange={(e) => setCommentInput(e.target.value)}
                  placeholder="Write a comment..."
                  style={commentInputStyle}
                />
                <button
                  style={sendBtn}
                  onClick={() => {
                    if (!commentInput.trim()) return
                    setComments([commentInput, ...comments])
                    setCommentInput('')
                  }}
                >
                  Send
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

/* ===== ADS ===== */

function AdSlot({ src }: { src: string }) {
  return (
    <div style={adBox}>
      <img
        src={src}
        alt="Ad"
        style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: 12 }}
      />
    </div>
  )
}

/* ===== STYLES ===== */

const wrap: React.CSSProperties = {
  minHeight: '100vh',
  display: 'flex',
  background: THEME.bg,
  position: 'relative',
  overflow: 'hidden',
  fontFamily: 'system-ui, -apple-system',
}

const glowBg: React.CSSProperties = {
  position: 'absolute',
  inset: 0,
  background: `radial-gradient(900px 600px at 15% 20%, ${THEME.glow2}, transparent 60%),
              radial-gradient(900px 600px at 85% 10%, ${THEME.glow1}, transparent 55%)`,
  filter: 'blur(0px)',
  zIndex: 0,
}

const center: React.CSSProperties = {
  flex: 1,
  padding: 24,
  position: 'relative',
  zIndex: 1,
}

const right: React.CSSProperties = {
  width: 320,
  padding: 18,
  borderLeft: `1px solid ${THEME.border}`,
  background: THEME.panelSolid,
  position: 'relative',
  zIndex: 1,
  display: 'flex',
  flexDirection: 'column',
  gap: 12,
}

const cardRight: React.CSSProperties = {
  borderRadius: 18,
  border: `1px solid ${THEME.border}`,
  background: THEME.panel,
  padding: 14,
  backdropFilter: 'blur(10px)',
}

const card: React.CSSProperties = {
  borderRadius: 18,
  border: `1px solid ${THEME.border}`,
  background: THEME.panel,
  boxShadow: '0 16px 40px rgba(0,0,0,0.35)',
  overflow: 'hidden',
  marginBottom: 18,
  backdropFilter: 'blur(10px)',
}

const videoStyle: React.CSSProperties = {
  width: '100%',
  height: 320,
  objectFit: 'cover',
  background: '#000',
}

const overlayStyle: React.CSSProperties = {
  position: 'absolute',
  inset: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: 32,
  color: '#fff',
  background: 'rgba(0,0,0,0.25)',
  cursor: 'pointer',
}

const lockedOverlay: React.CSSProperties = {
  position: 'absolute',
  inset: 0,
  background: 'rgba(0,0,0,0.55)',
}

const tipBtn: React.CSSProperties = {
  flex: 1,
  padding: '10px 0',
  borderRadius: 12,
  border: `1px solid ${THEME.border}`,
  background: 'rgba(255,255,255,0.06)',
  color: THEME.text,
  fontWeight: 950,
  cursor: 'pointer',
}

const unlockBtn: React.CSSProperties = {
  width: '100%',
  padding: '12px 12px',
  borderRadius: 12,
  border: 'none',
  background: THEME.accent,
  color: '#fff',
  fontWeight: 1000,
  cursor: 'pointer',
  boxShadow: '0 12px 30px rgba(255,45,45,0.22)',
}

const shareBtn: React.CSSProperties = {
  padding: '8px 10px',
  borderRadius: 10,
  border: `1px solid ${THEME.border}`,
  background: 'rgba(255,255,255,0.06)',
  color: THEME.text,
  fontWeight: 900,
  cursor: 'pointer',
}

const commentRow: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  gap: 10,
  fontSize: 14,
  marginTop: 8,
  alignItems: 'center',
}

const commentTipBtn: React.CSSProperties = {
  fontSize: 12,
  padding: '6px 10px',
  borderRadius: 10,
  border: `1px solid ${THEME.border}`,
  background: 'rgba(255,255,255,0.06)',
  color: THEME.text,
  fontWeight: 900,
  cursor: 'pointer',
  whiteSpace: 'nowrap',
}

const commentInputStyle: React.CSSProperties = {
  flex: 1,
  padding: '10px 12px',
  borderRadius: 12,
  border: `1px solid ${THEME.border}`,
  background: 'rgba(0,0,0,0.35)',
  color: THEME.text,
  outline: 'none',
  fontWeight: 750,
}

const sendBtn: React.CSSProperties = {
  padding: '10px 14px',
  borderRadius: 12,
  border: 'none',
  background: '#ffffff',
  color: '#000',
  fontWeight: 1000,
  cursor: 'pointer',
}

const adBox: React.CSSProperties = {
  width: '100%',
  height: AD_SLOT_HEIGHT,
  borderRadius: 16,
  background: '#0b0b0f',
  padding: 12,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: `1px solid ${THEME.border}`,
}

const recordBtn: React.CSSProperties = {
  position: 'fixed',
  bottom: 24,
  right: 24,
  padding: '14px 18px',
  borderRadius: 999,
  border: 'none',
  background: THEME.accent,
  color: '#fff',
  fontSize: 15,
  fontWeight: 1000,
  cursor: 'pointer',
  boxShadow: '0 12px 30px rgba(0,0,0,0.25)',
  zIndex: 1000,
}