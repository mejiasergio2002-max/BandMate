import Link from "next/link";

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
          background: "rgba(0,0,0,0.55)",
          padding: "32px",
          borderRadius: "16px",
          width: "320px",
          textAlign: "center",
          color: "white",
          backdropFilter: "blur(8px)",
        }}
      >
        <h1 style={{ fontSize: "28px", marginBottom: "8px" }}>BandMate</h1>
        <p style={{ opacity: 0.85, marginBottom: "24px" }}>
          Find your band. Play with your people.
        </p>

        <Link href="/feed">
          <button
            style={{
              width: "100%",
              padding: "12px",
              marginBottom: "12px",
              borderRadius: "10px",
              border: "none",
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            Sign In
          </button>
        </Link>

        <Link href="/feed">
          <button
            style={{
              width: "100%",
              padding: "12px",
              borderRadius: "10px",
              border: "none",
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            Register
          </button>
        </Link>
      </div>
    </div>
  );
}
