"use client";

import { useEffect, useState } from "react";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export default function LandingPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-black text-white">
      {/* Background Image - Local Asset */}
      <div 
        className={`absolute inset-0 z-0 transition-opacity duration-[2000ms] ease-out ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/landing.jpg')",
          }}
        />
        {/* Dark Overlay (60-70% opacity) */}
        <div className="absolute inset-0 bg-black/65" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex min-h-screen items-center">
        <div className="w-full max-w-md ml-auto md:mr-24 lg:mr-32 px-8">
          <div 
            className={`space-y-10 transition-all duration-[1500ms] delay-300 ease-out ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            {/* Title Section */}
            <div className="space-y-2">
              <h1 className={`${playfair.className} text-7xl text-white font-medium tracking-tight`}>
                BandMate
              </h1>
              <p className="text-gray-300 font-light text-xl tracking-wide opacity-80 pl-1">
                Experience music together.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="space-y-5 pt-4">
              <button className="group w-full py-4 px-6 bg-white text-black text-lg font-medium tracking-wide transition-all duration-300 hover:bg-gray-100 active:scale-[0.98]">
                Sign In
              </button>
              <button className="group w-full py-4 px-6 bg-transparent border border-white/40 text-white text-lg font-medium tracking-wide transition-all duration-300 hover:bg-white/10 hover:border-white/60 active:scale-[0.98]">
                Register
              </button>
            </div>

            {/* Footer / Decorative */}
            <div className="pt-12 border-t border-white/10">
              <p className="text-white/30 text-xs tracking-[0.2em] uppercase font-light">
                Cinematic Live Sessions
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
