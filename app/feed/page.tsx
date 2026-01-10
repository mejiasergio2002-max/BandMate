"use client";

import { useState } from "react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

// Mock Data as requested
const liveSessions = [
  { id: 1, name: "Lia Carter", viewers: "25.4k", color: "from-purple-900 to-blue-900" },
  { id: 2, name: "Marcus Lane", viewers: "8.1k", color: "from-red-900 to-orange-900" },
  { id: 3, name: "Nova Bloom", viewers: "3.7k", color: "from-emerald-900 to-teal-900" }
];

export default function FeedPage() {
  return (
    <main className={`min-h-screen w-full bg-[#0b0b0b] text-white ${inter.className} py-8 px-4`}>
      
      {/* Centered Feed Column */}
      <div className="max-w-[900px] mx-auto space-y-8">
        
        {liveSessions.map((session) => (
          <div 
            key={session.id} 
            className="bg-[#181818] rounded-xl overflow-hidden border border-white/5 shadow-xl"
          >
            {/* Header: Artist Info */}
            <div className="p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                {/* Circular Avatar */}
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-700 to-gray-600 flex items-center justify-center text-sm font-bold">
                  {session.name.charAt(0)}
                </div>
                
                <div className="flex flex-col">
                  <span className="font-semibold text-white">{session.name}</span>
                  <div className="flex items-center gap-1.5">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                    </span>
                    <span className="text-xs text-gray-400 uppercase tracking-wide">Live</span>
                  </div>
                </div>
              </div>
              
              <button className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" /></svg>
              </button>
            </div>

            {/* Live Content Area (16:9 Aspect Ratio) */}
            <div className={`relative w-full aspect-video bg-gradient-to-br ${session.color} flex items-center justify-center group cursor-pointer`}>
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
              
              <div className="z-10 text-center">
                 <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 mb-3 mx-auto group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                 </div>
                 <h3 className="text-xl font-bold tracking-tight drop-shadow-md">LIVE SESSION</h3>
              </div>

              {/* LIVE badge overlay on video */}
              <div className="absolute top-4 left-4 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-md uppercase tracking-wider shadow-lg">
                Live
              </div>
            </div>

            {/* Footer: Stats & Action */}
            <div className="p-4 flex items-center justify-between bg-[#121212] border-t border-white/5">
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                <span className="font-medium text-white">{session.viewers} watching</span>
              </div>
              
              <button className="bg-white text-black font-semibold px-6 py-2 rounded-full hover:bg-gray-200 transition-colors text-sm">
                Join Room
              </button>
            </div>
            
          </div>
        ))}

        {/* Loading / End of feed indicator */}
        <div className="text-center py-8 text-gray-500 text-sm">
          You're all caught up!
        </div>

      </div>
    </main>
  );
}
