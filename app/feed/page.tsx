export default function FeedPage() {
  const posts = [
    {
      id: 1,
      name: "Lia Carter",
      viewers: "25.4K",
      image: "/feed/artist1.jpg",
    },
    {
      id: 2,
      name: "Marcus Lane",
      viewers: "12.1K",
      image: "/feed/artist2.jpg",
    },
    {
      id: 3,
      name: "Echo Bloom",
      viewers: "8.7K",
      image: "/feed/artist3.jpg",
    },
  ];

  return (
    <div
      style={{
        background: "#f0f2f5",
        minHeight: "100vh",
        padding: "32px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div style={{ width: "600px" }}>
        {posts.map((post) => (
          <div
            key={post.id}
            style={{
              background: "white",
              borderRadius: "12px",
              marginBottom: "24px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
              overflow: "hidden",
            }}
          >
            {/* Header */}
            <div
              style={{
                padding: "12px 16px",
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <span
                style={{
                  width: "10px",
                  height: "10px",
                  background: "red",
                  borderRadius: "50%",
                }}
              />
              <strong>{post.name}</strong>
              <span style={{ marginLeft: "auto", fontSize: "13px", color: "#666" }}>
                {post.viewers} watching
              </span>
            </div>

            {/* Image */}
            <img
              src={post.image}
              alt={post.name}
              style={{
                width: "100%",
                height: "340px",
                objectFit: "cover",
              }}
            />

            {/* Actions */}
            <div
              style={{
                padding: "12px 16px",
                display: "flex",
                gap: "16px",
                fontSize: "14px",
              }}
            >
              ❤️ Like
              💬 Comment
              🎁 Tip
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
