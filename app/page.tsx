"use client";

import { useEffect, useState } from "react";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export default function LandingPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <main className="relative h-screen w-full overflow-hidden bg-black">
      {/* Background image */}
      <div 
        className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-[2000ms] ease-out ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        style={{
          backgroundImage: "url('/landing.jpg')",
        }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/65" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-start px-16">
        {/* Sign in panel */}
        <div 
          className={`flex flex-col max-w-md transition-opacity duration-[1500ms] delay-500 ease-out ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Brand */}
          <div className="mb-12">
            <h1 className={`${playfair.className} text-6xl text-white tracking-tight`}>
              BandMate
            </h1>
            <p className="mt-4 text-gray-300 font-light text-lg tracking-wide opacity-80">
              Experience music together.
            </p>
          </div>

          {/* Actions */}
          <div className="flex gap-6">
            <button className="px-6 py-2 bg-white text-black text-sm font-medium tracking-wide transition-opacity duration-300 hover:opacity-90">
              Sign In
            </button>
            
            <button className="px-6 py-2 bg-transparent border border-white/30 text-white text-sm font-medium tracking-wide transition-colors duration-300 hover:bg-white/10 hover:border-white/50">
              Register
            </button>
          </div>

          {/* Footer / Minimal text */}
          <div className="mt-16">
            <p className="text-white/40 text-xs tracking-widest uppercase">
              Cinematic Live Sessions
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
