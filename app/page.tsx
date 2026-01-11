// FORCE DEPLOY

export default function HomePage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundImage: "url('/landing.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
      }}
    >
      {/* Dark overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(0,0,0,0.45)",
        }}
      />

      {/* Centered Card */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          background: "rgba(255,255,255,0.95)",
          padding: "32px",
          borderRadius: "16px",
          width: "100%",
          maxWidth: "420px",
          textAlign: "center",
          boxShadow: "0 20px 60px rgba(0,0,0,0.4)",
        }}
      >
        <h1 style={{ fontSize: "28px", marginBottom: "8px" }}>BandMate</h1>
        <p style={{ marginBottom: "24px" }}>
          Find your band. Play with your people.
        </p>

        <button style={btnStyle}>Sign In</button>
        <button style={{ ...btnStyle, marginTop: "12px" }}>Register</button>
      </div>
    </div>
  );
}

const btnStyle = {
  width: "100%",
  padding: "14px",
  fontSize: "16px",
  borderRadius: "8px",
  border: "none",
  cursor: "pointer",
};

