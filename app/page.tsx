'use client';

export default function Page() {
  return (
    <div style={{ width: '100vw', height: '100vh', position: 'relative' }}>
      <img
        src="/landing.jpg"
        alt="Landing"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      />

      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(0,0,0,0.6)',
        }}
      />

      <div
        style={{
          position: 'relative',
          zIndex: 1,
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div style={{ background: '#000', padding: 32, color: '#fff' }}>
          <h1>BandMate</h1>
          <button>Sign In</button>
          <button>Register</button>
        </div>
      </div>
    </div>
  );
}
