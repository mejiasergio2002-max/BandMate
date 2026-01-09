"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import VideoPlayer from "@/components/VideoPlayer";

const MOCK_USERS = [
  {
    id: "u1",
    name: "Alice Guitarist",
    role: "Artist",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alice",
  },
  {
    id: "u2",
    name: "Bob Drummer",
    role: "Artist",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Bob",
  },
];

const feed = [
  { 
    id: "101", 
    src: "/videos/sample1.mp4", 
    caption: "Live Session #1",
    user: MOCK_USERS[0]
  },
  { 
    id: "102", 
    src: "/videos/sample2.mp4", 
    caption: "Jamming in Studio",
    user: MOCK_USERS[1]
  },
];

export default function FeedPage() {
  // Default to viewer if no role is stored, to prevent blocking
  const [role, setRole] = useState<'viewer' | 'artist'>('viewer');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const storedRole = localStorage.getItem('bandmate-role') as 'viewer' | 'artist';
    if (storedRole) {
      setRole(storedRole);
    }
    setIsLoaded(true);
  }, []);

  // Show feed immediately, even if checking storage
  // We can just render with the default 'viewer' role initially

  return (
    <main className="p-4 space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Live Feed</h1>
        <div className="flex items-center gap-4">
          <span className="text-sm font-medium px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full capitalize">
            {isLoaded ? role : 'Guest'} Mode
          </span>
          <Link href="/" className="text-sm text-blue-500 hover:underline">
            Switch Role
          </Link>
        </div>
      </div>

      <div className="grid gap-6">
        {feed.map((item) => {
          const content = (
            <>
               <div className="pointer-events-none">
                <VideoPlayer
                  streamUrl={item.src}
                  autoPlay={false}
                  muted={role === 'artist'} // Mute if we are showing it as a preview card
                  controls={role === 'viewer'} // Controls for viewer only
                />
              </div>
              <div className="p-4 bg-white dark:bg-gray-800">
                <div className="flex items-center gap-3 mb-3">
                  <img 
                    src={item.user.avatar} 
                    alt={item.user.name}
                    className="w-10 h-10 rounded-full bg-gray-200"
                  />
                  <div>
                    <div className="font-semibold text-sm">{item.user.name}</div>
                    <div className="text-xs text-gray-500">{item.user.role}</div>
                  </div>
                </div>
                <h3 className="font-semibold text-lg group-hover:text-blue-500">
                  {item.caption}
                </h3>
                <p className="text-sm text-gray-500 mb-3">Room ID: {item.id}</p>
                {role === 'artist' && (
                  <div className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-xs font-bold rounded-full">
                    Join Room
                  </div>
                )}
              </div>
            </>
          );

          if (role === 'artist') {
            return (
              <Link key={item.id} href={`/room/${item.id}`} className="block group border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                {content}
              </Link>
            );
          }

          return (
            <div key={item.id} className="border rounded-xl overflow-hidden shadow-sm">
               {/* Re-render video player with controls for viewer since content block above had conditional props */}
               <div>
                <VideoPlayer
                  streamUrl={item.src}
                  autoPlay={false}
                  muted={false}
                  controls={true}
                />
              </div>
              <div className="p-4 bg-white dark:bg-gray-800">
                <div className="flex items-center gap-3 mb-3">
                  <img 
                    src={item.user.avatar} 
                    alt={item.user.name}
                    className="w-10 h-10 rounded-full bg-gray-200"
                  />
                  <div>
                    <div className="font-semibold text-sm">{item.user.name}</div>
                    <div className="text-xs text-gray-500">{item.user.role}</div>
                  </div>
                </div>
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
