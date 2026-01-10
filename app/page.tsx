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
    <main className={`relative min-h-screen w-full flex items-center justify-center ${inter.className}`}>
      
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{ backgroundImage: "url('/landing.jpg')" }} 
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />
      
      {/* Card Container - Centered */}
      <div className={`relative z-10 w-full max-w-[420px] px-4 transition-all duration-700 transform ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        
        <div className="backdrop-blur-xl bg-black/40 border border-white/10 rounded-2xl shadow-2xl overflow-hidden p-6">
          
          {/* Header */}
          <div className="text-center mb-6">
            <h1 className={`${playfair.className} text-3xl font-bold text-white mb-2`}>
              BandMate
            </h1>
            <p className="text-sm text-gray-300 font-light">
              Find your sound. Join the band.
            </p>
          </div>

          {/* Tabs */}
          <div className="flex p-1 bg-white/5 rounded-lg mb-6">
            <button 
              onClick={() => setActiveTab("signin")}
              className={`flex-1 py-2 text-sm font-medium rounded-md transition-all ${
                activeTab === "signin" 
                  ? "bg-white text-black shadow-sm" 
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Sign In
            </button>
            <button 
              onClick={() => setActiveTab("signup")}
              className={`flex-1 py-2 text-sm font-medium rounded-md transition-all ${
                activeTab === "signup" 
                  ? "bg-white text-black shadow-sm" 
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Sign Up
            </button>
          </div>

          {/* Form Content */}
          <div className="space-y-4">
            
            {/* Common Fields */}
            <div className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-xs text-gray-300 font-medium ml-1">Email</label>
                <input 
                  type="email" 
                  placeholder="name@example.com"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-white/30 focus:bg-white/10 transition-all text-sm"
                />
              </div>
              
              <div className="space-y-1.5">
                <label className="text-xs text-gray-300 font-medium ml-1">Password</label>
                <input 
                  type="password" 
                  placeholder="••••••••"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-white/30 focus:bg-white/10 transition-all text-sm"
                />
              </div>
            </div>

            {/* Sign Up Specific: Role Selection */}
            {activeTab === "signup" && (
              <div className="space-y-2 pt-1">
                <label className="text-xs text-gray-300 font-medium ml-1">I want to...</label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => setSelectedRole("viewer")}
                    className={`py-2.5 px-4 text-sm font-medium rounded-lg border transition-all flex items-center justify-center gap-2 ${
                      selectedRole === "viewer"
                        ? "bg-white text-black border-white"
                        : "bg-transparent border-white/20 text-gray-400 hover:border-white/40 hover:text-white"
                    }`}
                  >
                    Viewer
                  </button>
                  <button
                    onClick={() => setSelectedRole("artist")}
                    className={`py-2.5 px-4 text-sm font-medium rounded-lg border transition-all flex items-center justify-center gap-2 ${
                      selectedRole === "artist"
                        ? "bg-white text-black border-white"
                        : "bg-transparent border-white/20 text-gray-400 hover:border-white/40 hover:text-white"
                    }`}
                  >
                    Artist
                  </button>
                </div>
              </div>
            )}

            {/* Action Button */}
            <button className="w-full bg-white text-black font-bold py-3 rounded-lg hover:bg-gray-100 transition-transform active:scale-[0.98] mt-2">
              {activeTab === "signup" ? "Create Account" : "Sign In"}
            </button>

          </div>

        </div>
      </div>
    </main>
  );
}
