'use client'

import { useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import LeftSidebar from './components/sidebar/LeftSidebar'
import { BM, glassCard, pageWrap, glowBg, btnPrimary, btnDark, btnGhost } from './components/ui/theme'
const AD_SLOT_HEIGHT = 360

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
    <div style={{ ...pageWrap, display: 'flex' }}>
      <div style={glowBg} />

      {/* LEFT SIDEBAR */}
      <LeftSidebar />

      {/* CENTER FEED */}
      <main style={feedStyle}>
        <div style={feedHeader}>
          <div>
            <div style={h1}>Live Feed</div>
            <div style={sub}>
              Tip artists, comment live, and unlock exclusive rooms.
            </div>
          </div>

          <div style={{ display: 'flex', gap: 10 }}>
            <span style={pillActive}>Most Recent</span>
            <span style={pill}>All</span>
            <span style={pill}>Popular</span>
          </div>
        </div>

        {artists.map((artist, index) => (
          <FeedCard key={index} artist={artist} router={router} />
        ))}
      </main>

      {/* RIGHT SIDEBAR */}
      <aside style={rightSidebarStyle}>
        <div style={{ ...glassCard, padding: 16, position: 'relative', zIndex: 1 }}>
          <div style={rightTitleRow}>
            <span style={dot} />
            <div style={{ fontWeight: 900, letterSpacing: 0.2 }}>LIVE WITH ME NOW</div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginTop: 12 }}>
            {liveNow.map((user, index) => (
              <div
                key={index}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 12,
                  padding: '10px 10px',
                  borderRadius: 14,
                  background: BM.panel2,
                  border: `1px solid ${BM.border}`,
                }}
              >
                <div style={{ position: 'relative', width: 42, height: 42, flexShrink: 0 }}>
                  <img
                    src={user.avatar}
                    alt={user.name}
                    style={{
                      width: '100%',
                      height: '100%',
                      borderRadius: '50%',
                      objectFit: 'cover',
                      border: `2px solid ${BM.border2}`,
                    }}
                  />
                  <span
                    style={{
                      position: 'absolute',
                      top: -1,
                      right: -1,
                      width: 11,
                      height: 11,
                      backgroundColor: BM.danger,
                      borderRadius: '50%',
                      border: `2px solid ${BM.bg}`,
                    }}
                  />
                </div>

                <div style={{ minWidth: 0 }}>
                  <div style={{ fontWeight: 800, fontSize: 14 }}>{user.name}</div>
                  <div style={{ fontSize: 12, color: BM.muted }}>Live session</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ flex: 1 }} />

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

  const sendComment = () => {
    if (!commentInput.trim()) return
    setComments([commentInput, ...comments])
    setCommentInput('')
  }

  const handleTip = (amount: number) => {
    setTip(amount)
    setTimeout(() => setTip(null), 2500)
  }

  return (
    <div style={{ ...glassCard, overflow: 'hidden', marginBottom: 20, position: 'relative', zIndex: 1 }}>
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
              <div style={playCircle}>{playing ? '⏸' : '▶'}</div>
            </div>
          </>
        )}

        {artist.locked && (
          <div style={lockedBadge}>GROUPIES ONLY</div>
        )}
      </div>

      <div style={{ padding: 18 }}>
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 12 }}>
          <strong style={{ fontSize: 16 }}>{artist.name}</strong>
          <span style={{ fontSize: 12, color: BM.muted }}>BandMate</span>
        </div>

        {artist.locked ? (
          <div style={{ marginTop: 12 }}>
            <div style={{ fontWeight: 800, marginBottom: 10 }}>
              🚪 Door Charge: ${artist.doorCharge}
            </div>

            <button
              style={{ ...btnPrimary, width: '100%' }}
              onClick={() => router.push(artist.unlockRoute)}
            >
              Unlock Room
            </button>
          </div>
        ) : (
          <>
            {/* TIP */}
            <div style={{ marginTop: 12, fontSize: 13, color: BM.subtext }}>
              Tip the artist
            </div>

            <div style={{ display: 'flex', gap: 8, marginTop: 10 }}>
              {[10, 20, 50].map((amt) => (
                <button key={amt} onClick={() => handleTip(amt)} style={tipBtn}>
                  ${amt}
                </button>
              ))}
            </div>

            {tip && <div style={tipThanks}>💛 Thanks for tipping ${tip}</div>}

            {/* COMMENTS */}
            <div style={{ marginTop: 18 }}>
              <div style={{ fontWeight: 800, marginBottom: 8 }}>Comments</div>

              {comments.length === 0 && (
                <div style={{ fontSize: 13, color: BM.muted, marginBottom: 10 }}>
                  Be the first to comment ✨
                </div>
              )}

              {comments.slice(0, 6).map((c, i) => (
                <div key={i} style={commentRow}>
                  <span style={{ color: BM.subtext }}>{c}</span>
                  <button style={commentTip}>Tip $5</button>
                </div>
              ))}

              <div style={{ display: 'flex', gap: 8, marginTop: 10 }}>
                <input
                  value={commentInput}
                  onChange={(e) => setCommentInput(e.target.value)}
                  placeholder="Write a comment..."
                  style={commentInputStyle}
                />
                <button style={sendBtn} onClick={sendComment}>
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
    <div style={adStyle}>
      <img src={src} alt="Advertisement" style={adImg} />
    </div>
  )
}

/* ===== STYLES ===== */

const feedStyle = {
  flex: 1,
  padding: '28px 22px',
  maxWidth: 760,
  margin: '0 auto',
  position: 'relative' as const,
  zIndex: 1,
}

const rightSidebarStyle = {
  width: 320,
  padding: 18,
  display: 'flex',
  flexDirection: 'column' as const,
  position: 'relative' as const,
  zIndex: 1,
  boxSizing: 'border-box' as const,
}

const feedHeader = {
  display: 'flex',
  alignItems: 'flex-end',
  justifyContent: 'space-between',
  gap: 16,
  marginBottom: 18,
}

const h1 = { fontSize: 28, fontWeight: 950, letterSpacing: -0.2 }
const sub = { fontSize: 13, color: BM.subtext, marginTop: 6 }

const pill = {
  padding: '8px 12px',
  borderRadius: 999,
  border: `1px solid ${BM.border}`,
  background: BM.panel2,
  color: BM.text,
  fontSize: 12,
  fontWeight: 800,
}

const pillActive = {
  ...pill,
  background: 'linear-gradient(135deg, rgba(124,92,255,0.55), rgba(0,229,255,0.22))',
  border: `1px solid ${BM.border2}`,
}

const rightTitleRow = {
  display: 'flex',
  alignItems: 'center',
  gap: 10,
}

const dot = {
  width: 10,
  height: 10,
  borderRadius: '50%',
  background: BM.danger,
  boxShadow: '0 0 0 6px rgba(255,45,45,0.12)',
}

const videoStyle = {
  width: '100%',
  height: 340,
  objectFit: 'cover' as const,
  background: '#000',
}

const overlayStyle = {
  position: 'absolute' as const,
  inset: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  background: 'linear-gradient(to top, rgba(0,0,0,0.60), rgba(0,0,0,0.15))',
}

const playCircle = {
  width: 66,
  height: 66,
  borderRadius: '50%',
  background: 'rgba(255,255,255,0.92)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: 26,
  color: '#0A0A0F',
  fontWeight: 900,
  border: '1px solid rgba(0,0,0,0.08)',
}

const lockedOverlay = {
  position: 'absolute' as const,
  inset: 0,
  background:
    'linear-gradient(to top, rgba(0,0,0,0.80), rgba(0,0,0,0.25))',
}

const lockedBadge = {
  position: 'absolute' as const,
  top: 14,
  left: 14,
  padding: '8px 10px',
  borderRadius: 999,
  background: 'rgba(0,0,0,0.55)',
  border: `1px solid ${BM.border}`,
  color: '#fff',
  fontWeight: 900,
  fontSize: 12,
  letterSpacing: 0.3,
}

const tipBtn = {
  flex: 1,
  padding: '10px 0',
  borderRadius: 12,
  border: `1px solid ${BM.border}`,
  background: 'rgba(255,255,255,0.04)',
  color: BM.text,
  fontWeight: 900,
  cursor: 'pointer',
}

const tipThanks = {
  marginTop: 10,
  fontSize: 13,
  fontWeight: 800,
  color: BM.good,
}

const commentRow = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: 10,
  marginTop: 8,
  padding: '8px 10px',
  borderRadius: 12,
  background: 'rgba(255,255,255,0.04)',
  border: `1px solid ${BM.border}`,
}

const commentTip = {
  padding: '7px 10px',
  borderRadius: 10,
  border: `1px solid ${BM.border2}`,
  background: 'rgba(255,255,255,0.06)',
  color: BM.text,
  fontWeight: 900,
  fontSize: 12,
  cursor: 'pointer',
  whiteSpace: 'nowrap' as const,
}

const commentInputStyle = {
  flex: 1,
  padding: '10px 12px',
  borderRadius: 12,
  border: `1px solid ${BM.border}`,
  background: 'rgba(255,255,255,0.04)',
  color: BM.text,
  outline: 'none',
}

const sendBtn = {
  ...btnDark,
  padding: '10px 14px',
  borderRadius: 12,
}

const adStyle = {
  width: '100%',
  height: AD_SLOT_HEIGHT,
  borderRadius: 18,
  background: 'rgba(255,255,255,0.04)',
  border: `1px solid ${BM.border}`,
  padding: 12,
  marginTop: 16,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxSizing: 'border-box' as const,
}

const adImg = {
  width: '100%',
  height: '100%',
  objectFit: 'contain' as const,
  borderRadius: 14,
}

const recordBtn = {
  position: 'fixed' as const,
  bottom: 22,
  right: 22,
  padding: '14px 18px',
  borderRadius: 999,
  border: `1px solid ${BM.border2}`,
  background:
    'linear-gradient(135deg, rgba(255,45,45,1), rgba(255,45,45,0.65))',
  color: '#fff',
  fontSize: 15,
  fontWeight: 950,
  cursor: 'pointer',
  boxShadow: '0 18px 50px rgba(0,0,0,0.55)',
  zIndex: 1000,
}