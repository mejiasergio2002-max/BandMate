export default function Page() {
  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      {/* BACKGROUND IMAGE (guaranteed) */}
      <img
        src="/landing.jpg"
        alt="BandMate Landing"
        style={{
          position: 'fixed',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: -2,
        }}
      />

      {/* DARK OVERLAY */}
      <div
        style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(0,0,0,0.55)',
          zIndex: -1,
        }}
      />

      {/* CONTENT */}
      <div
        style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            width: 340,
            padding: 32,
            borderRadius: 16,
            background: 'rgba(0,0,0,0.65)',
            color: 'white',
            textAlign: 'center',
            fontFamily: 'system-ui',
          }}
        >
          <h1 style={{ marginBottom: 8 }}>BandMate</h1>
          <p style={{ opacity: 0.8, marginBottom: 24 }}>
            Find your band. Play together.
          </p>

          <p style={{ marginBottom: 12 }}>
            <a
              href="/register"
              style={{ color: 'white', textDecoration: 'underline' }}
            >
              Register
            </a>
          </p>

          <p>
            <a
              href="/feed"
              style={{ color: 'white', textDecoration: 'underline' }}
            >
              Enter Feed
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

