"use client";

import Link from "next/link";
import VideoPlayer from "@/components/VideoPlayer";

const feed = [
  { id: "101", src: "/videos/sample1.mp4", caption: "Live Session #1" },
  { id: "102", src: "/videos/sample2.mp4", caption: "Jamming in Studio" },
];

export default function Home() {
  return (
    <main className="p-4 space-y-8">
      <h1 className="text-2xl font-bold mb-4">Live Feed</h1>
      <div className="grid gap-6">
        {feed.map((item) => (
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
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
