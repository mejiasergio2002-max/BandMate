export default function LandingPage() {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/landing.jpg')" }}
    >
      {/* dark overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* login card */}
      <div className="relative z-10 w-full max-w-sm rounded-2xl bg-black/50 backdrop-blur-xl p-8 text-center">
        <h1 className="text-3xl font-serif mb-2">BandMate</h1>
        <p className="text-sm text-gray-300 mb-6">
          Find your band. Play with your people.
        </p>

        <button className="w-full bg-white text-black py-2 rounded mb-3 hover:bg-gray-200">
          Sign In
        </button>

        <button className="w-full bg-white text-black py-2 rounded hover:bg-gray-200">
          Register
        </button>
      </div>
    </div>
  );
}

