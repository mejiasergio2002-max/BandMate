export default function FeedPage() {
  const posts = [
    {
      id: 1,
      name: "theBeebs",
      viewers: "25.4K",
      image: "/feed/artist1.jpg",
    },
    {
      id: 2,
      name: "Gaga",
      viewers: "8.1K",
      image: "/feed/artist2.jpg",
    },
    {
      id: 3,
      name: "Unc Snoop",
      viewers: "12.9K",
      image: "/feed/artist3.jpg",
    },
  ];

  return (
    <div
      style={{
        background: "#f0f2f5",
        minHeight: "100vh",
        padding: "32px",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
        gap: "24px",
      }}
    >
      {posts.map((post) => (
        <div
          key={post.id}
          style={{
            background: "white",
            borderRadius: "12px",
            overflow: "hidden",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          }}
        >
          {/* IMAGE */}
          <div style={{ position: "relative" }}>
            <img
              src={post.image}
              alt={post.name}
              style={{
                width: "100%",
                height: "220px",
                objectFit: "cover",
              }}
            />

            {/* LIVE BADGE */}
            <div
              style={{
                position: "absolute",
                top: 12,
                left: 12,
                background: "red",
                color: "white",
                padding: "4px 10px",
                borderRadius: "999px",
                fontSize: "12px",
                fontWeight: "bold",
              }}
            >
              ● LIVE
            </div>
          </div>

          {/* INFO */}
          <div style={{ padding: "16px" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <strong>{post.name}</strong>
              <span style={{ fontSize: "13px", color: "#555" }}>
                {post.viewers} watching
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
