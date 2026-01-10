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
        justifyContent: "center",
      }}
    >
      <div
        style={{
          background: "rgba(0,0,0,0.65)",
          padding: "48px",
          borderRadius: "16px",
          color: "white",
          width: "380px",
          textAlign: "center",
          fontFamily: "serif",
        }}
      >
        <h1 style={{ fontSize: "36px", marginBottom: "12px" }}>
          BandMate
        </h1>

        <p style={{ opacity: 0.9, marginBottom: "28px" }}>
          Find your band. Play with your people.
        </p>

        <button
          style={{
            width: "100%",
            padding: "14px",
            marginBottom: "12px",
            fontSize: "16px",
            borderRadius: "8px",
            border: "none",
            cursor: "pointer",
          }}
        >
          Sign Up
        </button>

        <button
          style={{
            width: "100%",
            padding: "14px",
            fontSize: "16px",
            borderRadius: "8px",
            border: "1px solid white",
            background: "transparent",
            color: "white",
            cursor: "pointer",
          }}
        >
          Sign In
        </button>
      </div>
    </div>
  );
}
