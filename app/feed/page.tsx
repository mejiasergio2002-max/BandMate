'use client'

import { useRef, useState } from 'react'
import LeftSidebar from '../components/sidebar/LeftSidebar'

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
    <div style={layoutStyle}>
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
  const [comments, setComments] = useState<string[]>([])
  const [commentInput, setCommentInput] = useState('')

  const togglePlay = () => {
    if (!videoRef.current) return
    playing ? videoRef.current.pause() : videoRef.current.play()
    setPlaying(!playing)
  }

  const handleTip = (amount: number) => {
    setTip(amount)
    setTimeout(() => setTip(null), 2000)
  }

  return (
    <div style={feedCardStyle}>
      <div style={{ position: 'relative' }}>
        {artist.locked ? (
          <>
            <img src={artist.image} style={videoStyle} />
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

      <div style={{ padding: 18 }}>
        <strong>{artist.name}</strong>

        {artist.locked ? (
          <div style={{ marginTop: 14 }}>
            <div style={{ fontWeight: 600, marginBottom: 10 }}>
              🚪 Door Charge: ${artist.doorCharge}
            </div>

            <a href={artist.unlockRoute}>
              <button style={unlockBtn}>Unlock Room</button>
            </a>
          </div>
        ) : (
          <>
            {/* TIP JAR */}
            <div style={{ marginTop: 12, fontSize: 13, opacity: 0.7 }}>
              Tip the artist
            </div>

            <div style={{ display: 'flex', gap: 8, marginTop: 8 }}>
              {[10, 20, 50].map((amt) => (
                <button
                  key={amt}
                  onClick={() => handleTip(amt)}
                  style={tipBtn}
                >
                  ${amt}
                </button>
              ))}
            </div>

            {tip && (
              <div style={tipThanksStyle}>💛 Thanks for tipping ${tip}</div>
            )}

            {/* COMMENTS */}
            <div style={{ marginTop: 20 }}>
              <div style={{ fontWeight: 600, marginBottom: 6 }}>
                Comments
              </div>

              {comments.map((c, i) => (
                <div key={i} style={commentRow}>
                  <span>{c}</span>
                  <button
                    onClick={() => handleTip(5)}
                    style={commentTipBtn}
                  >
                    Tip $5
                  </button>
                </div>
              ))}

              <div style={{ display: 'flex', gap: 8, marginTop: 8 }}>
                <input
                  value={commentInput}
                  onChange={(e) => setCommentInput(e.target.value)}
                  placeholder="Write a comment..."
                  style={commentInputStyle}
                />
                <button
                  onClick={() => {
                    if (!commentInput.trim()) return
                    setComments([commentInput, ...comments])
                    setCommentInput('')
                  }}
                  style={sendBtn}
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
    <div style={adStyle}>
      <img src={src} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
    </div>
  )
}

/* ===== STYLES ===== */

const layoutStyle = {
  display: 'flex',
  minHeight: '100vh',
  background: '#f6f6f6',
}

const feedStyle = {
  flex: 1,
  maxWidth: 720,
  padding: 24,
  margin: '0 auto',
}

const rightSidebarStyle = {
  width: 300,
  background: '#fff',
  padding: 24,
  display: 'flex',
  flexDirection: 'column' as const,
}

const feedCardStyle = {
  background: '#fff',
  borderRadius: 16,
  marginBottom: 32,
  boxShadow: '0 12px 30px rgba(0,0,0,0.08)',
}

const videoStyle = {
  width: '100%',
  height: 320,
  objectFit: 'cover' as const,
}

const overlayStyle = {
  position: 'absolute' as const,
  inset: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: 32,
  color: '#fff',
  background: 'rgba(0,0,0,0.3)',
  cursor: 'pointer',
}

const lockedOverlay = {
  position: 'absolute' as const,
  inset: 0,
  background: 'rgba(0,0,0,0.45)',
}

const unlockBtn = {
  width: '100%',
  padding: '10px 0',
  borderRadius: 10,
  border: 'none',
  background: '#000',
  color: '#fff',
  fontWeight: 700,
  cursor: 'pointer',
}

const tipBtn = {
  flex: 1,
  padding: '8px 0',
  borderRadius: 10,
  border: '1px solid #ddd',
  background: '#fff',
  cursor: 'pointer',
}

const tipThanksStyle = {
  marginTop: 8,
  fontWeight: 600,
  color: '#0a7',
}

const commentRow = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  fontSize: 14,
  marginTop: 6,
}

const commentTipBtn = {
  fontSize: 12,
  padding: '4px 8px',
  borderRadius: 6,
  border: '1px solid #ddd',
  background: '#fff',
  cursor: 'pointer',
}

const commentInputStyle = {
  flex: 1,
  padding: 8,
  borderRadius: 8,
  border: '1px solid #ddd',
}

const sendBtn = {
  padding: '8px 14px',
  borderRadius: 8,
  border: 'none',
  background: '#000',
  color: '#fff',
  fontWeight: 600,
  cursor: 'pointer',
}

const adStyle = {
  width: '100%',
  height: AD_SLOT_HEIGHT,
  background: '#111',
  borderRadius: 16,
  padding: 12,
  marginTop: 18,
}
