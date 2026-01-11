'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LandingPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleRegister = () => {
    setLoading(true);
    // TEMP: simulate success
    setTimeout(() => {
      router.push('/feed');
    }, 800);
  };

  const handleSignIn = () => {
    router.push('/feed');
  };

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ backgroundImage: "url('/landing.jpg')" }} 
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60 z-0" />

      {/* Glassmorphism Card */}
      <div className="relative z-10 w-full max-w-[360px] p-8 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-center shadow-2xl">
        <h1 className="text-4xl font-serif text-white mb-2 tracking-wide">
          BandMate
        </h1>
        <p className="text-sm text-gray-200 mb-8 font-light">
          Find your band. Play with your people.
        </p>

        <div className="space-y-4">
          <button
            onClick={handleSignIn}
            className="w-full bg-white text-black py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200"
          >
            Sign In
          </button>

          <button
            onClick={handleRegister}
            disabled={loading}
            className="w-full bg-white text-black py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200 disabled:opacity-70"
          >
            {loading ? 'Creating account...' : 'Register'}
          </button>
        </div>
      </div>
    </div>
  );
}



// GIT TRACKED CHANGE
