"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import VideoPlayer from "@/components/VideoPlayer";

const feed = [
  { id: "101", src: "/videos/sample1.mp4", caption: "Live Session #1" },
  { id: "102", src: "/videos/sample2.mp4", caption: "Jamming in Studio" },
];

export default function FeedPage() {
  const [role, setRole] = useState<'viewer' | 'artist' | null>(null);

  useEffect(() => {
    const storedRole = localStorage.getItem('bandmate-role') as 'viewer' | 'artist';
    if (storedRole) {
      setRole(storedRole);
    }
  }, []);

  if (!role) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-gray-500">Loading feed...</div>
      </div>
    );
  }

  return (
    <main className="p-4 space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Live Feed</h1>
        <div className="flex items-center gap-4">
          <span className="text-sm font-medium px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full capitalize">
            {role} Mode
          </span>
          <Link href="/" className="text-sm text-blue-500 hover:underline">
            Switch Role
          </Link>
        </div>
      </div>

      <div className="grid gap-6">
        {feed.map((item) => {
          // If artist, wrap in Link to room
          if (role === 'artist') {
            return (
              <Link key={item.id} href={`/room/${item.id}`} className="block group">
                <div className="border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <div className="pointer-events-none">
                    <VideoPlayer
                      streamUrl={item.src}
                      autoPlay={false}
                      muted={true}
                      controls={false}
                    />
                  </div>
                  <div className="p-4 bg-white dark:bg-gray-800">
                    <h3 className="font-semibold text-lg group-hover:text-blue-500">
                      {item.caption}
                    </h3>
                    <p className="text-sm text-gray-500">Room ID: {item.id}</p>
                    <div className="mt-2 inline-block px-3 py-1 bg-blue-100 text-blue-700 text-xs font-bold rounded-full">
                      Join Room
                    </div>
                  </div>
                </div>
              </Link>
            );
          }

          // If viewer, show playable video without link
          return (
            <div key={item.id} className="border rounded-xl overflow-hidden shadow-sm">
              <div>
                <VideoPlayer
                  streamUrl={item.src}
                  autoPlay={false}
                  muted={false}
                  controls={true}
                />
              </div>
              <div className="p-4 bg-white dark:bg-gray-800">
                <h3 className="font-semibold text-lg">
                  {item.caption}
                </h3>
                <p className="text-sm text-gray-500">Room ID: {item.id}</p>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}
