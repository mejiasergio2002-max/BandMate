// redeploy-ui


'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';

export default function Page() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const signIn = async () => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) return setError(error.message);
    router.push('/feed');
  };

  const register = async () => {
    const { error } = await supabase.auth.signUp({
      email,
      password,
    });
    if (error) return setError(error.message);
    router.push('/feed');
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundImage: "url('/landing.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* dark overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(0,0,0,0.6)',
        }}
      />

      {/* auth card */}
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          width: 320,
          padding: 24,
          background: 'rgba(0,0,0,0.65)',
          borderRadius: 12,
          color: 'white',
        }}
      >
        <h1 style={{ textAlign: 'center', marginBottom: 16 }}>BandMate</h1>

        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ width: '100%', marginBottom: 8 }}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ width: '100%', marginBottom: 8 }}
        />

        {error && <p style={{ color: 'red' }}>{error}</p>}

        <button onClick={signIn} style={{ width: '100%', marginBottom: 8 }}>
          Sign In
        </button>

        <button onClick={register} style={{ width: '100%' }}>
          Register
        </button>
      </div>
    </div>
  );
}
