"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import VideoPlayer from "@/components/VideoPlayer";

const ROLES = ["Singer", "Guitarist", "Drummer", "Keyboard", "Bass"];

export default function RoomPage() {
  const params = useParams();
  const roomId = params.roomId as string;
  const [selectedRole, setSelectedRole] = useState<string | null>(null);
  const [isOwner, setIsOwner] = useState(false);
  const [guestName, setGuestName] = useState<string | null>(null);
  const [isRecording, setIsRecording] = useState(false);
  const [timer, setTimer] = useState(0);
  const [inviteCopied, setInviteCopied] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);
  
  type TrackState = {
    [role: string]: {
      status: 'empty' | 'recorded';
      user?: string;
    };
  };

  const [tracks, setTracks] = useState<TrackState>(
    ROLES.reduce((acc, role) => ({ ...acc, [role]: { status: 'empty' } }), {})
  );

  // Load state from localStorage on mount
  useEffect(() => {
    // 1. Initialize Guest Identity
    const storedName = localStorage.getItem("bandmate-guest-name");
    if (storedName) {
      setGuestName(storedName);
    } else {
      const newName = `Guest-${Math.floor(1000 + Math.random() * 9000).toString(16).toUpperCase()}`;
      localStorage.setItem("bandmate-guest-name", newName);
      setGuestName(newName);
    }

    // 2. Load Room State
    const savedState = localStorage.getItem(`bandmate-room-${roomId}`);
    if (savedState) {
      try {
        const parsed = JSON.parse(savedState);
        if (parsed.selectedRole) setSelectedRole(parsed.selectedRole);
        
        if (parsed.tracks) {
           // Ensure tracks follow the correct shape
           const cleanTracks: TrackState = {};
           ROLES.forEach(role => {
             const track = parsed.tracks[role];
             if (track && typeof track === 'object' && track.status) {
               cleanTracks[role] = track;
             } else {
               cleanTracks[role] = { status: 'empty' };
             }
           });
           setTracks(cleanTracks);
        }
        
        if (typeof parsed.isOwner === 'boolean') setIsOwner(parsed.isOwner);
      } catch (e) {
        console.error("Failed to parse room state", e);
      }
    } else {
      // First visitor logic
      setIsOwner(true);
    }
    setIsInitialized(true);
  }, [roomId]);

  // Save state to localStorage on change
  useEffect(() => {
    if (!isInitialized) return;

    const stateToSave = {
      selectedRole,
      tracks,
      isOwner
    };
    localStorage.setItem(`bandmate-room-${roomId}`, JSON.stringify(stateToSave));
  }, [roomId, selectedRole, tracks, isOwner, isInitialized]);

  // In a real app, you'd fetch the stream URL based on roomId
  const streamUrl = "/test-video.mp4";

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isRecording) {
      interval = setInterval(() => {
        setTimer((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRecording]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  const handleCloseRecording = () => {
    setIsRecording(false);
    setTimer(0);
  };

  const handleSaveRecording = () => {
    if (selectedRole && guestName) {
      setTracks(prev => ({
        ...prev,
        [selectedRole]: { status: 'recorded', user: guestName }
      }));
    }
    handleCloseRecording();
  };

  const handleCopyInvite = () => {
    const url = `${window.location.origin}/room/${roomId}`;
    navigator.clipboard.writeText(url);
    setInviteCopied(true);
    setTimeout(() => setInviteCopied(false), 2000);
  };

  return (
    <main className="p-4 flex flex-col items-center min-h-screen font-sans">
      <div className="w-full max-w-4xl space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <h1 className="text-2xl font-bold">Room {roomId}</h1>
            <span className="px-3 py-1 bg-red-500 text-white text-xs font-bold rounded-full uppercase tracking-wider">
              Live
            </span>
            {isOwner && (
              <span className="px-2 py-0.5 bg-yellow-500/20 text-yellow-600 dark:text-yellow-400 text-xs font-bold rounded border border-yellow-500/30 uppercase tracking-wide">
                Owner
              </span>
            )}
          </div>
          <button 
            onClick={handleCopyInvite}
            className="flex items-center gap-2 px-3 py-1.5 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 rounded-md text-sm font-medium transition-colors"
          >
            <span>{inviteCopied ? 'Link Copied!' : 'Invite bandmate'}</span>
            {!inviteCopied && (
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="14" height="14" x="8" y="8" rx="2" ry="2"/>
                <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>
              </svg>
            )}
          </button>
        </div>

        {/* Video Player */}
        <VideoPlayer
          streamUrl={streamUrl}
          autoPlay={true}
          muted={false}
          controls={true}
        />

        {/* Multi-track Band Stack */}
        <div className="space-y-3">
            <h2 className="text-lg font-bold">Band Stack</h2>
            <div className="grid gap-3">
                {ROLES.map(role => (
                    <div key={role} className="flex items-center gap-4 p-3 bg-gray-100 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
                        <div className="w-24 font-medium text-sm">{role}</div>
                        
                        <div className="flex-1 h-8 bg-gray-200 dark:bg-gray-700 rounded relative overflow-hidden">
                            {tracks[role].status === 'recorded' ? (
                                <div className="absolute inset-0 flex items-center justify-center gap-0.5 opacity-50">
                                    {[...Array(20)].map((_, i) => (
                                        <div 
                                            key={i} 
                                            className="w-1 bg-green-500 rounded-full"
                                            style={{ height: `${30 + Math.random() * 70}%` }}
                                        />
                                    ))}
                                </div>
                            ) : (
                                <div className="absolute inset-0 flex items-center justify-center text-xs text-gray-400">
                                    Waiting for track...
                                </div>
                            )}
                        </div>

                        <div className={`px-2 py-1 rounded text-xs font-bold uppercase ${
                            tracks[role].status === 'recorded' 
                                ? 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400' 
                                : 'bg-gray-200 text-gray-500 dark:bg-gray-700 dark:text-gray-400'
                        }`}>
                            {tracks[role].status === 'recorded' ? `Taken by ${tracks[role].user}` : 'Empty'}
                        </div>
                    </div>
                ))}
            </div>
        </div>

        {/* Role Selection / Status Area */}
        <div className="p-6 rounded-xl border bg-gray-50 dark:bg-gray-800/50 dark:border-gray-700 shadow-sm">
          {!selectedRole ? (
            <div className="text-center space-y-4">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                Choose your role to join the session
              </h2>
              <div className="flex flex-wrap justify-center gap-3">
                {ROLES.map((role) => {
                  const isTaken = tracks[role].status === 'recorded';
                  const takenBy = tracks[role].user;
                  return (
                    <button
                      key={role}
                      onClick={() => !isTaken && setSelectedRole(role)}
                      disabled={isTaken}
                      className={`px-4 py-2 border rounded-lg font-medium text-sm shadow-sm transition-colors ${
                        isTaken 
                          ? "bg-gray-100 dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-400 cursor-not-allowed"
                          : "bg-white dark:bg-gray-700 border-gray-200 dark:border-gray-600 hover:border-blue-500 hover:text-blue-500 hover:bg-blue-50 dark:hover:bg-gray-600 dark:hover:text-blue-400"
                      }`}
                    >
                      {role} {isTaken && `(${takenBy || 'Taken'})`}
                    </button>
                  );
                })}
              </div>
            </div>
          ) : (
            <div className="text-center space-y-4">
              <div className="inline-block px-4 py-1.5 bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300 rounded-full text-sm font-medium">
                You joined as: {selectedRole}
              </div>
              <div>
                <button
                  onClick={() => setIsRecording(true)}
                  className="px-6 py-2.5 bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-500 rounded-lg font-medium text-sm transition-colors shadow-sm"
                >
                  Add your part
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Recording Modal */}
      {isRecording && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
          <div className="w-full max-w-md bg-gray-900 border border-gray-700 rounded-2xl p-6 shadow-2xl space-y-6 text-white">
            <div className="text-center space-y-1">
              <h3 className="text-xl font-bold">Recording your part</h3>
              <p className="text-sm text-gray-400">Syncing with room audio...</p>
            </div>

            {/* Fake Waveform */}
            <div className="h-24 flex items-center justify-center gap-1">
              {[...Array(12)].map((_, i) => (
                <div
                  key={i}
                  className="w-2 bg-red-500 rounded-full animate-pulse"
                  style={{
                    height: `${Math.max(30, Math.random() * 100)}%`,
                    animationDuration: `${0.5 + Math.random() * 0.5}s`,
                  }}
                />
              ))}
            </div>

            <div className="text-center">
              <div className="text-4xl font-mono font-medium tracking-wider">
                {formatTime(timer)}
              </div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={handleCloseRecording}
                className="flex-1 px-4 py-3 bg-gray-800 hover:bg-gray-700 rounded-xl font-medium transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleSaveRecording}
                className="flex-1 px-4 py-3 bg-red-600 hover:bg-red-700 text-white rounded-xl font-medium transition-colors"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
