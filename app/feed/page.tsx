"use client";

import Image from "next/image";

// Mock Data
const MOCK_FEED = [
  {
    id: "1",
    artist: {
      name: "Marcus Miller",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus",
    },
    title: "Funk Bass Workshop 🎸",
    viewers: 1240,
  },
  {
    id: "2",
    artist: {
      name: "Sarah Keys",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    },
    title: "Late Night Jazz Piano",
    viewers: 856,
  },
  {
    id: "3",
    artist: {
      name: "The Garage Band",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Garage",
    },
    title: "Indie Rock Rehearsal",
    viewers: 432,
  },
];

export default function FeedPage() {
  return (
    <main className="min-h-screen bg-[#18191a] text-gray-100 flex justify-center py-8">
      <div className="w-full max-w-[680px] space-y-6 px-4">
        {/* Feed Header */}
        <div className="flex items-center justify-between mb-8 px-2">
          <h1 className="text-2xl font-bold text-white">Live Now</h1>
        </div>

        {MOCK_FEED.map((item) => (
          <article 
            key={item.id} 
            className="bg-[#242526] rounded-xl shadow-lg overflow-hidden border border-[#3e4042]"
          >
            {/* Card Header */}
            <div className="p-4 flex items-center gap-3">
              {/* Avatar */}
              <div className="relative h-10 w-10">
                <img 
                  src={item.artist.avatar} 
                  alt={item.artist.name}
                  className="rounded-full object-cover w-full h-full border border-gray-600"
                />
              </div>
              
              {/* Artist Info */}
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <h3 className="font-semibold text-white text-[15px]">
                    {item.artist.name}
                  </h3>
                  {/* Red Live Dot */}
                  <span className="flex h-2.5 w-2.5 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-600"></span>
                  </span>
                </div>
                <p className="text-xs text-gray-400 font-medium">
                  Live • {item.viewers} watching
                </p>
              </div>
            </div>

            {/* Main Body - Video Preview */}
            <div className="w-full aspect-video bg-black relative flex items-center justify-center group cursor-pointer">
              {/* Placeholder Content */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
              
              <div className="text-center z-10">
                <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border-2 border-white/50 mb-2 mx-auto transition-transform group-hover:scale-110">
                  <svg className="w-8 h-8 text-white fill-current" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <p className="text-white/90 font-medium tracking-wide text-sm">
                  Tap to Join
                </p>
              </div>
            </div>

            {/* Card Footer / Caption */}
            <div className="p-4">
              <p className="text-[15px] text-gray-200">
                {item.title}
              </p>
            </div>
          </article>
        ))}
        
        <div className="text-center py-8 text-gray-500 text-sm">
          You've reached the end of the list
        </div>
      </div>
    </main>
  );
}
