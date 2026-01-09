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
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Right Aligned Panel */}
      <div className="relative z-10 flex min-h-screen">
        <div className="ml-auto w-full max-w-md bg-black/20 backdrop-blur-sm border-l border-white/5 flex flex-col justify-center px-12 md:w-[35%] lg:w-[30%]">
          
          {/* Content Container with Delayed Fade In */}
          <div 
            className={`space-y-12 transition-all duration-[1500ms] delay-500 ease-out transform ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
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
              <button className="group w-full py-4 px-6 bg-white text-black text-lg font-medium tracking-wide transition-transform duration-300 hover:scale-[1.02] active:scale-[0.98]">
                Sign In
              </button>
              
              <button className="group w-full py-4 px-6 bg-transparent border border-white/30 text-white text-lg font-medium tracking-wide transition-all duration-300 hover:bg-white/10 hover:border-white/50 active:scale-[0.98]">
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
