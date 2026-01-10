"use client";

import { useState, useEffect } from "react";

// Mock Data
const LIVE_SESSION = {
  artist: {
    name: "Marcus Miller",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus",
    followers: "1.2M"
  },
  title: "Late Night Funk Session 🎸",
  viewers: "12.4K",
  description: "Jamming with the new bass setup. Request songs in chat!",
};

const CHAT_MESSAGES = [
  { id: 1, user: "BassLover99", text: "That tone is absolutely killer! 🔥", type: "regular" },
  { id: 2, user: "StudioPro", text: "Can you show the pedalboard settings?", type: "vip" },
  { id: 3, user: "JazzCat", text: "Groove is unmatched.", type: "regular" },
  { id: 4, user: "FunkyTown", text: "Play Run for Cover! 🎶", type: "regular" },
  { id: 5, user: "SarahKeys", text: "Sending love from NY ❤️", type: "regular" },
];

export default function FeedPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white flex flex-col md:flex-row overflow-hidden">
      
      {/* Main Content Area (Video) */}
      <div className="flex-1 relative flex flex-col h-[50vh] md:h-screen">
        
        {/* Cinematic Video Container */}
        <div className="relative w-full h-full bg-black group overflow-hidden">
          {/* Background Image Simulating Video */}
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-80"
            style={{ 
              backgroundImage: "url('https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?q=80&w=2070&auto=format&fit=crop')",
            }}
          />
          
          {/* Dark Gradient Overlay for UI Readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80" />

          {/* Top Header Overlay */}
          <div className="absolute top-0 left-0 right-0 p-6 flex items-start justify-between z-20">
            <div className="flex items-center gap-4">
              {/* Artist Avatar */}
              <div className="relative">
                <div className="w-12 h-12 rounded-full p-[2px] bg-gradient-to-tr from-red-500 to-orange-500">
                  <img 
                    src={LIVE_SESSION.artist.avatar} 
                    alt={LIVE_SESSION.artist.name} 
                    className="rounded-full w-full h-full object-cover border-2 border-black"
                  />
                </div>
                <div className="absolute -bottom-1 -right-1 bg-red-600 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full border border-black">
                  LIVE
                </div>
              </div>

              {/* Info */}
              <div>
                <h2 className="text-lg font-bold tracking-tight shadow-black drop-shadow-md">
                  {LIVE_SESSION.artist.name}
                </h2>
                <div className="flex items-center gap-2 text-sm text-white/80">
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                    {LIVE_SESSION.viewers} Viewers
                  </span>
                </div>
              </div>

              {/* Follow Button */}
              <button className="ml-4 px-4 py-1.5 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 rounded-full text-sm font-medium transition-all">
                Follow
              </button>
            </div>

            {/* Top Right Tools */}
            <div className="flex gap-3">
              <button className="p-2 rounded-full bg-black/20 hover:bg-black/40 backdrop-blur text-white/80 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
              </button>
            </div>
          </div>

          {/* Bottom Controls & Info */}
          <div className="absolute bottom-0 left-0 right-0 p-8 z-20 flex items-end justify-between">
            <div className="max-w-2xl">
              <h1 className="text-3xl font-bold mb-2 text-white drop-shadow-lg">
                {LIVE_SESSION.title}
              </h1>
              <p className="text-white/70 line-clamp-2 text-sm md:text-base max-w-lg">
                {LIVE_SESSION.description}
              </p>
            </div>

            {/* Reactions & Gifts */}
            <div className="flex flex-col items-end gap-4">
              {/* Floating Reactions (Static Visual) */}
              <div className="flex flex-col gap-3 pb-4 items-center">
                <span className="text-2xl animate-bounce delay-100 opacity-80">❤️</span>
                <span className="text-2xl animate-bounce delay-300 opacity-60">🔥</span>
                <span className="text-2xl animate-bounce delay-75 opacity-90">🎸</span>
              </div>
              
              <div className="flex items-center gap-3">
                 <button className="flex items-center gap-2 px-4 py-2 bg-[#f02849] hover:bg-[#d01835] text-white rounded-full font-bold shadow-lg shadow-red-900/20 transition-all transform hover:scale-105 active:scale-95">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                  </svg>
                  Send Gift
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Sidebar - Live Chat */}
      <div className="w-full md:w-[350px] bg-[#121212] border-l border-white/5 flex flex-col h-[50vh] md:h-screen">
        <div className="p-4 border-b border-white/5 bg-[#181818]">
          <h3 className="font-semibold text-white/90 tracking-wide">Live Chat</h3>
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {CHAT_MESSAGES.map((msg) => (
            <div key={msg.id} className="flex items-start gap-2 text-sm animate-in slide-in-from-bottom-2 duration-300">
              <div className={`font-bold ${msg.type === 'vip' ? 'text-yellow-400' : 'text-gray-400'}`}>
                {msg.user}:
              </div>
              <div className="text-white/90 leading-relaxed">
                {msg.text}
              </div>
            </div>
          ))}
          <div className="text-white/20 text-xs italic pt-2">
            Welcome to the chat room!
          </div>
        </div>

        {/* Chat Input Area */}
        <div className="p-4 bg-[#181818] border-t border-white/5">
          <div className="relative">
            <input 
              type="text" 
              placeholder="Say something..." 
              className="w-full bg-[#2a2a2a] text-white placeholder-gray-500 rounded-full py-2.5 px-4 pr-10 text-sm focus:outline-none focus:ring-1 focus:ring-white/20"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 p-1 text-gray-400 hover:text-white">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </button>
          </div>
          <div className="flex justify-between items-center mt-3 px-1">
             <div className="flex gap-2 text-xl cursor-pointer opacity-70 hover:opacity-100">
                <span>❤️</span>
                <span>🔥</span>
                <span>👏</span>
             </div>
             <span className="text-xs text-gray-500">200/200</span>
          </div>
        </div>
      </div>
    </main>
  );
}
