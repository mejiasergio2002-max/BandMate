export default function Page() {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundImage: "url('/landing.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        padding: "4rem",
      }}
    >
      <div
        style={{
          background: "rgba(0,0,0,0.65)",
          padding: "2.5rem",
          borderRadius: "12px",
          color: "white",
          width: "360px",
        }}
      >
        <h1 style={{ fontFamily: "serif", fontSize: "32px" }}>
          BandMate
        </h1>

        <p style={{ marginBottom: "1.5rem", opacity: 0.85 }}>
          Find your band. Play with your people.
        </p>

        <button style={buttonStyle}>Sign In</button>
        <button style={{ ...buttonStyle, marginTop: 12 }}>
          Register
        </button>
      </div>
    </div>
  );
}

const buttonStyle = {
  width: "100%",
  padding: "12px",
  fontSize: "16px",
  borderRadius: "8px",
  border: "none",
  cursor: "pointer",
};

