'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { useRouter } from 'next/navigation';

export default function FeedPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const check = async () => {
      const { data } = await supabase.auth.getUser();

      if (!data.user) {
        router.push('/');
        return;
      }

      setLoading(false);
    };

    check();
  }, [router]);

  if (loading) return <div>Loading…</div>;

  return <h1>Feed</h1>;
}
