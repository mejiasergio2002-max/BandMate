// LANDING PAGE FIX

export default function LandingPage() {
  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundImage: "url('/landing.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Overlay */}
      <div
        style={{
          background: 'rgba(0,0,0,0.55)',
          padding: '40px',
          borderRadius: '16px',
          width: '100%',
          maxWidth: '360px',
          textAlign: 'center',
          color: 'white',
          backdropFilter: 'blur(6px)',
        }}
      >
        <h1
          style={{
            fontSize: '28px',
            marginBottom: '8px',
            fontFamily: 'serif',
          }}
        >
          BandMate
        </h1>

        <p
          style={{
            fontSize: '14px',
            opacity: 0.9,
            marginBottom: '24px',
          }}
        >
          Find your band. Play with your people.
        </p>

        <button
          style={{
            width: '100%',
            padding: '12px',
            borderRadius: '10px',
            border: 'none',
            marginBottom: '12px',
            fontWeight: 600,
            cursor: 'pointer',
          }}
          onClick={() => (window.location.href = '/feed')}
        >
          Sign In
        </button>

        <button
          style={{
            width: '100%',
            padding: '12px',
            borderRadius: '10px',
            border: 'none',
            fontWeight: 600,
            cursor: 'pointer',
          }}
          onClick={() => (window.location.href = '/feed')}
        >
          Register
        </button>
      </div>
    </div>
  )
}
