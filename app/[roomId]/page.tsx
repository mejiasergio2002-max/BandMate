'use client';
import React, { useEffect, useState } from 'react';
import { useSearchParams, useParams } from 'next/navigation';
import VideoPlayer from '@/components/VideoPlayer';

export default function Page() {
  const params = useParams();
  const roomId = params.roomId as string;
  
  const searchParams = useSearchParams();
  const initialRole = searchParams.get('role') === 'artist' ? 'artist' : 'viewer';
  const [role, setRole] = useState<'artist' | 'viewer'>(initialRole);

  useEffect(() => {
    const r = searchParams.get('role');
    if (r === 'artist' || r === 'viewer') setRole(r);
  }, [searchParams]);

  const streamUrl = '/test-video.mp4';

  return (
    <div className="mx-auto max-w-6xl px-4 py-6 font-sans">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Live Room</h1>
          <p className="text-sm opacity-70">Room ID: {roomId}</p>
        </div>
        <div className="flex gap-2 bg-gray-100 p-1 rounded-lg dark:bg-gray-800">
          <button
            onClick={() => setRole('viewer')}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
              role === 'viewer'
                ? 'bg-white text-black shadow-sm dark:bg-gray-700 dark:text-white'
                : 'text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200'
            }`}
          >
            Viewer
          </button>
          <button
            onClick={() => setRole('artist')}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
              role === 'artist'
                ? 'bg-white text-black shadow-sm dark:bg-gray-700 dark:text-white'
                : 'text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200'
            }`}
          >
            Artist
          </button>
        </div>
      </div>

      <div className="grid gap-6">
        <VideoPlayer 
          streamUrl={streamUrl} 
          autoPlay={role === 'artist'} 
          controls={true}
          muted={role === 'artist'} // Artist usually mutes their own playback to avoid feedback
        />

        {role === 'artist' ? (
          <div className="rounded-xl border border-dashed border-gray-300 bg-gray-50 p-6 text-center dark:border-gray-700 dark:bg-gray-800/50">
            <div className="text-lg font-medium text-gray-900 dark:text-white">Artist Dashboard</div>
            <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              You are currently streaming (simulated).
            </div>
            <div className="mt-4 flex justify-center gap-3">
              <button className="px-4 py-2 bg-red-500 text-white rounded-lg text-sm font-medium hover:bg-red-600">
                End Stream
              </button>
              <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg text-sm font-medium hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600">
                Microphone Settings
              </button>
            </div>
          </div>
        ) : (
          <div className="rounded-xl border border-gray-200 p-6 dark:border-gray-700">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-gradient-to-br from-purple-500 to-blue-500"></div>
              <div>
                <div className="font-bold text-lg">BandMate Live</div>
                <div className="text-sm text-gray-500">Live now • 1.2k viewers</div>
              </div>
              <button className="ml-auto px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700">
                Follow
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
