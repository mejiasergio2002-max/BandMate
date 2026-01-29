'use client'

export default function BillieEilishPage() {
  return (
    <div style={{ padding: 40 }}>
      <h1>Billie Eilish – Groupie Room</h1>

      <video
        src="/feed/billie.mp4"
        controls
        autoPlay
        style={{ width: '100%', maxWidth: 900 }}
      />
    </div>
  )
}
