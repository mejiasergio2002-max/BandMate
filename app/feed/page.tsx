'use client'

import { useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import LeftSidebar from '../components/sidebar/LeftSidebar'

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
    <div style={layout}>
      <LeftSidebar />

      {/* CENTER FEED */}
      <main style={feed}>
        {artists.map((artist, index) => (
          <FeedCard key={index} artist={artist} router={router} />
        ))}
      </main>

      {/* RIGHT SIDEBAR */}
      <aside style={rightSidebar}>
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
            <img src={artist.image} style={video} />
            <div style={lockedOverlay} />
          </>
        ) : (
          <>
            <video ref={videoRef} src={artist.video} style={video} />
            <div onClick={togglePlay} style={overlay}>
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

            <button
              style={unlockBtn}
              onClick={() => router.push(artist.unlockRoute)}
            >
              Unlock Room
            </button>
          </div>
        ) : (
          <>
            {/* TIP */}
            <div style={{ marginTop: 12, fontSize: 13, opacity: 0.7 }}>
              Tip the artist
            </div>

            <div style={{ display: 'flex', gap: 8, marginTop: 8 }}>
              {[10, 20, 50].map((amt) => (
                <button
                  key={amt}
                  onClick={() => setTip(amt)}
                  style={tipBtn}
                >
                  ${amt}
                </button>
              ))}
            </div>

            {tip && (
              <div style={tipThanks}>💛 Thanks for tipping ${tip}</div>
            )}

            {/* COMMENTS */}
            <div style={{ marginTop: 20 }}>
              <div style={{ fontWeight: 600 }}>Comments</div>

              {comments.map((c, i) => (
                <div key={i} style={commentRow}>
                  <span>{c}</span>
                  <button style={commentTip}>Tip $5</button>
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
    <div style={ad}>
      <img src={src} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
    </div>
  )
}

/* ===== STYLES ===== */

const layout = { display: 'flex', minHeight: '100vh', background: '#f6f6f6' }
const feed = { flex: 1, maxWidth: 720, padding: 24, margin: '0 auto' }
const rightSidebar = {
  width: 300,
  background: '#fff',
  padding: 24,
  display: 'flex',
  flexDirection: 'column' as const,
}
const card = {
  background: '#fff',
  borderRadius: 16,
  marginBottom: 32,
  boxShadow: '0 12px 30px rgba(0,0,0,0.08)',
}
const video = { width: '100%', height: 320, objectFit: 'cover' as const }
const overlay = {
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
  padding: 10,
  borderRadius: 10,
  background: '#000',
  color: '#fff',
  fontWeight: 700,
  border: 'none',
  cursor: 'pointer',
}
const tipBtn = {
  flex: 1,
  padding: 8,
  borderRadius: 10,
  border: '1px solid #ddd',
  background: '#fff',
}
const tipThanks = { marginTop: 8, fontWeight: 600, color: '#0a7' }
const commentRow = {
  display: 'flex',
  justifyContent: 'space-between',
  fontSize: 14,
  marginTop: 6,
}
const commentTip = {
  fontSize: 12,
  padding: '4px 8px',
  borderRadius: 6,
  border: '1px solid #ddd',
  background: '#fff',
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
  background: '#000',
  color: '#fff',
  border: 'none',
  fontWeight: 600,
}
const ad = {
  width: '100%',
  height: AD_SLOT_HEIGHT,
  background: '#111',
  borderRadius: 16,
  padding: 12,
  marginTop: 18,
}
