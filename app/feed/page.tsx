// FORCE FEED DEPLOY


export default function FeedPage() {
  const posts = [
    {
      id: 1,
      name: "theBeebs",
      image: "/feed/artist1.jpg",
      viewers: "18.2K",
      locked: false,
    },
    {
      id: 2,
      name: "Gaga",
      image: "/feed/artist2.jpg",
      viewers: "22.9K",
      locked: false,
    },
    {
      id: 3,
      name: "Unc Snoop",
      image: "/feed/artist3.jpg",
      viewers: "30.1K",
      locked: false,
    },
    {
      id: 4,
      name: "Bob Marley",
      image: "/feed/artist4.jpg",
      viewers: "",
      locked: true,
    },
  ];

  return (
    <div
      style={{
        background: "#f0f2f5",
        minHeight: "100vh",
        padding: "24px 0",
        display: "flex",
        justifyContent: "center",
      }}
    >
      {/* FEED COLUMN */}
      <div style={{ width: "100%", maxWidth: "640px" }}>
        {posts.map((post) => (
          <div
            key={post.id}
            style={{
              background: "#fff",
              borderRadius: "12px",
              marginBottom: "24px",
              overflow: "hidden",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
              opacity: post.locked ? 0.6 : 1,
            }}
          >
            {/* HEADER */}
            <div
              style={{
                padding: "12px 16px",
                display: "flex",
                alignItems: "center",
                gap: "10px",
                fontWeight: 600,
              }}
            >
              <span
                style={{
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                  background: post.locked ? "#666" : "red",
                }}
              />
              {post.name}
              <span
                style={{
                  marginLeft: "auto",
                  fontSize: "13px",
                  color: "#666",
                }}
              >
                {post.locked ? "Members only" : `${post.viewers} watching`}
              </span>
            </div>

            {/* IMAGE */}
            <img
              src={post.image}
              alt={post.name}
              style={{
                width: "100%",
                height: "360px",
                objectFit: "cover",
                filter: post.locked ? "grayscale(100%)" : "none",
              }}
            />

            {/* FOOTER */}
            <div
              style={{
                padding: "12px 16px",
                fontSize: "14px",
                color: "#444",
              }}
            >
              {post.locked
                ? "🔒 Locked room"
                : "❤️ Like   💬 Comment   🎁 Tip"}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
// FORCE COMMIT FROM TERMINAL
// FORCE COMMIT FROM TERMINAL
