'use client'

import { useState } from 'react'

export default function GroupiePage() {
  const [comments, setComments] = useState<string[]>([
    'this is insane 🔥',
    'worth the unlock 💯',
    'goosebumps',
  ])
  const [commentInput, setCommentInput] = useState('')
  const [tipMessage, setTipMessage] = useState<string | null>(null)
  const [totalTips, setTotalTips] = useState(420)

  const sendComment = () => {
    if (!commentInput.trim()) return
    setComments([commentInput, ...comments])
    setCommentInput('')
  }

  const handleTip = (amount: number) => {
    setTotalTips((prev) => prev + amount)
    setTipMessage(`💛 Thanks for tipping $${amount}!`)
    setTimeout(() => setTipMessage(null), 2000)
  }

  return (
    <div
      style={{
        minHeight: '100vh',
        background: '#000',
        display: 'flex',
      }}
    >
      {/* VIDEO SECTION */}
      <div
        style={{
          flex: 7,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: 24,
        }}
      >
        <video
          src="/feed/billie.mp4"
          controls
          autoPlay
          playsInline
          style={{
            width: '100%',
            maxWidth: 900,
            borderRadius: 16,
            background: '#000',
          }}
        />
      </div>

      {/* CHAT + TIP SECTION */}
      <aside
        style={{
          flex: 3,
          background: '#111',
          color: '#fff',
          padding: 20,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {/* CHAT HEADER */}
        <div style={{ fontWeight: 800, marginBottom: 12 }}>
          🔴 LIVE CHAT
        </div>

        {/* COMMENTS */}
        <div
          style={{
            flex: 1,
            overflowY: 'auto',
            display: 'flex',
            flexDirection: 'column',
            gap: 10,
            marginBottom: 12,
          }}
        >
          {comments.map((comment, index) => (
            <div
              key={index}
              style={{
                fontSize: 14,
                lineHeight: 1.4,
              }}
            >
              <strong>@fan:</strong> {comment}
            </div>
          ))}
        </div>

        {/* COMMENT INPUT */}
        <div style={{ display: 'flex', gap: 8, marginBottom: 16 }}>
          <input
            value={commentInput}
            onChange={(e) => setCommentInput(e.target.value)}
            placeholder="Write a message..."
            style={{
              flex: 1,
              padding: '8px 10px',
              borderRadius: 8,
              border: 'none',
              outline: 'none',
            }}
          />
          <button
            onClick={sendComment}
            style={{
              padding: '8px 14px',
              borderRadius: 8,
              border: 'none',
              background: '#fff',
              color: '#000',
              fontWeight: 700,
              cursor: 'pointer',
            }}
          >
            Send
          </button>
        </div>

        {/* TIP JAR */}
        <div
          style={{
            borderTop: '1px solid #333',
            paddingTop: 12,
          }}
        >
          <div style={{ fontWeight: 700, marginBottom: 8 }}>
            💸 Tip Jar
          </div>

          <div style={{ display: 'flex', gap: 8, marginBottom: 8 }}>
            {[5, 10, 20, 50].map((amount) => (
              <button
                key={amount}
                onClick={() => handleTip(amount)}
                style={{
                  flex: 1,
                  padding: '8px 0',
                  borderRadius: 8,
                  border: 'none',
                  background: '#222',
                  color: '#fff',
                  fontWeight: 600,
                  cursor: 'pointer',
                }}
              >
                ${amount}
              </button>
            ))}
          </div>

          {tipMessage && (
            <div style={{ fontSize: 13, marginBottom: 6 }}>
              {tipMessage}
            </div>
          )}

          <div style={{ fontSize: 13, opacity: 0.7 }}>
            Total Tips Today: ${totalTips}
          </div>
        </div>
      </aside>
    </div>
  )
}
