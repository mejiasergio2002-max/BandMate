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
    <main className="relative min-h-screen w-full overflow-hidden bg-black">
      {/* Background Image with Slow Fade In */}
      <div 
        className={`absolute inset-0 z-0 transition-opacity duration-[2000ms] ease-out ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* Guitarist playing live - moody, dark, intimate */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1525201548942-d8732f6617a0?q=80&w=2070&auto=format&fit=crop')`,
          }}
        />
        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80" />
      </div>

      {/* Right Aligned Panel */}
      <div className="relative z-10 flex min-h-screen">
        <div className="ml-auto w-full max-w-md flex flex-col justify-center px-12 md:w-[35%] lg:w-[30%]">
          
          {/* Content Container with Delayed Fade In (No Slide) */}
          <div 
            className={`space-y-12 transition-opacity duration-[1500ms] delay-500 ease-out ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            {/* Brand */}
            <div>
              <h1 className={`${playfair.className} text-6xl text-white font-bold tracking-tight`}>
                BandMate
              </h1>
              <p className="mt-4 text-gray-300 font-light text-lg tracking-wide opacity-80">
                Experience music together.
              </p>
            </div>

            {/* Actions */}
            <div className="space-y-6">
              <button className="w-full py-4 px-6 bg-white text-black text-lg font-medium tracking-wide transition-opacity duration-300 hover:opacity-90">
                Sign In
              </button>
              
              <button className="w-full py-4 px-6 bg-transparent border border-white/30 text-white text-lg font-medium tracking-wide transition-colors duration-300 hover:bg-white/10 hover:border-white/50">
                Register
              </button>
            </div>

            {/* Footer / Minimal text */}
            <div className="pt-12">
              <p className="text-white/40 text-xs tracking-widest uppercase">
                Cinematic Live Sessions
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
