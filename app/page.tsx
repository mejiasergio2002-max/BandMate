"use client";

import { useRouter } from "next/navigation";

export default function LandingPage() {
  const router = useRouter();

  const handleRoleSelect = (role: 'viewer' | 'artist') => {
    localStorage.setItem('bandmate-role', role);
    router.push('/feed');
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-50 dark:bg-gray-900">
      <div className="w-full max-w-md space-y-8 text-center">
        <div>
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
            BandMate
          </h1>
          <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">
            Collaborate on music or watch live sessions.
          </p>
        </div>

        <div className="space-y-4">
          <button
            onClick={() => handleRoleSelect('viewer')}
            className="block w-full px-8 py-4 text-lg font-semibold text-white bg-blue-600 rounded-xl hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/30"
          >
            Continue as Viewer
          </button>
          
          <button
            onClick={() => handleRoleSelect('artist')}
            className="block w-full px-8 py-4 text-lg font-semibold text-gray-900 bg-white border-2 border-gray-200 rounded-xl hover:border-gray-300 hover:bg-gray-50 dark:bg-gray-800 dark:text-white dark:border-gray-700 dark:hover:border-gray-600 transition-colors"
          >
            Continue as Artist
          </button>
        </div>
      </div>
    </main>
  );
}
