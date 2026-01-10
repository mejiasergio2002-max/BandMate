"use client";

// Mock Data - Exactly 3 profiles
const MOCK_FEED = [
  {
    id: "1",
    artist: {
      name: "Marcus Miller",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus",
    },
    title: "Funk Bass Workshop 🎸",
    viewers: "1.2K",
    timeAgo: "LIVE",
  },
  {
    id: "2",
    artist: {
      name: "Sarah Keys",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    },
    title: "Late Night Jazz Piano",
    viewers: "856",
    timeAgo: "LIVE",
  },
  {
    id: "3",
    artist: {
      name: "The Garage Band",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Garage",
    },
    title: "Indie Rock Rehearsal",
    viewers: "432",
    timeAgo: "LIVE",
  },
];

export default function FeedPage() {
  return (
    <main className="min-h-screen bg-[#18191a] text-gray-100 flex justify-center py-6">
      {/* Feed Container */}
      <div className="w-full max-w-[680px] space-y-4 px-0 md:px-4">
        
        {MOCK_FEED.map((item) => (
          <article 
            key={item.id} 
            className="bg-[#242526] md:rounded-xl shadow-sm border-b md:border border-[#3e4042] overflow-hidden"
          >
            {/* Header: Profile + Name + Live Dot */}
            <div className="px-4 py-3 flex items-center gap-3">
              <div className="relative h-10 w-10 shrink-0">
                {/* Profile Photo */}
                <img 
                  src={item.artist.avatar} 
                  alt={item.artist.name}
                  className="rounded-full object-cover w-full h-full border border-white/10"
                />
              </div>
              
              <div className="flex flex-col justify-center">
                <div className="flex items-center gap-2">
                  <h3 className="font-semibold text-white text-[15px] leading-tight hover:underline cursor-pointer">
                    {item.artist.name}
                  </h3>
                  {/* Live Indicator: Red Dot */}
                  <div className="flex items-center gap-1">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-600"></span>
                    </span>
                    <span className="text-[#f02849] text-[13px] font-semibold tracking-wide hidden sm:block">
                      LIVE
                    </span>
                  </div>
                </div>
                <div className="flex items-center text-gray-400 text-[13px] gap-1">
                  <span>{item.timeAgo}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24"><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/></svg>
                    {item.viewers}
                  </span>
                </div>
              </div>
              
              {/* More Options Ellipsis (Visual Only) */}
              <div className="ml-auto text-gray-400 hover:bg-[#3a3b3c] p-2 rounded-full cursor-pointer transition-colors">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/></svg>
              </div>
            </div>

            {/* Post Caption */}
            <div className="px-4 pb-2">
              <p className="text-[15px] text-white/90 leading-normal">
                {item.title}
              </p>
            </div>

            {/* Video / Live Preview Area */}
            <div className="w-full aspect-video bg-black relative group cursor-pointer">
              {/* Video Placeholder Gradient */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/40"></div>
              
              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-black/40 backdrop-blur-sm border-2 border-white/80 flex items-center justify-center transition-transform group-hover:scale-110">
                  <svg className="w-8 h-8 text-white fill-current ml-1" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>

              {/* LIVE Badge on Video */}
              <div className="absolute top-4 left-4 bg-[#f02849] px-2 py-1 rounded-[4px] flex items-center gap-1">
                <span className="text-white text-xs font-bold uppercase tracking-wide">LIVE</span>
              </div>

              {/* Viewers on Video */}
              <div className="absolute bottom-4 left-4 bg-black/60 px-2 py-1 rounded flex items-center gap-1">
                <svg className="w-4 h-4 text-white fill-current" viewBox="0 0 24 24"><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/></svg>
                <span className="text-white text-xs font-semibold">{item.viewers}</span>
              </div>
            </div>

            {/* Action Buttons (Like/Comment/Share - Visual Only) */}
            <div className="px-2 py-1">
              <div className="flex items-center justify-between border-t border-[#3e4042] pt-1 mt-1">
                <button className="flex-1 flex items-center justify-center gap-2 py-2 hover:bg-[#3a3b3c] rounded transition-colors group">
                  <svg className="w-5 h-5 text-gray-400 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"/></svg>
                  <span className="text-gray-400 font-medium text-[14px] group-hover:text-white">Like</span>
                </button>
                <button className="flex-1 flex items-center justify-center gap-2 py-2 hover:bg-[#3a3b3c] rounded transition-colors group">
                  <svg className="w-5 h-5 text-gray-400 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"/></svg>
                  <span className="text-gray-400 font-medium text-[14px] group-hover:text-white">Comment</span>
                </button>
                <button className="flex-1 flex items-center justify-center gap-2 py-2 hover:bg-[#3a3b3c] rounded transition-colors group">
                  <svg className="w-5 h-5 text-gray-400 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"/></svg>
                  <span className="text-gray-400 font-medium text-[14px] group-hover:text-white">Share</span>
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
