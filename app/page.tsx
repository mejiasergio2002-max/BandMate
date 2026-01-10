"use client";

import { useState, useEffect } from "react";
import { Playfair_Display, Inter } from "next/font/google";

// Fonts
const playfair = Playfair_Display({ 
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function LandingPage() {
  const [activeTab, setActiveTab] = useState("signup");
  const [selectedRole, setSelectedRole] = useState("viewer");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <main className={`relative min-h-screen w-full overflow-hidden bg-black text-white ${inter.className}`}>
      
      {/* 1. Full-Screen Background - Restored Structure */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transform scale-105"
        style={{
          backgroundImage: "url('/landing.jpg')",
        }}
      />
      {/* Dark Overlay (60% opacity) */}
      <div className="absolute inset-0 z-0 bg-black/60" />
      
      {/* Optional Gradient for extra readability */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-black/80 via-transparent to-black/40" />

      {/* Main Container */}
      <div className="relative z-10 min-h-screen flex flex-col justify-center px-6 lg:px-12 max-w-[1400px] mx-auto">
        
        {/* Grid Layout: Text Left, Card Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* 2. Left Branding Text */}
          <div className={`lg:col-span-7 space-y-8 transition-all duration-1000 ease-out transform ${mounted ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
            
            {/* App Name */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-full bg-white/10 border border-white/20 flex items-center justify-center">
                <span className="text-lg">🎵</span>
              </div>
              <span className={`${playfair.className} text-2xl tracking-wide font-bold text-white`}>
                BandMate
              </span>
            </div>

            {/* Headline */}
            <h1 className={`${playfair.className} text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight text-white drop-shadow-lg`}>
              Find Your Band.<br />
              <span className="text-white/80">Play With Your People.</span>
            </h1>

            <p className="text-lg text-gray-300 max-w-xl leading-relaxed font-light">
              Connect with musicians nearby, form your dream lineup, and start jamming in minutes. The stage is yours.
            </p>

            {/* Buttons below headline */}
            <div className="flex flex-wrap gap-4 pt-4">
              <button className="px-8 py-3.5 bg-white text-black font-semibold rounded-full hover:bg-gray-100 transition-transform active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                Sign Up Free
              </button>
              <button className="px-8 py-3.5 bg-transparent border border-white/30 text-white font-medium rounded-full hover:bg-white/10 transition-colors">
                Sign In
              </button>
            </div>
          </div>

          {/* 3. Centered Auth Card (Right side on desktop, stacked on mobile) */}
          <div className={`lg:col-span-5 flex justify-center lg:justify-end transition-all duration-1000 delay-300 ease-out transform ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            
            <div className="w-full max-w-[480px] backdrop-blur-xl bg-black/40 border border-white/10 rounded-3xl shadow-2xl overflow-hidden ring-1 ring-white/5">
              
              {/* Tabs */}
              <div className="flex border-b border-white/10">
                <button 
                  onClick={() => setActiveTab("signup")}
                  className={`flex-1 py-4 text-sm font-medium transition-colors relative ${
                    activeTab === "signup" ? "text-white bg-white/5" : "text-gray-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  Sign Up
                  {activeTab === "signup" && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white shadow-[0_0_10px_white]" />}
                </button>
                <button 
                  onClick={() => setActiveTab("signin")}
                  className={`flex-1 py-4 text-sm font-medium transition-colors relative ${
                    activeTab === "signin" ? "text-white bg-white/5" : "text-gray-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  Sign In
                  {activeTab === "signin" && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white shadow-[0_0_10px_white]" />}
                </button>
              </div>

              <div className="p-8 space-y-6">
                
                {/* Card Headline */}
                <div className="text-center space-y-1">
                  <h3 className="text-xl font-semibold text-white">
                    Start jamming in under a minute.
                  </h3>
                  <p className="text-xs text-gray-400 uppercase tracking-widest">
                    Create your profile
                  </p>
                </div>

                {/* Input Fields */}
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                     <div className="space-y-1.5">
                        <label className="text-xs text-gray-400 font-medium ml-1">Username</label>
                        <input 
                          type="text" 
                          placeholder="jhendrix"
                          className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-white/30 focus:bg-white/10 transition-all text-sm"
                        />
                     </div>
                     <div className="space-y-1.5">
                        <label className="text-xs text-gray-400 font-medium ml-1">Email</label>
                        <input 
                          type="email" 
                          placeholder="name@band.com"
                          className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-white/30 focus:bg-white/10 transition-all text-sm"
                        />
                     </div>
                  </div>
                  
                  <div className="space-y-1.5">
                    <label className="text-xs text-gray-400 font-medium ml-1">Password</label>
                    <input 
                      type="password" 
                      placeholder="••••••••"
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-white/30 focus:bg-white/10 transition-all text-sm"
                    />
                  </div>

                  {/* Role Selection - Simplified */}
                  <div className="space-y-2">
                    <label className="text-xs text-gray-400 font-medium ml-1">I want to...</label>
                    <div className="grid grid-cols-2 gap-3">
                      <button
                        onClick={() => setSelectedRole("viewer")}
                        className={`py-3 px-4 text-sm font-medium rounded-lg border transition-all flex items-center justify-center gap-2 ${
                          selectedRole === "viewer"
                            ? "bg-white text-black border-white shadow-lg shadow-white/10"
                            : "bg-transparent border-white/20 text-gray-400 hover:border-white/40 hover:text-white"
                        }`}
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                        Watch
                      </button>
                      <button
                        onClick={() => setSelectedRole("artist")}
                        className={`py-3 px-4 text-sm font-medium rounded-lg border transition-all flex items-center justify-center gap-2 ${
                          selectedRole === "artist"
                            ? "bg-white text-black border-white shadow-lg shadow-white/10"
                            : "bg-transparent border-white/20 text-gray-400 hover:border-white/40 hover:text-white"
                        }`}
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" /></svg>
                        Perform
                      </button>
                    </div>
                  </div>
                </div>

                {/* Primary CTA */}
                <button className="w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-indigo-400 hover:to-pink-400 text-white font-bold py-3.5 rounded-lg shadow-lg shadow-purple-900/30 transition-all transform hover:scale-[1.01] active:scale-[0.99]">
                  Create Account
                </button>

                {/* Divider */}
                <div className="relative flex items-center py-2">
                  <div className="flex-grow border-t border-white/10"></div>
                  <span className="flex-shrink-0 mx-4 text-xs text-gray-500">or continue with</span>
                  <div className="flex-grow border-t border-white/10"></div>
                </div>

                {/* Social Buttons */}
                <div className="grid grid-cols-3 gap-3">
                  <button className="flex items-center justify-center py-2.5 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-colors">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .533 5.347.533 12S5.867 24 12.48 24c3.44 0 6.04-1.133 8.147-3.253 2.147-2.147 2.813-5.013 2.813-7.307 0-.52-.053-1.04-.147-1.52h-10.81z"/></svg>
                  </button>
                  <button className="flex items-center justify-center py-2.5 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-colors">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24.02-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.82 3.05-.55 3.05-.55.6.01 2.28.16 3.36 1.74-2.71 1.66-2.27 5.92.54 7.11-.56 1.55-1.33 3.08-2.03 3.87zm-1.85-13.9c.56-1.52.22-3.81-1.63-5.24-1.6 1.18-2.34 3.49-1.66 5.14 1.63.14 2.84-.86 3.29.1z"/></svg>
                  </button>
                  <button className="flex items-center justify-center py-2.5 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-colors">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.79-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                  </button>
                </div>

                {/* Footer Text */}
                <div className="text-center pt-2">
                  <p className="text-sm text-gray-400">
                    Already have an account? <span className="text-white font-medium cursor-pointer hover:underline">Sign In</span>
                  </p>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
