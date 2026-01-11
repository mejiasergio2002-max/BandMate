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
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/landing.jpg')" }}
    >
      <div className="bg-black/60 backdrop-blur-md rounded-2xl p-8 w-[360px] text-white text-center">
        <h1 className="text-3xl font-serif mb-2">BandMate</h1>
        <p className="text-sm mb-6">
          Find your band. Play with your people.
        </p>

        <button
          onClick={handleSignIn}
          className="w-full bg-white text-black py-2 rounded mb-3"
        >
          Sign In
        </button>

        <button
          onClick={handleRegister}
          disabled={loading}
          className="w-full bg-white text-black py-2 rounded"
        >
          {loading ? 'Creating account…' : 'Register'}
        </button>
      </div>
    </div>
  );
}

