"use client";

import { useState } from "react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

// Mock Data
const liveSessions = [
  { 
    id: 1, 
    name: "Lia Carter", 
    viewers: "25.4k", 
    color: "from-purple-900 to-blue-900",
    title: "Acoustic Night - Chill Vibes 🎸",
    chat: [
      { user: "Alex", msg: "This sounds amazing!" },
      { user: "Sarah", msg: "Love this song 🎵" },
      { user: "Mike", msg: "Requesting Wonderwall?" },
      { user: "Jess", msg: "😍😍😍" }
    ]
  },
  { 
    id: 2, 
    name: "Marcus Lane", 
    viewers: "8.1k", 
    color: "from-red-900 to-orange-900",
    title: "Drum Practice Session 🥁",
    chat: [
      { user: "Dave", msg: "Those fills are insane!" },
      { user: "BandMate_Fan", msg: "Keep it up!" },
      { user: "Rocker", msg: "🤘🤘🤘" }
    ]
  },
  { 
    id: 3, 
    name: "Nova Bloom", 
    viewers: "3.7k", 
    color: "from-emerald-900 to-teal-900",
    title: "Synthesizer Soundscapes 🎹",
    chat: [
      { user: "TechnoKing", msg: "Pure vibes." },
      { user: "Alice", msg: "Is that a Moog?" },
      { user: "Producer101", msg: "Great texture." }
    ]
  }
];

export default function FeedPage() {
  return (
    <main className={`min-h-screen w-full bg-[#18191a] text-white ${inter.className} py-8 px-4`}>
      
      {/* Feed Column - Centered, Max Width 900px */}
      <div className="max-w-[900px] mx-auto space-y-8">
        
        {liveSessions.map((session) => (
          /* Facebook-style Card */
          <div 
            key={session.id} 
            className="bg-[#242526] rounded-xl shadow-lg overflow-hidden border border-[#393a3b]"
          >
            {/* Header */}
            <div className="p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                {/* Avatar */}
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-700 to-gray-600 flex items-center justify-center text-sm font-bold shadow-sm border border-white/10">
                  {session.name.charAt(0)}
                </div>
                
                <div className="flex flex-col">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-[#e4e6eb] text-[15px]">{session.name}</span>
                    <div className="flex items-center gap-1 bg-red-500/10 px-1.5 py-0.5 rounded">
                      <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                      <span className="text-red-500 text-[11px] font-bold uppercase tracking-wide">Live</span>
                    </div>
                  </div>
                  <span className="text-[13px] text-[#b0b3b8]">{session.title} • {session.viewers} watching</span>
                </div>
              </div>
              
              <button className="text-[#b0b3b8] hover:bg-[#3a3b3c] p-2 rounded-full transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/></svg>
              </button>
            </div>

            {/* Main Content Area: Video + Chat */}
            <div className="flex flex-col md:flex-row h-[400px] border-t border-[#393a3b] border-b">
              
              {/* Video Area (Main) */}
              <div className={`relative flex-1 bg-gradient-to-br ${session.color} flex items-center justify-center group cursor-pointer`}>
                 <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                 
                 {/* Play Button */}
                 <div className="w-16 h-16 rounded-full bg-black/40 backdrop-blur-sm border border-white/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                    <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                 </div>
                 
                 <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur px-2 py-1 rounded text-xs font-medium">
                   LIVE
                 </div>
              </div>

              {/* Mini Chat Column (Right Side) */}
              <div className="hidden md:flex w-[280px] bg-[#242526] border-l border-[#393a3b] flex-col">
                <div className="p-3 border-b border-[#393a3b] text-xs font-semibold text-[#b0b3b8] uppercase tracking-wider">
                  Live Chat
                </div>
                
                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-3 space-y-3">
                  {session.chat.map((msg, idx) => (
                    <div key={idx} className="text-[13px]">
                      <span className="font-semibold text-[#e4e6eb] opacity-90">{msg.user}</span>
                      <span className="text-[#b0b3b8] ml-1.5">{msg.msg}</span>
                    </div>
                  ))}
                  <div className="text-[13px] text-[#b0b3b8] italic opacity-50">
                    ...
                  </div>
                </div>

                {/* Chat Input */}
                <div className="p-3 border-t border-[#393a3b]">
                  <div className="bg-[#3a3b3c] rounded-full h-8 flex items-center px-3 text-[#b0b3b8] text-[13px] cursor-text">
                    Add a comment...
                  </div>
                </div>
              </div>

            </div>

            {/* Footer Actions */}
            <div className="p-2 flex items-center justify-between">
              <div className="flex items-center gap-1">
                 <button className="flex items-center gap-2 px-3 py-2 rounded hover:bg-[#3a3b3c] text-[#b0b3b8] hover:text-[#e4e6eb] transition-colors font-medium text-[14px]">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" /></svg>
                    Like
                 </button>
                 <button className="flex items-center gap-2 px-3 py-2 rounded hover:bg-[#3a3b3c] text-[#b0b3b8] hover:text-[#e4e6eb] transition-colors font-medium text-[14px]">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" /></svg>
                    Comment
                 </button>
                 <button className="flex items-center gap-2 px-3 py-2 rounded hover:bg-[#3a3b3c] text-[#b0b3b8] hover:text-[#e4e6eb] transition-colors font-medium text-[14px]">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" /></svg>
                    Share
                 </button>
              </div>
            </div>
            
          </div>
        ))}

        <div className="text-center py-8 text-[#b0b3b8] text-sm">
          You're all caught up!
        </div>

      </div>
    </main>
  );
}
